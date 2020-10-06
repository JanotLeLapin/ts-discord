type feature = 
'INVITE_SPLASH'
| 'VIP_REGIONS'
| 'VANITY_URL'
| 'VERIFIED'
| 'PARTNERED'
| 'PUBLIC'
| 'COMMERCE'
| 'NEWS'
| 'DISCOVERABLE'
| 'FEATURABLE'
| 'ANIMATED_ICON'
| 'BANNER'
| 'PUBLIC_DISABLED'
| 'WELCOME_SCREEN_ENABLED';

export default interface Guild {
    id: string;
    name: string;
    icon: string;
    iconURL?: string;
    owner: boolean;
    permissions: number;
    features: feature[];
    permissions_new: string;
}