import * as axios from 'axios';

class Bot {
    token = '';

    constructor (token:string) {
        this.token = token;
    }

    getUser(id:string) {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: 'Bearer ' + this.token,
        })
            .then(res => { return res.data })
            .catch(err => { return err.response });
    }
}