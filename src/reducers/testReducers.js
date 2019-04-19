export default (state = {}, action) => {
  switch (action.type) {
    case "hello":
      return {
        ...state,
        gettingPopular: true
      };

    default:
      return state;
  }
};
