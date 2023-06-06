import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './MailData.module.css';
import { replaceMail } from '../Store/mail-actions';
import { deleteMail } from '../Store/mail-actions';

const MailData = (props) => {
  const loggedUserEmail = JSON.parse(localStorage.getItem('idToken')).email;
  const emailUrl = loggedUserEmail.replace('@','').replace('.','');
  const [showBody, setShowBody] = useState(false);
  const dispatch = useDispatch();

  // checking if mail is read or not
  // const readMailHandler = async () => {
  //   setShowBody((preState) => !preState);
  //   if (!props.mail.read) {
  //     const email = props.mail.to.replace('@', '').replace('.', '');
  //     try {
  //       const response = await fetch(
  //         `https://react-api-2518b-default-rtdb.firebaseio.com/${email}/${props.mail.id}.json`,
  //         {
  //           method: 'PUT',
  //           body: JSON.stringify({ ...props.mail, read: true }),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       const data = await response.json();

  //       if (!response.ok) {
  //         throw data.error;
  //       } else {
  //         dispatch(replaceMail(emailUrl, loggedUserEmail));
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  // };

  // deleting mail
  // const removeMailHandler = () => {
  //   dispatch(deleteMail(props.mail));
  // }
  console.log(props.toOrFrom,props.mailId,props.mail.title,props.mail.text)
  return (
    <div className={classes.complete}>
      <div className={classes.main} >
        {/* <div onClick={readMailHandler} className={classes.mainheader}> */}
        <div className={classes.mainheader}>
          <div className={classes.head}>
            <span>{props.toOrFrom}</span>
            <div className={classes.mailId}>

              <div>{props.mailId}</div>
            </div>
          </div>
          <div className={classes.title}>{props.mail.title}</div>
        </div>
        <div className={showBody ? classes.body : classes.notBody}>
          <div>{props.mail.text}</div>
          <div className={classes.delbutton}>
          {/* <button onClick={removeMailHandler} >delete</button> */}
          <button  >delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailData;