import React from 'react';
import style from './layout.module.css';
import { user } from '../../data/data';

const Layout = () => {
  console.log(user);

  return (
    <div className={style.container}>
      <div>Layout Page</div>
      <p>Username: {user.name}</p>
      <div>
        Avatar: <img className={style.img_style} src={user.avatar} alt="" />
      </div>
      <h1>Schedule</h1>
      <ul>
        Title: {user.schedule.work.name}
        <ul>
          <li>Period: {user.schedule.work.period.daily.name}</li>
          <ol> Hours: {user.schedule.work.period.daily.hours}hrs</ol>
          <ol> Last Hours {user.schedule.work.period.daily.lastPeriod}hrs</ol>
        </ul>
      </ul>
    </div>
  );
};

export default Layout;
