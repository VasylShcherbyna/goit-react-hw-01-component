import Statistics from './statistics';
export default function StatisticsList({  stats }) {
  return (
    <div>
      {stats &&
        stats.map(stat => (
          <ul key={stat.id}>
            <li>
              <Statistics label={stat.label} percentage={stat.percentage} />
            </li>
          </ul>
        ))}
    </div>
  );
}
