import React from 'react';
import { connect } from 'react-redux'
import { setNumber } from '../../redux/card/cardActions'

const CardNumber = ({cardNumber, setNumber}) => {
    console.log(cardNumber);
    return (
        <div clasName="card">
            <label>Card Number</label>
            <input type="tel" maxLength="4" onChange={(e) => { setNumber(e, cardNumber, 1, e.target.value) }} value={cardNumber.firstSection} />
            <input type="tel" maxLength="4" onChange={(e) => { setNumber(e, cardNumber, 2, e.target.value) }} value={cardNumber.secondSection} />
            <input type="tel" maxLength="4" onChange={(e) => { setNumber(e, cardNumber, 3, e.target.value) }} value={cardNumber.thirdSection} />
            <input type="tel" maxLength="4" onChange={(e) => { setNumber(e, cardNumber, 4, e.target.value) }} value={cardNumber.fourthSection} />
        </div>
    );
};

const MapStateToProps = state => (
    {
        cardNumber: state.card.cardNumber,
        cardNumberFirstSection: state.card.cardNumber.firstSection,
        cardNumberSecondSection: state.card.cardNumber.secondSection,
        cardNumberThirdSection: state.card.cardNumber.thirdSection,
        cardNumberFourthSection: state.card.cardNumber.fourthSection,
    }
)

const MapDispatchToProps = dispatch => (
    {
        setNumber: (e, cardNumber, section, value) => {
            let newCardNumber = cardNumber;
            switch(section) {
                case 1: 
                    newCardNumber.firstSection = value;
                    break;
                case 2: 
                    newCardNumber.secondSection = value;
                    break;
                case 3: 
                    newCardNumber.thirdSection = value;
                    break;
                case 4: 
                    newCardNumber.fourthSection = value;
                    break;
                default:
                    break;
            }
            console.log(newCardNumber);
            dispatch(setNumber(newCardNumber))
        }
    }
)

export default connect(MapStateToProps,MapDispatchToProps)(CardNumber);