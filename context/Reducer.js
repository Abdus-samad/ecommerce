import {SPAGE, SUPAGE} from './Types'


const reducer = (state, action) => {
  switch (action.type) {
    case SPAGE:
      return {
        ...state,
      }
      case SUPAGE:
      return {
        ...state,
      }
      default:
      return state;
  }
};

export default reducer;