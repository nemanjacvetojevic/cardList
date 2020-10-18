import { combineReducers } from 'redux'
import cardReducer from './card/cardReducer'
import cardListReducer from './cardlist/cardListReducer'

const rootReducer = combineReducers({    
    cardList: cardListReducer,
    card: cardReducer
})

export default rootReducer