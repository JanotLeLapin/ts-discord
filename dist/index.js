"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
var Client = /** @class */ (function () {
    function Client(token) {
        this.token = '';
        this.token = token;
    }
    /**
     * @method: Get user from token
     */
    Client.prototype.getUser = function () {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: 'Bearer ' + this.token,
        })
            .then(function (res) { return res.data; })
            .catch(function (err) { return err.response; });
    };
    return Client;
}());
exports.default = Client;
