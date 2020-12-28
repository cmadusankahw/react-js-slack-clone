export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

// state : what's in Data Layer now
// action: which is performend on Data Layer (setting *user* payload)
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
