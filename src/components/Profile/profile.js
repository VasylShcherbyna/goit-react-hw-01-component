import PropTypes from 'prop-types';
import s from '../Profile/profile.module.css'
export default function Profile({
  url = 'http://risovach.ru/upload/2014/11/mem/gusi_65957495_orig_.jpg',
  names,
  tags,
  locations,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div class="description">
        <img src={url} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{names}</p>
        <p className={s.tag}>{tags}</p>
        <p className={s.location} >{locations}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  url: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
