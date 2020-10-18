import React from 'react';
import { connect } from 'react-redux'
import Input from '../components/input/Input';
import { setCard } from '../redux/card/cardActions';

import useParams from 'react-router-dom';

export const CardEdit = ({match, location, cards, card, updateCard}) => {
    console.log(match, location);
    const cardId = Number(match.params.cardId);
    let editCard = card;    
    editCard = cards.reduce((prev, curr) => {        
        console.log(prev.id, curr.id, cardId);
        if(curr.id === cardId) {
            return curr;
        }
        return prev;
    });
    if(editCard.id && editCard.id !== card.id) {        
        updateCard(editCard);
    }

    return (
        <div>
            <h1>Card edit: {cardId}</h1>
            <div>
                <Input />
            </div>
        </div>
    );
}


const MapStateToProps = state => (
    {
        cards: state.cardList.cards,
        card: state.card
    }
);

const MapDispatchToProps = dispatch => (
    {
        updateCard: (newCard) => {
            dispatch(setCard(newCard));
        }
    }
);


export default connect(MapStateToProps,MapDispatchToProps)(CardEdit);