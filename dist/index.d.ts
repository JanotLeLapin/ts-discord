import User from './interfaces/User';
import Guild from './interfaces/Guild';
export declare class Client {
    #private;
    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
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
