import clsx from 'clsx';
import css from './Description.module.css';

function Description() {
  return (
    <div className={clsx(css.descr)}>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
    </div>
  );
}

export default Description;
