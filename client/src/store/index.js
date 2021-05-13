import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

const store = () => {
    return configureStore({
      reducer,
      middleware: [
        ...getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: false
        }),
        api
      ]
    });
}

export default store;