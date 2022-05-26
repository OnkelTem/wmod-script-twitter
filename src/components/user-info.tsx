import { User } from '../models/users';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { h } from 'preact';
import './user-info.scss';

type UserInfoProps = {
  user: User;
  styles?: CSSStyleDeclaration;
};

export function UserInfo({ user, styles }: UserInfoProps) {
  return (
    <div
      class="user-info"
      style={{
        color: styles?.color,
        fontFamily: styles?.fontFamily,
        lineHeight: styles?.lineHeight,
      }}
    >
      <span>·</span>
      <span class="value" title={formatNumOfFollowers(user.followers_count, false)}>
        {formatNumOfFollowers(user.followers_count)}
      </span>
      <span class="label">Followers</span>
      <span class={`${user.following ? '' : 'disabled'}`}>·</span>
      <span class={`chip chip1 ${user.following ? '' : 'disabled'}`}>Following</span>
      <span class={`${user.followed_by ? '' : 'disabled'}`}>·</span>
      <span class={`chip chip2 ${user.followed_by ? '' : 'disabled'}`}>Follows you</span>
    </div>
  );
}

function formatNumOfFollowers(n: number, smartRound = true) {
  if (smartRound) {
    if (n < 10000) {
      return new Intl.NumberFormat('en-US').format(n);
    } else if (n < 1000000) {
      return (n / 1000).toFixed(1) + 'K';
    } else {
      return (n / 1000000).toFixed(1) + 'M';
    }
  } else {
    return new Intl.NumberFormat('en-US').format(n);
  }
}
