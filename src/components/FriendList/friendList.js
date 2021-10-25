import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function Friendlist({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <span className={friend.isOnline ? s.statusOnline : s.statusOffline}>
            {friend.isOnline}
          </span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};