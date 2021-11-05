import React from 'react';
import style from './cardGroup.module.css';
import Card from '../Cards/Card';
import PropTypes from 'prop-types';

const CardGroup = ({ cards }) => {
  return (
    <div className={style.card_group__container}>
      {cards.map((item) => (
        <Card
          title={item.title}
          hours={item.hours}
          lasthours={item.lasthours}
        />
      ))}
    </div>
  );
};

CardGroup.propTypes = {
  cards: PropTypes.array,
};

export default CardGroup;
