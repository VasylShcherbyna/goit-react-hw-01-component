import PropTypes from 'prop-types';
import s from './statistics.module.css';
import Statistics from './statistics';

export default function StatisticsList({ stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats &&
          stats.map(({ id, label, percentage }) => (
            <li key={id} className={s.item}>
              <Statistics label={label} percentage={percentage} />
            </li>
          ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
