import { SET_CARD_USER_NAME } from './cardTypes'
import { SET_CARD_NUMBER } from './cardTypes'
import { SET_CARD_EXPDATE } from './cardTypes'
import { SET_CARD_WHOLE } from './cardTypes'


export const setName = name => (
    {
        type: SET_CARD_USER_NAME,
        payload: name
    }
)

export const setNumber = number => (
    {
        type: SET_CARD_NUMBER,
        payload: number
    }
)

export const setExpDate = expDate => (
    {
        type: SET_CARD_EXPDATE,
        payload: expDate
    }
)

export const setCard = card => (
    {
        type: SET_CARD_WHOLE,
        payload: card
    }
)