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
    Client.prototype.fetchUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios.default.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + _this.token,
                },
            })
                .then(function (res) { return resolve(res.data); })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * @method: Get guilds of user from token
     */
    Client.prototype.fetchGuilds = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios.default.get('https://discord.com/api/users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + _this.token,
                },
            })
                .then(function (res) { return resolve(res.data); })
                .catch(function (err) { return reject(err); });
        });
    };
    return Client;
}());
exports.Client = Client;
