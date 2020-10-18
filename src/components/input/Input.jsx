import React from 'react';
import CardNumber from './CardNumber';
import ExpDate from './ExpDate';
import Card from '../card/Card';
import UserName from './UserName';
import { connect } from 'react-redux';
import{ addCard, saveCard, cardReset } from '../../redux/cardlist/cardListActions.js';
import './input.scss'

const Input = ({addCard, card, userName, cardNumber, expDate, cardId}) => {   
    return (
        <div>
            Card id: {cardId}
            <Card userName={userName} cardNumber={cardNumber} expDate={expDate} />
            <form>
                <UserName />
                <CardNumber />
                <ExpDate />
                <button onClick={(e) => { addCard(e, card, cardId) }}>Save</button>
            </form>
        </div>
    )
}
 
const mapStateToProps = state => (
    {    
        card: state.card,
        userName: state.card.userName,
        cardNumber: state.card.cardNumber,
        expDate: state.card.expDate,        
        cardId: state.card.id
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        addCard: (event, card, cardId) => {
            event.preventDefault();
            if(cardId) {
                dispatch(saveCard(card));
                alert("Updated card");
            } else {
                dispatch(addCard(card));
                alert("Added card");
            }
            dispatch(cardReset());
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Input);