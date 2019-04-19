import feeder from "../actions/feeder";

export default (state = {}, action) => {
  switch (action.type) {
    case feeder.OPEN_FEEDER:
      return {
        ...state,
        isFeederOpen: true,
        serverMessage: action.payload
      };
    case feeder.CLOSE_FEEDER:
      return {
        ...state,
        isFeederOpen: false,
        serverMessage: action.payload
      };
    case feeder.FAILED_TO_OPEN_FEEDER:
      return {
        ...state,
        error: action.payload
      };
    case feeder.FAILED_TO_CLOSE_FEEDER:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
