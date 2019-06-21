import { DISCOUNT_CODE } from '../actions/types';

const intialState = {
  open: false,
  discountCode: ''
};

export default (state=intialState, action) => {

    switch(action.type) {
        case DISCOUNT_CODE:
            return {
                ...state,
                discountCode: action.payload
            };
        default:
            return state;
    }
    
}