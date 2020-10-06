import * as axios from 'axios';

import User from './interfaces/User';
import Guild from './interfaces/Guild';

const baseUrl = 'https://discord.com/api/';

export class Client {
    #token: any = null;

    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
     */
    constructor (token: string) {
        this.#token = token;
    }

    /**
     * @method: Get user from token
     */
    fetchUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            axios.default.get(baseUrl + 'users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.#token,
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
            axios.default.get(baseUrl + 'users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.#token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}