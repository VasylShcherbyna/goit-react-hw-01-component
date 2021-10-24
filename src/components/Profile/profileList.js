import PropTypes from 'prop-types';
import Profile from './profile';

export default function ProfileList({ items }) {
  return (
    <ul>
      {items &&
        items.map(item => (
          <li key={item.id}>
            <Profile
              url={item.avatar}
              names={item.name}
              tags={item.tag}
              locations={item.location}
              followers={item.stats.followers}
              views={item.stats.views}
              likes={item.stats.likes}
            />
          </li>
        ))}
    </ul>
  );
}
ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
