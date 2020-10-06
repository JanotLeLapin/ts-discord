import User from './interfaces/User';
import Guild from './interfaces/Guild';
export declare class Client {
    #private;
    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor(token: string);
    /**
     * @method: Get user from token
     */
    fetchUser(): Promise<User>;
    /**
     * @method: Get guilds of user from token
     */
    fetchGuilds(): Promise<Guild[]>;
}
