interface User {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    public_flags: number;
    flags: number;
    locale: string;
    mfa_enabled: boolean;
}
declare type feature = "BANNER" | "COMMUNITY" | "ANIMATED_ICON" | "INVITE_SPLASH" | "NEWS";
interface Guild {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: number;
    features: feature[];
    permissions_new: string;
}
export declare class Client {
    token: any;
    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor(token: string);
    /**
     * @method: Get user from token
     */
    getUser(): Promise<User>;
    /**
     * @method: Get guilds of user from token
     */
    getGuilds(): Promise<Guild[]>;
}
export {};
