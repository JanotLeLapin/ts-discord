"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var axios = require("axios");
var Client = /** @class */ (function () {
    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    function Client(token) {
        this.token = null;
        this.token = token;
    }
    /**
     * @method: Get user from token
     */
    Client.prototype.getUser = function () {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: {
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(function (res) { return res; })
            .catch(function (err) { throw err; });
    };
    /**
     * @method: Get guilds of user from token
     */
    Client.prototype.getGuilds = function () {
        axios.default.get('https://discord.com/api/users/@me/guilds', {
            headers: {
                'Authorization': 'Bearer ' + this.token,
            },
        })
            .then(function (res) { return res; })
            .catch(function (err) { throw err; });
    };
    return Client;
}());
exports.Client = Client;
