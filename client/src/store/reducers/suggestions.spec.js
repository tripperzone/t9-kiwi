import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { 
    getSuggestions, 
    addKeyToString,
    removeKeyFromString,
    clearSuggestions, 
    getSuggestionsList, 
    getCurrentKeyString, 
    getLoadingIndicator 
} from "./suggestions";
import configureStore from "../";

describe("suggestionsSlice", () => {
    let fakeAxios;
    let store;

    beforeEach(() => {
        fakeAxios = new MockAdapter(axios);
        store = configureStore();
    });

    const suggestionsSlice = () => store.getState().suggestions;

    const createState = () => ({
        suggestions: {
            numericString: '',
            list: {
                nodeLevel: [],
                deepLevel: [],
            },
        loading: false
        }
    });

    describe("numeric string top panel", () => {
        it("enters numeric string in the top panel screen", async () => {
            await store.dispatch(addKeyToString('2'));
            expect(suggestionsSlice().numericString).toEqual('2');
        });
    
        it("removes one number of the top panel screen", async () => {
            await store.dispatch(addKeyToString('2'));
            await store.dispatch(addKeyToString('4'));
            await store.dispatch(removeKeyFromString());
            expect(suggestionsSlice().numericString).toEqual('2');
        });

        it("clears the top panel from numbers", async () => {
            await store.dispatch(clearSuggestions());

            expect(suggestionsSlice().numericString).toEqual('');
        });

    });
    

    describe("getting suggestions", () => {
        it("fetches word suggestions from the server and puts then in the list of suggestions in the store", async () => {
            fakeAxios.onPost("/services/suggestions").reply(
                200, 
                {"suggestions":{"nodeLevel":[{"frequency":"811","word":"bail"}],"deepLevel":[{"frequency":"10468","word":"ability"}]}}
            );

            await store.dispatch(getSuggestions({ numericString: '2245' }));

            expect(suggestionsSlice().list.nodeLevel).toEqual([{"frequency":"811","word":"bail"}]);
            expect(suggestionsSlice().list.deepLevel).toEqual([{"frequency":"10468","word":"ability"}]);
        });
    });

    describe("loading indicator", () => {
        it("should be true while fetching the words", () => {
          fakeAxios.onPost("/services/suggestions").reply(() => {
            expect(suggestionsSlice().loading).toBe(true);
            return [
                200, 
                {"suggestions":{"nodeLevel":[{"frequency":"811","word":"bail"}],"deepLevel":[{"frequency":"10468","word":"ability"}]}}];
          });

          store.dispatch(getSuggestions({ numericString: '2245' }));
        });
        
        it("should be false after the bugs are fetched", async () => {
            fakeAxios.onPost("/services/suggestions").reply(
                200, 
                {"suggestions":{"nodeLevel":[{"frequency":"811","word":"bail"}],"deepLevel":[{"frequency":"10468","word":"ability"}]}}
            );

          await store.dispatch(getSuggestions({ numericString: '2245' }));

          expect(suggestionsSlice().loading).toBe(false);
        });
        
        it("should be false if the server returns an error", async () => {
          fakeAxios.onPost("/services/suggestions").reply(500);

          await store.dispatch(getSuggestions({ numericString: '2245' }));

          expect(suggestionsSlice().loading).toBe(false);
        });
        
    });

    describe("selectors", () => {
        it("getSuggestionsList", () => {
            const state = createState();
            state.suggestions.list = {
                nodeLevel: [{ frequency: "811", word: "bail" }],
                deepLevel: [{ frequency: "10468", word: "ability" }],
            };
        
            const result = getSuggestionsList(state);
        
            expect(result.nodeLevel).toHaveLength(1);
            expect(result.deepLevel).toHaveLength(1);
        });

        it ("getCurrentKeyString", () => {
            const state = createState();
            state.suggestions.numericString = '2';

            const result = getCurrentKeyString(state);

            expect(result).toBe('2');
        });

        it ("getLoadingIndicator", () => {
            const state = createState();
            state.suggestions.loading = true;

            const result = getLoadingIndicator(state);

            expect(result).toBe(true);
        });
    });

});
