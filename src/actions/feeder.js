import Axios from "axios";
import Config from "react-native-config";

const feeder = {
  OPEN_FEEDER: "feeder/OPEN_FEEDER",
  CLOSE_FEEDER: "feeder/CLOSE_FEEDER",
  FAILED_TO_OPEN_FEEDER: "feeder/FAILED_TO_OPEN_FEEDER",
  FAILED_TO_CLOSE_FEEDER: "feeder/FAILED_TO_CLOSE_FEEDER"
};

export default feeder;

export const openFeeder = () => dispatch => {
  url = `${Config.API_URL}` + "/on";
  console.log("url:", url);

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
  console.log("url: ", url);

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
