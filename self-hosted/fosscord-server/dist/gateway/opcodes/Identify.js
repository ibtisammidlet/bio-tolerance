"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onIdentify = void 0;
const util_1 = require("#util");
const listener_1 = require("../listener/listener");
const Constants_1 = require("../util/Constants");
const Send_1 = require("../util/Send");
const SessionUtils_1 = require("../util/SessionUtils");
const instanceOf_1 = require("./instanceOf");
// import experiments from "./experiments.json";
const experiments = [];
// TODO: user sharding
// TODO: check privileged intents, if defined in the config
// TODO: check if already identified
async function onIdentify(data) {
    clearTimeout(this.readyTimeout);
    instanceOf_1.check.call(this, util_1.IdentifySchema, data.d);
    const identify = data.d;
    try {
        const { jwtSecret } = util_1.Config.get().security;
        var { decoded } = await (0, util_1.checkToken)(identify.token, jwtSecret); // will throw an error if invalid
    }
    catch (error) {
        console.error("invalid token", error);
        return this.close(Constants_1.CLOSECODES.Authentication_failed);
    }
    this.user_id = decoded.id;
    const session_id = (0, SessionUtils_1.genSessionId)();
    this.session_id = session_id; //Set the session of the WebSocket object
    const [user, read_states, members, recipients, session, application] = await Promise.all([
        util_1.User.findOneOrFail({
            where: { id: this.user_id },
            relations: ["relationships", "relationships.to", "settings"],
            select: [...util_1.PrivateUserProjection, "relationships"]
        }),
        util_1.ReadState.find({ where: { user_id: this.user_id } }),
        util_1.Member.find({
            where: { id: this.user_id },
            select: util_1.MemberPrivateProjection,
            relations: ["guild", "guild.channels", "guild.emojis", "guild.emojis.user", "guild.roles", "guild.stickers", "user", "roles"]
        }),
        util_1.Recipient.find({
            where: { user_id: this.user_id, closed: false },
            relations: ["channel", "channel.recipients", "channel.recipients.user"]
            // TODO: public user selection
        }),
        // save the session and delete it when the websocket is closed
        await util_1.OrmUtils.mergeDeep(new util_1.Session(), {
            user_id: this.user_id,
            session_id: session_id,
            // TODO: check if status is only one of: online, dnd, offline, idle
            status: identify.presence?.status || "offline",
            client_info: {
                //TODO read from identity
                client: "desktop",
                os: identify.properties?.os,
                version: 0
            },
            activities: []
        }).save(),
        util_1.Application.findOne({ where: { id: this.user_id } })
    ]);
    if (!user)
        return this.close(Constants_1.CLOSECODES.Authentication_failed);
    if (!user.settings) {
        //settings may not exist after updating...
        user.settings = new util_1.UserSettings();
        user.settings.id = user.id;
        //await (user.settings as UserSettings).save();
    }
    if (!identify.intents)
        identify.intents = "30064771071";
    this.intents = new util_1.Intents(identify.intents);
    if (identify.shard) {
        this.shard_id = identify.shard[0];
        this.shard_count = identify.shard[1];
        if (this.shard_count == null ||
            this.shard_id == null ||
            this.shard_id >= this.shard_count ||
            this.shard_id < 0 ||
            this.shard_count <= 0) {
            console.log(identify.shard);
            return this.close(Constants_1.CLOSECODES.Invalid_shard);
        }
    }
    let users = [];
    const merged_members = members.map((x) => {
        return [
            {
                ...x,
                roles: x.roles.map((x) => x.id),
                settings: undefined,
                guild: undefined
            }
        ];
    });
    let guilds = members.map((x) => ({ ...x.guild, joined_at: x.joined_at }));
    // @ts-ignore
    guilds = guilds.map((guild) => {
        if (user.bot) {
            setTimeout(() => {
                (0, Send_1.Send)(this, {
                    op: Constants_1.OPCODES.Dispatch,
                    t: util_1.EVENTEnum.GuildCreate,
                    s: this.sequence++,
                    d: guild
                });
            }, 500);
            return { id: guild.id, unavailable: true };
        }
        return guild;
    });
    const user_guild_settings_entries = members.map((x) => x.settings);
    const channels = recipients.map((x) => {
        // @ts-ignore
        x.channel.recipients = x.channel.recipients?.map((x) => x.user);
        //TODO is this needed? check if users in group dm that are not friends are sent in the READY event
        users = users.concat(x.channel.recipients);
        if (x.channel.isDm()) {
            x.channel.recipients = x.channel.recipients.filter((x) => x.id !== this.user_id);
        }
        return x.channel;
    });
    for (let relation of user.relationships) {
        const related_user = relation.to;
        const public_related_user = {
            username: related_user.username,
            discriminator: related_user.discriminator,
            id: related_user.id,
            public_flags: related_user.public_flags,
            avatar: related_user.avatar,
            bot: related_user.bot,
            bio: related_user.bio,
            premium_since: user.premium_since
        };
        users.push(public_related_user);
    }
    setImmediate(async () => {
        // run in seperate "promise context" because ready payload is not dependent on those events
        (0, util_1.emitEvent)({
            event: "SESSIONS_REPLACE",
            user_id: this.user_id,
            data: await util_1.Session.find({
                where: { user_id: this.user_id },
                select: util_1.PrivateSessionProjection
            })
        });
        (0, util_1.emitEvent)({
            event: "PRESENCE_UPDATE",
            user_id: this.user_id,
            data: {
                user: await util_1.User.getPublicUser(this.user_id),
                activities: session.activities,
                client_status: session?.client_info,
                status: session.status
            }
        });
    });
    read_states.forEach((s) => {
        s.id = s.channel_id;
        delete s.user_id;
        delete s.channel_id;
    });
    const privateUser = {
        avatar: user.avatar,
        mobile: user.mobile,
        desktop: user.desktop,
        discriminator: user.discriminator,
        email: user.email,
        flags: user.flags,
        id: user.id,
        mfa_enabled: user.mfa_enabled,
        nsfw_allowed: user.nsfw_allowed,
        phone: user.phone,
        premium: user.premium,
        premium_type: user.premium_type,
        public_flags: user.public_flags,
        username: user.username,
        verified: user.verified,
        bot: user.bot,
        accent_color: user.accent_color || 0,
        banner: user.banner,
        bio: user.bio,
        premium_since: user.premium_since
    };
    const d = {
        v: 8,
        application: { id: application?.id ?? "", flags: application?.flags ?? 0 },
        user: privateUser,
        user_settings: user.settings,
        // @ts-ignore
        guilds: guilds.map((x) => {
            // @ts-ignore
            x.guild_hashes = {}; // @ts-ignore
            x.guild_scheduled_events = []; // @ts-ignore
            x.threads = [];
            return x;
        }),
        guild_experiments: [],
        geo_ordered_rtc_regions: [],
        relationships: user.relationships.map((x) => x.toPublicRelationship()),
        read_state: {
            entries: read_states,
            partial: false,
            version: 304128
        },
        user_guild_settings: {
            entries: user_guild_settings_entries,
            partial: false,
            version: 642
        },
        private_channels: channels,
        session_id: session_id,
        analytics_token: "",
        connected_accounts: [],
        consents: {
            personalization: {
                consented: false // TODO
            }
        },
        country_code: user.settings.locale,
        friend_suggestion_count: 0,
        // @ts-ignore
        experiments: experiments,
        guild_join_requests: [],
        users: users.filter((x) => x).unique(),
        merged_members: merged_members
        // shard // TODO: only for user sharding
    };
    // TODO: send real proper data structure
    await (0, Send_1.Send)(this, {
        op: Constants_1.OPCODES.Dispatch,
        t: util_1.EVENTEnum.Ready,
        s: this.sequence++,
        d
    });
    //TODO send READY_SUPPLEMENTAL
    //TODO send GUILD_MEMBER_LIST_UPDATE
    //TODO send SESSIONS_REPLACE
    //TODO send VOICE_STATE_UPDATE to let the client know if another device is already connected to a voice channel
    await listener_1.setupListener.call(this);
}
exports.onIdentify = onIdentify;
//# sourceMappingURL=Identify.js.map