import axios from 'axios';

import User from './interfaces/User';
import Guild from './interfaces/Guild';
import Connection from './interfaces/Connection';

const imageBaseUrl = 'https://cdn.discordapp.com/';
const baseUrl = 'https://discord.com/api/';

export default class Client {
    token: string;

    /**
     * @method: Initialize client
     * @param {string} token - OAuth2 bearer access token provided by the OAuth2 API.
     */
    constructor (token: string) {
        this.token = token;
    }

    /**
     * @method: Get current user
     */
    fetchUser(): Promise<User> {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + 'users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => {
                    const data: User = res.data;
                    if (data.avatar) data.avatarURL = imageBaseUrl + 'avatars/' + data.id + '/' + data.avatar;
                    resolve(data);
                })
                .catch(err => reject(err.response.data));
        });
    }

    /**
     * @method: Get guilds of current user
     */
    fetchGuilds(): Promise<Guild[]> {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + 'users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => {
                    const data: Guild[] = res.data;
                    data.forEach(guild => { if (guild.icon) guild.iconURL = imageBaseUrl + 'icons/' + guild.id + '/' + guild.icon });
                    resolve(data);
                })
                .catch(err => reject(err.response.data));
        });
    }

    /**
     * @method: Get connections of current user
     */
    fetchConnections(): Promise<Connection[]> {
        return new Promise((resolve, reject) => {
            axios.get(baseUrl + 'users/@me/connections', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err.response.data));
        });
    }
}