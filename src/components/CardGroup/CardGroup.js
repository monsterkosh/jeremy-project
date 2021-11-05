import React from 'react'
import style from './CardGroup.module.css'
import Card from '../Cards/Card';
import PropTypes from 'prop-types';

const CardGroup = ({cards = [{title: "work", hours: "2hs", lasthours: "5hs"},{title: "play", hours: "2hs", lasthours: "5hs"},{title: "study", hours: "2hs", lasthours: "5hs"}]}) => {
    return(
        <div className={style.card_group__container}>
            {cards.map(item => (
                <Card title={item.title} hours={item.hours} lasthours={item.lasthours}/>
            ))}
        </div>
    )
}

CardGroup.propTypes = {
  cards: PropTypes.array,
};

export default CardGroup;
