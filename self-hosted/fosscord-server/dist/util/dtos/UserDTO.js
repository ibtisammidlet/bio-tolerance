"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimalPublicUserDTO = void 0;
class MinimalPublicUserDTO {
    avatar;
    discriminator;
    id;
    public_flags;
    username;
    constructor(user) {
        this.avatar = user.avatar;
        this.discriminator = user.discriminator;
        this.id = user.id;
        this.public_flags = user.public_flags;
        this.username = user.username;
    }
}
exports.MinimalPublicUserDTO = MinimalPublicUserDTO;
//# sourceMappingURL=UserDTO.js.map