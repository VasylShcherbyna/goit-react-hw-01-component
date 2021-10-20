import Profile from './components/profile'
import user from './user.json';
export default function app() {
    return (
      <div>
        <Profile
          url={user.avatar}
          names={user.name}
          tags={user.tag}
          locations={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
    );
}