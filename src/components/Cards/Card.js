import React from 'react';
import image from '../../assets/cards/icon-ellipsis.svg';
import PropTypes from 'prop-types';
import style from './card.module.css';

const Card = ({ title, hours, lasthours }) => {
  let newTitle = title.replace(' ', '');

  return (
    <div className={`${style.card} ${style.card_container} ${style[newTitle]}`}>
      <div className={style.card_small}>
        <div className={style.card_main}>
          <h3 className={style.card_title}>{title}</h3>
          <img src={image} alt="ellipsis" className={style.card_image} />
        </div>
        <div className={style.card_details}>
          <p className={style.card_currentTime}>{hours}</p>
          <p className={style.card_previousTime}>{lasthours}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  hours: PropTypes.string,
  lasthours: PropTypes.string,
};

export default Card;
