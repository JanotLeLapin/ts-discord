"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios = require("axios");
const baseUrl = 'https://discord.com/api/';
class Client {
    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
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
    fetchGuilds() {
        return new Promise((resolve, reject) => {
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
exports.Client = Client;
