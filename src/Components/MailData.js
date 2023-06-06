// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import classes from './MailData.module.css';
// import { replaceMail } from '../Store/mail-actions';
// import { deleteMail } from '../Store/mail-actions';

// const MailData = (props) => {
//   const loggedUserEmail = JSON.parse(localStorage.getItem('idToken')).email;
//   const emailUrl = loggedUserEmail.replace('@','').replace('.','');
//   const [showBody, setShowBody] = useState(false);
//   const dispatch = useDispatch();

  
// const readMailHandler = () => {
//   setShowBody((prevState) => !prevState);

// };

//   //deleting mail
//   const removeMailHandler = () => {
    
//   }
//   console.log(props.mail.text,'text')
//   return (
//     <div className={classes.complete}>
//       <div className={classes.main} >
//         <div onClick={readMailHandler} className={classes.mainheader}>
//         {/* <div className={classes.mainheader}> */}
//           <div className={classes.head}>
//             <span>{props.toOrFrom}</span>
//             <div className={classes.mailId}>

//               <div>{props.mailId}</div>
//             </div>
//           </div>
//           <div className={classes.title}>{props.mail.title}</div>
//         </div>
//         <div className={showBody ? classes.body : classes.notBody}>
//           <div>{props.mail.text}</div>
//           <div className={classes.delbutton}>
//           <button onClick={removeMailHandler} >delete</button>
//           {/* <button  >delete</button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MailData;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './MailData.module.css';
import { deleteMail } from '../Store/mail-actions';

const MailData = (props) => {
  const [showBody, setShowBody] = useState(false);
  const dispatch = useDispatch();

  const readMailHandler = () => {
    setShowBody((prevState) => !prevState);
  };

  const removeMailHandler = () => {
    // Dispatch the deleteMail action with the mail as the payload
    dispatch(deleteMail(props.mail));
  };

  return (
    <div className={classes.complete}>
      <div className={classes.main}>
        <div onClick={readMailHandler} className={classes.mainheader}>
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
            <button onClick={removeMailHandler}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailData;
