"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios = require("axios");
var Bot = /** @class */ (function () {
    function Bot(token) {
        this.token = '';
        this.token = token;
    }
    Bot.prototype.getUser = function (id) {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: 'Bearer ' + this.token,
        })
            .then(function (res) { return res.data; })
            .catch(function (err) { return err.response; });
    };
    return Bot;
}());
