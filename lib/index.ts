import * as axios from 'axios';

export class Client {
    _token: any = null;

    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor (token: string) {
        this._token = token;
    }

    /**
     * @method: Get user from token
     */
    getUser() {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: 'Bearer ' + this._token,
        })
            .then(res => { return res.data })
            .catch(err => { throw err });
    }

    /**
     * @method: Get guilds of user from token
     */
    getGuilds() {
        axios.default.get('https://discord.com/api/users/@me/guilds', {
            headers: 'Bearer ' + this._token,
        })
            .then(res => { return res.data })
            .catch(err => { throw err })
    }
}