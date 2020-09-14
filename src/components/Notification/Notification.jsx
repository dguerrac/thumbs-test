import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import 'react-toastify/dist/ReactToastify.css';
import './Notification.scss';

const notifications = {
  error: {
    title: '¡Error!',
  },
  success: {
    title: 'Success!',
  },
};

const Notification = ({ type, message, closeToast }) => (
  <>
    <h1 className={'notification__title'}>{type && notifications[type].title}</h1>
    <p className='notification__description'>
      {message}
    </p>
    <button className={'notification__close-btn'} onClick={closeToast}>
      <RiCloseLine/>
    </button>
  </>
);

export default Notification;