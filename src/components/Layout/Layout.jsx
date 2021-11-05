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

  let props = [];
  for (let item in user.schedule) {
    props.push({
      title: user.schedule[item].name,
      hours: user.schedule[item].period[vista].hours,
      lasthours: user.schedule[item].period[vista].lastPeriod,
    });
  }

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
