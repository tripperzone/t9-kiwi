import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { apiEndpoints } from "../../constants";

const slice = createSlice({
  name: "suggestions",
  initialState: {
    numericString: '',
    list: {
        nodeLevel: [],
        deepLevel: [],
    },
    loading: false
  },
  reducers: {
    keyAdded: (state, action) => {
      const { key } = action.payload;
      state.numericString += key;
    },

    keyRemoved: (state) => {
      state.numericString.slice(0, -1);
    },

    suggestionsRequested: (state) => {
      state.loading = true;
    },

    suggestionsReceived: (state, action) => {
      const { result: { suggestions } } = action.payload;
      state.list = suggestions;
      state.loading = false;
    },

    suggestionsRequestFailed: (state) => {
      state.loading = false;
    },
 
    suggestionsCleared: (state) => {
      state.list.nodeLevel = [];
      state.list.deepLevel = [];
    },
  }
});

const {
  keyAdded,
  keyRemoved,
  suggestionsRequested,
  suggestionsReceived,
  suggestionsRequestFailed,
  suggestionsCleared,
} = slice.actions;

export default slice.reducer;

// Action Creators

export const addKeyToString = key => dispatch => {
  return dispatch(
    { type: keyAdded.type, payload: { key } }
  )
}

export const removeKeyFromString = () => dispatch => {
  return dispatch(
    { type: keyRemoved.type }
  )
}

export const getSuggestions = data => dispatch => {
  return dispatch(
    apiCallBegan({
      url: apiEndpoints.SUGGESTIONS_API_ENDPOINT,
      method: 'post',
      data,
      onStart: suggestionsRequested.type,
      onSuccess: suggestionsReceived.type,
      onError: suggestionsRequestFailed.type,
    })
  );
};

export const clearSuggestions = () => dispatch => {
  return dispatch(
    { type: suggestionsCleared.type }
  )
};

// Selectors
export const getSuggestionsList = createSelector(
    state => state.suggestions,
    suggestions => suggestions.list
);

export const getCurrentKeyString = createSelector(
  state => state.suggestions,
  suggestions => suggestions.numericString
);