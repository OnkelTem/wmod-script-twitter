import { User } from '../models/users';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Fragment, h } from 'preact';
import './user-info.scss';

type UserInfoProps = {
  user: User;
  styles?: CSSStyleDeclaration;
  variant?: 'full' | 'short';
};

export function UserInfo(props: UserInfoProps) {
  const { user, styles, variant = 'full' } = props;
  return (
    <div
      class={`user-info ${user.followed_by && user.following ? 'friend' : ''}`}
      style={{
        color: styles?.color,
        fontFamily: styles?.fontFamily,
        lineHeight: styles?.lineHeight,
      }}
    >
      <span>·</span>
      <span class="followers" title={`${formatNumOfFollowers(user.followers_count, false)} Followers`}>
        {formatNumOfFollowers(user.followers_count)}
      </span>
      {variant === 'full' && (
        <Fragment>
          <span class={`${user.following ? '' : 'disabled'}`}>·</span>
          <span class={`chip chip1 ${user.following ? 'friend' : 'disabled'}`}>Following</span>
          <span class={`${user.followed_by ? '' : 'disabled'}`}>·</span>
          <span class={`chip chip2 ${user.followed_by ? 'friend' : 'disabled'}`}>Follows you</span>
        </Fragment>
      )}
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
