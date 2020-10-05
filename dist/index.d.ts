declare class Client {
    token: string;
    constructor(token: string);
    /**
     * @method: Get user from token
     */
    getUser(): void;
}
export default Client;
