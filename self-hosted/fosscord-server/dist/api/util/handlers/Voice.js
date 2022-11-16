"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoiceRegions = void 0;
const util_1 = require("#util");
async function getVoiceRegions(ipAddress, vip) {
    const regions = util_1.Config.get().regions;
    const availableRegions = regions.available.filter((ar) => (vip ? true : !ar.vip));
    let optimalId = regions.default;
    if (!regions.useDefaultAsOptimal) {
        const clientIpAnalysis = await (0, util_1.IPAnalysis)(ipAddress);
        let min = Number.POSITIVE_INFINITY;
        for (let ar of availableRegions) {
            //TODO the endpoint location should be saved in the database if not already present to prevent IPAnalysis call
            const dist = (0, util_1.distanceBetweenLocations)(clientIpAnalysis, ar.location || (await (0, util_1.IPAnalysis)(ar.endpoint)));
            if (dist < min) {
                min = dist;
                optimalId = ar.id;
            }
        }
    }
    return availableRegions.map((ar) => ({
        id: ar.id,
        name: ar.name,
        custom: ar.custom,
        deprecated: ar.deprecated,
        optimal: ar.id === optimalId
    }));
}
exports.getVoiceRegions = getVoiceRegions;
//# sourceMappingURL=Voice.js.map