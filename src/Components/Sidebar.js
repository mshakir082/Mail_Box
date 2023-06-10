import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Sidebar.module.css';
import { showActions } from '../Store/show-slice';

const Sidebar = ( ) => {
  const state = useSelector((state) => state.show);
  const unreadMessageCount = useSelector(state => state.mail.unreadMessageCount);
  const mails = useSelector((state) => state.mail?.mailData);
  console.log(mails.length)
  let bag=[];
  bag.push(unreadMessageCount)    ;
  const dispatch = useDispatch();

  const composeHandler = () => {
    dispatch(showActions.compose());
  };

  const sentHandler = () => {
    dispatch(showActions.sent());
  };

  const receivedHandler = () => {
    dispatch(showActions.received());
  };

  return (
    <div className={classes.sidebar}>
      <button className={classes.compose} onClick={composeHandler}>
        Compose
      </button>
      <li
        onClick={receivedHandler}
        className={state.received ? classes.received : ''}
      >
        <span>Inbox</span>
        <span>{(unreadMessageCount.length > 0) ?unreadMessageCount.length : ''}</span>
       
      </li>
      <li onClick={sentHandler} className={state.sent ? classes.sent : ''}>
        Sent
      </li>
    </div>
  );
};

export default Sidebar;