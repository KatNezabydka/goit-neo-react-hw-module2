import clsx from 'clsx';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={clsx(css.notification)}>{message}</p>;
};

export default Notification;
