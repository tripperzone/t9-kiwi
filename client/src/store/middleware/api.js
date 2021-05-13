import axios from "axios";
import * as actions from "../api";

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, params, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  const baseURL = process.env.REACT_APP_API_BASE_URL;

  try {
    const response = await axios.request({
      url: baseURL + url,
      method,
      data,
      params
    });

    // General
    dispatch(actions.apiCallSuccess({ result: response.data }));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: { result: response.data }});
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: { errMsg: error.message }});
  }
};

export default api;