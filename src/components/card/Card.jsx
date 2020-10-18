import React from 'react';
import './card.styles.scss';

const Card = ({cardType, cardNumber, userName, expDate}) => {
    return (
        <div className="card">
            <div className="card__type">{cardType} </div>
            <div className="card__number">{cardNumber.firstSection} {cardNumber.secondSection} {cardNumber.thirdSection} {cardNumber.fourthSection} </div>
            <div className="card__bottom-row">
                <div clasName="card__bottom-row__username">{userName}</div>
                <div clasName="card__bottom-row__exp-date">{expDate}</div>
            </div>
        </div>
    );
};

export default Card;