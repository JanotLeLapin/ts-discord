"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const axios_1 = require("axios");
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
     * @method: Get current user
     */
    fetchUser() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.#token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    /**
     * @method: Get guilds of current user
     */
    fetchGuilds() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.#token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
    /**
     * @method: Get connections of current user
     */
    fetchConnections() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(baseUrl + 'users/@me/connections', {
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
