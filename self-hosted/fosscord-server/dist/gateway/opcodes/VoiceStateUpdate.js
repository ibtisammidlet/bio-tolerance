"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onVoiceStateUpdate = void 0;
const util_1 = require("#util");
const SessionUtils_1 = require("../util/SessionUtils");
const instanceOf_1 = require("./instanceOf");
// TODO: check if a voice server is setup
// Notice: Bot users respect the voice channel's user limit, if set. When the voice channel is full, you will not receive the Voice State Update or Voice Server Update events in response to your own Voice State Update. Having MANAGE_CHANNELS permission bypasses this limit and allows you to join regardless of the channel being full or not.
async function onVoiceStateUpdate(data) {
    instanceOf_1.check.call(this, util_1.VoiceStateUpdateSchema, data.d);
    const body = data.d;
    if (body.guild_id == null) {
        console.log(`[Gateway] VoiceStateUpdate called with guild_id == null by user ${this.user_id}!`);
        return;
    }
    let voiceState;
    try {
        voiceState = await util_1.VoiceState.findOneOrFail({
            where: { user_id: this.user_id }
        });
        if (voiceState.session_id !== this.session_id && body.channel_id === null) {
            //Should we also check guild_id === null?
            //changing deaf or mute on a client that's not the one with the same session of the voicestate in the database should be ignored
            return;
        }
        //If a user change voice channel between guild we should send a left event first
        if (voiceState.guild_id !== body.guild_id && voiceState.session_id === this.session_id) {
            await (0, util_1.emitEvent)({
                event: "VOICE_STATE_UPDATE",
                data: { ...voiceState, channel_id: null },
                guild_id: voiceState.guild_id
            });
        }
        //The event send by Discord's client on channel leave has both guild_id and channel_id as null
        if (body.guild_id === null)
            body.guild_id = voiceState.guild_id;
        voiceState = util_1.OrmUtils.mergeDeep(voiceState, body);
    }
    catch (error) {
        voiceState = util_1.OrmUtils.mergeDeep(new util_1.VoiceState(), {
            ...body,
            user_id: this.user_id,
            deaf: false,
            mute: false,
            suppress: false
        });
    }
    //TODO the member should only have these properties: hoisted_role, deaf, joined_at, mute, roles, user
    //TODO the member.user should only have these properties: avatar, discriminator, id, username
    //TODO this may fail
    voiceState.member = await util_1.Member.findOneOrFail({
        where: { id: voiceState.user_id, guild_id: voiceState.guild_id },
        relations: ["user", "roles"]
    });
    //If the session changed we generate a new token
    if (voiceState.session_id !== this.session_id)
        voiceState.token = (0, SessionUtils_1.genVoiceToken)();
    voiceState.session_id = this.session_id;
    const { id, ...newObj } = voiceState;
    await Promise.all([
        voiceState.save(),
        (0, util_1.emitEvent)({
            event: "VOICE_STATE_UPDATE",
            data: newObj,
            guild_id: voiceState.guild_id
        })
    ]);
    //If it's null it means that we are leaving the channel and this event is not needed
    if (voiceState.channel_id !== null) {
        const guild = await util_1.Guild.findOne({ where: { id: voiceState.guild_id } });
        const regions = util_1.Config.get().regions;
        let guildRegion;
        if (guild && guild.region) {
            guildRegion = regions.available.filter((r) => r.id === guild.region)[0];
        }
        else {
            guildRegion = regions.available.filter((r) => r.id === regions.default)[0];
        }
        await (0, util_1.emitEvent)({
            event: "VOICE_SERVER_UPDATE",
            data: {
                token: voiceState.token,
                guild_id: voiceState.guild_id,
                endpoint: guildRegion.endpoint
            },
            guild_id: voiceState.guild_id
        });
    }
}
exports.onVoiceStateUpdate = onVoiceStateUpdate;
//# sourceMappingURL=VoiceStateUpdate.js.map