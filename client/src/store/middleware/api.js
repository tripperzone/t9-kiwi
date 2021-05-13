import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, params, onStart, onSuccess, onError, custom } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      url,
      method,
      data,
      params
    });

    // General
    dispatch(actions.apiCallSuccess({result: response.data, custom }));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: {result: response.data, custom }});
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: {errMsg: error.message, custom }});
  }
};

export default api;