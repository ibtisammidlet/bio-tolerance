"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifySchema = void 0;
const ActivitySchema_1 = require("./ActivitySchema");
exports.IdentifySchema = {
    token: String,
    $intents: String,
    $properties: Object,
    // {
    // 	// discord uses $ in the property key for bots, so we need to double prefix it, because instanceOf treats $ (prefix) as a optional key
    // 	$os: String,
    // 	$os_arch: String,
    // 	$browser: String,
    // 	$device: String,
    // 	$$os: String,
    // 	$$browser: String,
    // 	$$device: String,
    // 	$browser_user_agent: String,
    // 	$browser_version: String,
    // 	$os_version: String,
    // 	$referrer: String,
    // 	$$referrer: String,
    // 	$referring_domain: String,
    // 	$$referring_domain: String,
    // 	$referrer_current: String,
    // 	$referring_domain_current: String,
    // 	$release_channel: String,
    // 	$client_build_number: Number,
    // 	$client_event_source: String,
    // 	$client_version: String,
    // 	$system_locale: String,
    // 	$window_manager: String,
    // 	$distro: String,
    // },
    $presence: ActivitySchema_1.ActivitySchema,
    $compress: Boolean,
    $large_threshold: Number,
    $shard: [Number, Number],
    $guild_subscriptions: Boolean,
    $capabilities: Number,
    $client_state: {
        $guild_hashes: Object,
        $highest_last_message_id: String,
        $read_state_version: Number,
        $user_guild_settings_version: Number,
        $user_settings_version: undefined
    },
    $v: Number,
    $version: Number
};
//# sourceMappingURL=IdentifySchema.js.map