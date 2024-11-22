import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={clsx(css.option)}>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
