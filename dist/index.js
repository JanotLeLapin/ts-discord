"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios = require("axios");
class Client {
    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor(token) {
        this.#token = null;
        this.#token = token;
    }
    #token;
    /**
     * @method: Get user from token
     */
    fetchUser() {
        return new Promise((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me', {
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
    fetchGuilds() {
        return new Promise((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.#token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}
exports.Client = Client;
