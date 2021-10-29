import Profile from './components/Profile/profile';
import user from './components/user.json';

import StatisticalData from './components/statistical-data.json';
import StatisticsList from './components/Statistics/statisticsList';

import FriendList from './components/FriendList/friendList';
import Friends from './components/friends.json';

import TransactionHistory from './components/TransactionHistory/transactionHistory'
import Transactions from './components/transactions.json'

export default function App() {
    return (
      <div>
        <Profile
          name={user.name}
          tag={user.tag}
          Location={user.Location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <StatisticsList title="Upload stats" stats={StatisticalData} />
        <FriendList friends={Friends} />
        <TransactionHistory items={Transactions} />
      </div>
    );
}
