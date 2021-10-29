import PropTypes from 'prop-types';
import s from '../Profile/profile.module.css';
export default function Profile({ name, tag, Location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div class="description">
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{Location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  names: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
