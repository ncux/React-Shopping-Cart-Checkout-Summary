import { DISCOUNT_CODE } from './types';

export const handleChange = e => dispatch => {
  dispatch({ type: DISCOUNT_CODE, payload: e.target.value })
};