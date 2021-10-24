import ProfileList from './components/Profile/profileList';
import Users from './user.json';
import StatisticalData from './components/Statistics/statistical-data.json';
import StatisticsList from './components/Statistics/statisticsList';

export default function App() {
    return (
      <div>
        <ProfileList items={Users} />
        <StatisticsList stats={StatisticalData}/>

      </div>
    );
}
