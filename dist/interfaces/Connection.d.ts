declare type type = 'twitch' | 'youtube' | 'battle.net' | 'steam' | 'reddit' | 'facebook' | 'twitter' | 'spotify' | 'xbox' | 'github';
declare type visibility = 0 | 1;
export default interface Connection {
    id: string;
    name: string;
    type: type;
    revoked?: boolean;
    visibility: visibility;
    friend_sync: boolean;
    show_activity: boolean;
    verified: boolean;
}
export {};
