import { findDeep, findNestedItemByPath, isObject } from './../utils';

export type User = {
  blocked_by: boolean;
  blocking: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  description: string;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  id?: number;
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
  verified: boolean;
  want_retweets: boolean;
};

export type GlobalObjectsWithUsers = {
  users: Record<number, User>;
};

export type Username = string;

export function isGlobalObjectsWithUsers(arg: unknown): arg is { globalObjects: GlobalObjectsWithUsers } {
  return isObject(arg) && isObject(arg['globalObjects']) && isObject(arg['globalObjects']['users']);
}

const TWEET_DETAIL_USER_PATH_PARTS = ['tweet_results', 'result', 'core', 'user_results', 'result', 'legacy'];
const TWEET_QUERY = { itemType: 'TimelineTweet' };

export function getUsersTweetDetail(data: unknown): User[] {
  const tweets = [...findDeep(data, TWEET_QUERY)];
  return tweets
    .map((tweet) => findNestedItemByPath<User>(tweet, TWEET_DETAIL_USER_PATH_PARTS))
    .filter((item): item is User => item != null);
}
