type feature = "BANNER" | "COMMUNITY" | "ANIMATED_ICON" | "INVITE_SPLASH" | "NEWS";

export default interface Guild {
    id:              string;
    name:            string;
    icon:            string;
    owner:           boolean;
    permissions:     number;
    features:        feature[];
    permissions_new: string;
}