import * as request from 'request-promise-native';

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
    getUser() {
        request.get('https://discord.com/api/users/@me', {
            headers: {
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(res => { return res })
            .catch(err => { throw err });
    }

    /**
     * @method: Get guilds of user from token
     */
    getGuilds() {
        request.get('https://discord.com/api/users/@me/guilds', {
            headers: {
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(res => { return res })
            .catch(err => { throw err });
    }
}