import { GET_USERID } from "./action";

const initialState = {
  userID: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERID:
      console.log(type, payload);
      return {
        ...state,
        userID: payload,
      };

    default:
      return state;
  }
};

export default reducer;
