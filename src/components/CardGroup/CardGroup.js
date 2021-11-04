import React from 'react'
import './CardGroup.css'
import Card from '../Cards/Card';
import PropTypes from 'prop-types';

const CardGroup = ({cards = [2]}) => {
    return(
        <div className="card-group__container">
            {cards.map(item => (
                <Card title={item.title} hours={item.hours} lasthours={item.lasthours} />
            ))}
        </div>
    )
}

CardGroup.propTypes = {
    cards: PropTypes.array
}

export default CardGroup