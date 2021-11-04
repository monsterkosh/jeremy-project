import React from 'react';
import style from './layout.module.css';
import CardGroup from '../CardGroup/CardGroup.js';
import Card from '../Cards/Card';
import { user } from '../../data/data';
import avatar from '../../assets/images/image-jeremy.png';

const Layout = () => {
  // const [schedule, setSchedule] = useState();
  // let dailySchedule = {};
  // let weeklySchedule = {};
  // let monthlySchedule = {};

  console.log(user.avatar);

  let variable = user.avatar;

  return (
    <div className={style.container}>
      <div>layout</div>
      <img className={style.img_style} src={variable} alt="" />
      {/* <p>{data.user.name}</p> */}
      {/*       
      <CardGroup />
      <Card /> */}
    </div>
  );
};

export default Layout;
