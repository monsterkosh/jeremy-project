import React from 'react';
import styles from './UserController.module.css';

function UserController({ avatar, name, handler }) {
  return (
    <div className={styles.UserController}>
      <div className={styles.Profile}>
        <img src={avatar} alt="profile pic" className={styles.ProfileAvatar} />
        <div className={styles.ProfileText}>
          <p>report for</p>
          <h2>{name}</h2>
        </div>
      </div>
      <div className={styles.Controller}>
        <button onClick={() => handler('daily')}>daily</button>
        <button onClick={() => handler('weekly')}>weekly</button>
        <button onClick={() => handler('monthly')}>monthly</button>
      </div>
    </div>
  );
}

export default UserController;
