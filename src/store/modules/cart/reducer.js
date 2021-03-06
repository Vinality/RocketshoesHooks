import produce from 'immer';

const INITIAL_STATE = []

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'cart/ADD_TO_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if(productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({  
            ...action.payload,
            amount: 1
          })
        }
      });

    case 'cart/REMOVE_FROM_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if(productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case 'cart/UPDATE_AMOUNT': {

      if(action.payload.amount <= 0) return state;

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if(productIndex >= 0) {
          draft[productIndex].amount = action.payload.amount;
        }
      })
    }
    default: 
      return state;
  }
}
