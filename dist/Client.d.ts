import User from './interfaces/User';
import Guild from './interfaces/Guild';
import Connection from './interfaces/Connection';
export default class Client {
    token: any;
    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
     */
    constructor(token: string);
    /**
     * @method: Get current user
     */
    fetchUser(): Promise<User>;
    /**
     * @method: Get guilds of current user
     */
    fetchGuilds(): Promise<Guild[]>;
    /**
     * @method: Get connections of current user
     */
    fetchConnections(): Promise<Connection[]>;
}
