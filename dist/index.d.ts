export declare class Client {
    _token: any;
    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor(token: string);
    /**
     * @method: Get user from token
     */
    getUser(): void;
    /**
     * @method: Get guilds of user from token
     */
    getGuilds(): void;
}
