import * as axios from 'axios';

interface User {
    id:            string;
    username:      string;
    avatar:        string;
    discriminator: string;
    public_flags:  number;
    flags:         number;
    locale:        string;
    mfa_enabled:   boolean;
}

type feature = "BANNER" | "COMMUNITY" | "ANIMATED_ICON" | "INVITE_SPLASH" | "NEWS";
interface Guild {
    id:              string;
    name:            string;
    icon:            string;
    owner:           boolean;
    permissions:     number;
    features:        feature[];
    permissions_new: string;
}

export class Client {
    token: any = null;

    /**
     * @method: Initialize client
     * @param {string} token - Bearer access token provided by Discord
     */
    constructor (token: string) {
        this.token = token;
    }

    /**
     * @method: Get user from token
     */
    getUser(): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }

    /**
     * @method: Get guilds of user from token
     */
    getGuilds(): Promise<Guild[]> {
        return new Promise<Guild[]>((resolve, reject) => {
            axios.default.get('https://discord.com/api/users/@me/guilds', {
                headers: {
                    'Authorization': 'Bearer ' + this.token,
                },
            })
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    }
}

const client = new Client('nNX8tEtxilhFO6nnrBSRI4bkR5gLBw');
client.getGuilds()
    .then(guilds => console.log(guilds[0].features));