import React, { Component } from 'react';
import Card from '../card/Card'
import AddCard from '../AddCard'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter  } from "react-router-dom";
import './cardlist.styles.scss'
import { cardReset } from '../../redux/cardlist/cardListActions';

const CardsList = ({history, cards, clearCard}) => {

    function newCard() {
        clearCard();
        history.push("/cards/add");
    }

    return (
        <div className="cardlist-container">
            <div className="cards">
                <button onClick={newCard}>Add card</button>
                {cards.map( (card, index) => <Link to={`/cards/${card.id}/edit`}><Card {...card} /></Link>)}                
            </div>
        </div>
    );
}

const mapStateToProps = state => (
    {
        cards: state.cardList.cards            
    }
)

const MapDispatchToProps = dispatch => (
    {
        clearCard: () => {
            dispatch(cardReset());
        }
    }
);

export default withRouter(connect(mapStateToProps, MapDispatchToProps)(CardsList));