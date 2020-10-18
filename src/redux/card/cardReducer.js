import { SET_CARD_USER_NAME, SET_CARD_NUMBER, SET_CARD_EXPDATE, SET_CARD_WHOLE, CARD_RESET } from './cardTypes';

const initialState = {
    id: 0,
    userName: '',
    cardNumber: {
        firstSection: '',
        secondSection: '',
        thirdSection: '',
        fourthSection: ''
    },
    expDate: ''
}

const cardReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_CARD_USER_NAME:
            return {
                ...state,
                userName: action.payload
            }
        case SET_CARD_NUMBER: 
            return {
                ...state,
                cardNumber: action.payload
            }           
        case SET_CARD_EXPDATE: 
            return {
                ...state,
                expDate: action.payload
            }
        case SET_CARD_WHOLE:
            return action.payload;
        case CARD_RESET:
            return initialState;
        default: return state
    }
}

export default cardReducer