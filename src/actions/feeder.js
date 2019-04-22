import Axios from "axios";
import Config from "react-native-config";

const feeder = {
  OPEN_FEEDER: "feeder/OPEN_FEEDER",
  CLOSE_FEEDER: "feeder/CLOSE_FEEDER",
  FAILED_TO_OPEN_FEEDER: "feeder/FAILED_TO_OPEN_FEEDER",
  FAILED_TO_CLOSE_FEEDER: "feeder/FAILED_TO_CLOSE_FEEDER",
  RESET_FEEDER: "feeder/RESET_FEEDER",
  FAILED_TO_RESET_FEEDERR: "feeder/FAILED_TO_RESET_FEEDER",
  GET_FEEDER_STATE: "feeder/GET_FEEDER_STATE",
  FAILED_TO_GET_FEEDER_STATE: "feeder/FAILED_TO_GET_FEEDER_STATE"
};

export default feeder;

export const getFeederState = () => dispatch => {
  url = `${Config.API_URL}`;

  Axios.get(url)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: feeder.GET_FEEDER_STATE,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: feeder.FAILED_TO_GET_FEEDER_STATE,
        error: error.message
      });
    });
};


export const openFeeder = () => dispatch => {
  url = `${Config.API_URL}` + "/on";

  Axios.post(url)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: feeder.OPEN_FEEDER,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: feeder.FAILED_TO_OPEN_FEEDER,
        error: error.message
      });
    });
};

export const closeFeeder = () => dispatch => {
  url = `${Config.API_URL}/off`;

  Axios.post(url)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: feeder.CLOSE_FEEDER,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: feeder.FAILED_TO_CLOSE_FEEDER,
        error: error.message
      });
    });
};

export const resetFeeder = () => dispatch => {
  url = `${Config.API_URL}/reset`;

  Axios.post(url)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: feeder.RESET_FEEDER,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: feeder.FAILED_TO_RESET_FEEDERR,
        error: error.message
      });
    });
};
