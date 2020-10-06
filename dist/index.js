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
    Client.prototype.getGuilds = function () {
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
var client = new Client('nNX8tEtxilhFO6nnrBSRI4bkR5gLBw');
client.getGuilds()
    .then(function (guilds) { return console.log(guilds[0].features); });
