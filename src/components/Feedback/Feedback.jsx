import clsx from 'clsx';
import css from './Feedback.module.css';

function Feedback({ feedback, total, positivePercentage }) {
  return (
    <ul className={clsx(css.feedback)}>
      <li>Good: <span>{feedback.good}</span></li>
      <li>Neutral: <span>{feedback.neutral}</span></li>
      <li>Bad: <span>{feedback.bad}</span></li>
      <li>Total: <span>{total}</span></li>
      <li>Positive: <span>{positivePercentage}</span>%</li>
    </ul>
  );
}

export default Feedback;
