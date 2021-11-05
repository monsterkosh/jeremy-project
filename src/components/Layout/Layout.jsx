import React, { useState } from 'react';
import style from './layout.module.css';
import { user } from '../../data/data';
import CardGroup from '../CardGroup/CardGroup';
import UserController from '../UserController/UserController';

const Layout = () => {
  const [vista, setVista] = useState('daily');

  const handleVista = (props) => {
    setVista(props);
  };

  console.log(user);

  let props = [
    {
      title: user.schedule.exercise.name,
      hours: user.schedule.exercise.period[vista].hours,
      lasthours: user.schedule.exercise.period[vista].lastPeriod,
    },
    {
      title: user.schedule.work.name,
      hours: user.schedule.work.period[vista].hours,
      lasthours: user.schedule.work.period[vista].lastPeriod,
    },
    {
      title: user.schedule.play.name,
      hours: user.schedule.play.period[vista].hours,
      lasthours: user.schedule.play.period[vista].lastPeriod,
    },
    {
      title: user.schedule.selfCare.name,
      hours: user.schedule.selfCare.period[vista].hours,
      lasthours: user.schedule.selfCare.period[vista].lastPeriod,
    },
    {
      title: user.schedule.social.name,
      hours: user.schedule.social.period[vista].hours,
      lasthours: user.schedule.social.period[vista].lastPeriod,
    },
    {
      title: user.schedule.study.name,
      hours: user.schedule.study.period[vista].hours,
      lasthours: user.schedule.study.period[vista].lastPeriod,
    },
  ];

  return (
    <div className={style.container}>
      <UserController
        avatar={user.avatar}
        name={user.name}
        handler={handleVista}
      />
      <CardGroup cards={props} />
    </div>
  );
};

export default Layout;
