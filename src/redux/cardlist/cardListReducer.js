import { INSERT_CARD, SAVE_CARD } from './cardListTypes';

const initialState = {
    cardId : 1,
    cards : []
};

const cardListReducer = (state = initialState, action) => {
    console.log(state, action);
    switch(action.type) {
        case INSERT_CARD:   
            let newCard = action.payload;         
            newCard.id = state.cardId;
            let newState = {
                ...state,
                cardId: state.cardId + 1,
                cards: [...state.cards, newCard]
            };
            return newState;
        case SAVE_CARD:   
            let editCard = action.payload;    
            let editState = state;
            
            editState.cards.forEach((card, index) => {
                if(card.id === editCard.id) {
                    editState.cards[index] = editCard;
                }
            });            
            return editState;
        default: return state
    }
}

export default cardListReducer