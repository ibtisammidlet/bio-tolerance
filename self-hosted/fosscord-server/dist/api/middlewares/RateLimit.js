"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRateLimits = void 0;
const util_1 = require("#util");
const Authentication_1 = require("./Authentication");
let Cache = new Map();
const EventRateLimit = "RATELIMIT";
function rateLimit(opts) {
    return async (req, res, next) => {
        // exempt user? if so, immediately short circuit
        if (req.user_id) {
            const rights = await (0, util_1.getRights)(req.user_id);
            if (rights.has("BYPASS_RATE_LIMITS"))
                return next();
        }
        const bucket_id = opts.bucket || req.originalUrl.replace(Authentication_1.API_PREFIX_TRAILING_SLASH, "");
        let executor_id = (0, util_1.getIpAdress)(req);
        if (!opts.onlyIp && req.user_id)
            executor_id = req.user_id;
        let max_hits = opts.count;
        if (opts.bot && req.user_bot)
            max_hits = opts.bot;
        if (opts.GET && ["GET", "OPTIONS", "HEAD"].includes(req.method))
            max_hits = opts.GET;
        else if (opts.MODIFY && ["POST", "DELETE", "PATCH", "PUT"].includes(req.method))
            max_hits = opts.MODIFY;
        let offender = Cache.get(executor_id + bucket_id);
        if (offender) {
            let reset = offender.expires_at.getTime();
            let resetAfterMs = reset - Date.now();
            let resetAfterSec = Math.ceil(resetAfterMs / 1000);
            if (resetAfterMs <= 0) {
                offender.hits = 0;
                offender.expires_at = new Date(Date.now() + opts.window * 1000);
                offender.blocked = false;
                Cache.delete(executor_id + bucket_id);
            }
            if (offender.blocked) {
                const global = bucket_id === "global";
                // each block violation pushes the expiry one full window further
                reset += opts.window * 1000;
                offender.expires_at = new Date(offender.expires_at.getTime() + opts.window * 1000);
                resetAfterMs = reset - Date.now();
                resetAfterSec = Math.ceil(resetAfterMs / 1000);
                console.log("blocked bucket: " + bucket_id, { resetAfterMs });
                return (res
                    .status(429)
                    .set("X-RateLimit-Limit", `${max_hits}`)
                    .set("X-RateLimit-Remaining", "0")
                    .set("X-RateLimit-Reset", `${reset}`)
                    .set("X-RateLimit-Reset-After", `${resetAfterSec}`)
                    .set("X-RateLimit-Global", `${global}`)
                    .set("Retry-After", `${Math.ceil(resetAfterSec)}`)
                    .set("X-RateLimit-Bucket", `${bucket_id}`)
                    // TODO: error rate limit message translation
                    .send({ message: "You are being rate limited.", retry_after: resetAfterSec, global }));
            }
        }
        next();
        const hitRouteOpts = { bucket_id, executor_id, max_hits, window: opts.window };
        if (opts.error || opts.success) {
            res.once("finish", () => {
                // check if error and increment error rate limit
                if (res.statusCode >= 400 && opts.error) {
                    return hitRoute(hitRouteOpts);
                }
                else if (res.statusCode >= 200 && res.statusCode < 300 && opts.success) {
                    return hitRoute(hitRouteOpts);
                }
            });
        }
        else {
            return hitRoute(hitRouteOpts);
        }
    };
}
exports.default = rateLimit;
async function initRateLimits(app) {
    const { routes, global, ip, error, disabled } = util_1.Config.get().limits.rate;
    if (disabled)
        return;
    console.log("Enabling rate limits...");
    await (0, util_1.listenEvent)(EventRateLimit, (event) => {
        Cache.set(event.channel_id, event.data);
        event.acknowledge?.();
    });
    // await RateLimit.delete({ expires_at: LessThan(new Date().toISOString()) }); // cleans up if not already deleted, morethan -> older date
    // const limits = await RateLimit.find({ blocked: true });
    // limits.forEach((limit) => {
    // 	Cache.set(limit.executor_id, limit);
    // });
    setInterval(() => {
        Cache.forEach((x, key) => {
            if (new Date() > x.expires_at) {
                Cache.delete(key);
                // RateLimit.delete({ executor_id: key });
            }
        });
    }, 1000 * 60);
    app.use(rateLimit({
        bucket: "global",
        onlyIp: true,
        ...ip
    }));
    app.use(rateLimit({ bucket: "global", ...global }));
    app.use(rateLimit({
        bucket: "error",
        error: true,
        onlyIp: true,
        ...error
    }));
    app.use("/guilds/:id", rateLimit(routes.guild));
    app.use("/webhooks/:id", rateLimit(routes.webhook));
    app.use("/channels/:id", rateLimit(routes.channel));
    app.use("/auth/login", rateLimit(routes.auth.login));
    app.use("/auth/register", rateLimit({ onlyIp: true, success: true, ...routes.auth.register }));
}
exports.initRateLimits = initRateLimits;
async function hitRoute(opts) {
    const id = opts.executor_id + opts.bucket_id;
    let limit = Cache.get(id);
    if (!limit) {
        limit = {
            id: opts.bucket_id,
            executor_id: opts.executor_id,
            expires_at: new Date(Date.now() + opts.window * 1000),
            hits: 0,
            blocked: false
        };
        Cache.set(id, limit);
    }
    limit.hits++;
    if (limit.hits >= opts.max_hits) {
        limit.blocked = true;
    }
    /*
    let ratelimit = await RateLimit.findOne({ where: { id: opts.bucket_id, executor_id: opts.executor_id } });
    if (!ratelimit) {
        ratelimit = new RateLimit({
            id: opts.bucket_id,
            executor_id: opts.executor_id,
            expires_at: new Date(Date.now() + opts.window * 1000),
            hits: 0,
            blocked: false
        });
    }

    ratelimit.hits++;

    const updateBlock = !ratelimit.blocked && ratelimit.hits >= opts.max_hits;

    if (updateBlock) {
        ratelimit.blocked = true;
        Cache.set(opts.executor_id + opts.bucket_id, ratelimit);
        await emitEvent({
            channel_id: EventRateLimit,
            event: EventRateLimit,
            data: ratelimit
        });
    } else {
        Cache.delete(opts.executor_id);
    }

    await ratelimit.save();
    */
}
//# sourceMappingURL=RateLimit.js.map