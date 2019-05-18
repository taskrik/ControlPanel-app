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
  FAILED_TO_GET_FEEDER_STATE: "feeder/FAILED_TO_GET_FEEDER_STATE",
  GET_STREAM: "feeder/GET_STREAM",
  FAILED_TO_GET_STREAM: "feeder/FAILED_TO_GET_STREAM"
};

export default feeder;

export const getFeederState = env => dispatch => {
  env === "HOME"
    ? (url = `${Config.API_URL_HOME}`)
    : (url = `${Config.API_URL_OUT}`);

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

export const getLiveStream = env => dispatch => {
  env === "HOME"
    ? (url = `${Config.API_URL_HOME}/cctv/on`)
    : (url = `${Config.API_URL_OUT}/cctv/on`);

  Axios.get(url)
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: feeder.GET_STREAM,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: feeder.FAILED_TO_GET_STREAM,
        payload: error.message
      });
    });
};

export const openFeeder = env => dispatch => {
  env === "HOME"
    ? (url = `${Config.API_URL_HOME}/on`)
    : (url = `${Config.API_URL_OUT}/on`);

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
        payload: error.message
      });
    });
};

export const closeFeeder = env => dispatch => {
  env === "HOME"
    ? (url = `${Config.API_URL_HOME}/off`)
    : (url = `${Config.API_URL_OUT}/off`);

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
        payload: error.message
      });
    });
};

export const resetFeeder = env => dispatch => {
  env === "HOME"
    ? (url = `${Config.API_URL_HOME}/reset`)
    : (url = `${Config.API_URL_OUT}/reset`);

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
        payload: error.message
      });
    });
};
