import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { apiEndpoints } from "../../constants";

const slice = createSlice({
  name: "suggestions",
  initialState: {
    list: {
        nodeLevel: [],
        deepLevel: [],
    },
    loading: false
  },
  reducers: {
    suggestionsRequested: (state) => {
        state.loading = true;
    },

    suggestionsReceived: (state, action) => {
        const { suggestions } = action.payload;
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
  suggestionsRequested,
  suggestionsReceived,
  suggestionsRequestFailed,
  suggestionsCleared,
} = slice.actions;

export default slice.reducer;

// Action Creators

export const getSuggestions = (data) => dispatch => {
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