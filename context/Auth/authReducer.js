import { SET_USER, USER_ERROR } from '../Types';

const reducer = (state, action) => {
	switch (action.type) {
        case SET_USER :
            return{
              ...state,
              user: action.payload
            }
            case USER_ERROR:
            return{
              ...state,
              user: null
            }
	}
};

export default reducer;
