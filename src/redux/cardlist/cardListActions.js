import { INSERT_CARD, SAVE_CARD } from './cardListTypes';
import { CARD_RESET } from '../card/cardTypes';

export const addCard = card => (
    {
        type: INSERT_CARD,
        payload: card
    }
)

export const saveCard = card => (
    {
        type: SAVE_CARD,
        payload: card
    }
)

export const cardReset = card => (
    {
        type: CARD_RESET,
        payload: {}
    }
)

