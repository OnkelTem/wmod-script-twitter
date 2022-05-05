import { isObject } from "./utils";

export type User = {
  blocked_by: boolean;
  blocking: boolean;
  business_profile_state: string;
  can_dm: boolean;
  can_media_tag: boolean;
  contributors_enabled: boolean;
  created_at: string;
  description: string;
  ext_has_nft_avatar: boolean;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  id: number;
  name: string;
  normal_followers_count: number;
  profile_background_image_url: string;
  profile_background_image_url_https: string;
  profile_background_tile: boolean;
  profile_image_url: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  utc_offset: null;
  verified: boolean;
  want_retweets: boolean;
};

export type GlobalObjectsWithUsers = {
  users: Record<number, User>;
};

export type Username = string;

export function isGlobalObjectsWithUsers(
  arg: unknown
): arg is { globalObjects: GlobalObjectsWithUsers } {
  return (
    isObject(arg) &&
    arg["globalObjects"] != null &&
    isObject(arg["globalObjects"]) &&
    arg["globalObjects"]["users"] != null &&
    isObject(arg["globalObjects"]["users"])
  );
}
