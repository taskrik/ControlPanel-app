import env from "../actions/changeEnv";

export default (state = {}, action) => {
  switch (action.type) {
    case env.CHANGE_ENV:
      return {
        ...state,
        env: action.payload
      };
    default:
      return state;
  }
};
