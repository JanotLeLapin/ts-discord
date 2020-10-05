import * as axios from 'axios';

class Client {
    token = '';

    constructor (token:string) {
        this.token = token;
    }

    /**
     * @method: Get user from token
     */
    getUser() {
        axios.default.get('https://discord.com/api/users/@me', {
            headers: 'Bearer ' + this.token,
        })
            .then(res => { return res.data })
            .catch(err => { return err.response });
    }
}

export default Client;