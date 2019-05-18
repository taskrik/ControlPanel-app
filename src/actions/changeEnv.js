const env = {
  CHANGE_ENV: "env/CHANGE_ENV"
};

export default env;

export const changeEnv = environment => dispatch => {
  dispatch({
    type: env.CHANGE_ENV,
    payload: environment
  });
};
