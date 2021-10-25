import ProfileList from './components/Profile/profileList';
import Users from './user.json';

import StatisticalData from './components/Statistics/statistical-data.json';
import StatisticsList from './components/Statistics/statisticsList';

import FriendList from './components/FriendList/friendList';
import Friends from './components/FriendList/friends.json';

export default function App() {
    return (
      <div>
        <ProfileList items={Users} />
        <StatisticsList title="Upload stats" stats={StatisticalData} />
        <FriendList friends={Friends }/>
      </div>
    );
}
