"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const imageBaseUrl = 'https://cdn.discordapp.com/';
const baseUrl = 'https://discord.com/api/';
class Client {
    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
     */
    constructor(token) {
        this.token = null;
        this.token = token;
    }
    /**
     * @method: Get current user
     */
    fetchUser() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => {
                const data = res.data;
                if (data.avatar)
                    data.avatarURL = imageBaseUrl + 'avatars/' + data.id + '/' + data.avatar;
                resolve(data);
            })
                .catch(err => reject(err.response.data));
        });
    }
    /**
     * @method: Get guilds of current user
     */
    fetchGuilds() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => {
                const data = res.data;
                data.forEach(guild => { if (guild.icon)
                    guild.iconURL = imageBaseUrl + 'icons/' + guild.id + '/' + guild.icon; });
                resolve(data);
            })
                .catch(err => reject(err.response.data));
        });
    }
    /**
     * @method: Get connections of current user
     */
    fetchConnections() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me/connections', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err.response.data));
        });
    }
}
exports.default = Client;
