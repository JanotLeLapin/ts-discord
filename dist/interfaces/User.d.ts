export default interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    avatarURL?: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
}
