import * as axios from 'axios';

import User from './interfaces/User';
import Guild from './interfaces/Guild';

export class Client {
    token: any = null;

    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor (token: string) {
        this.token = token;
    }

    /**
     * @method: Get user from token
     */
    fetchUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    /**
     * @method: Get guilds of user from token
     */
    fetchGuilds(): Promise<Guild[]> {
        return new Promise<Guild[]>((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}