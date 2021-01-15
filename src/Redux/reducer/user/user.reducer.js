const INITIAL_STATE = {
  user: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        user: state.user.filter(({ id }) => id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
