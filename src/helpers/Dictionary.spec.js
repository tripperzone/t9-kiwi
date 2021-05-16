import Dictionary from "./Dictionary";
import DictionaryTrieNode from "./DictionaryTrieNode";
import { dictionaryMocks } from './__mocks__/';

jest.mock("./DictionaryTrieNode");

beforeEach(() => {
  DictionaryTrieNode.mockClear();
});

describe('Dictionary Class', () => {
    describe('prepareTrieDictionary method', () => {
        it('has called insert method as many times as words in text file', (done) => {
            const dictionaryPath = './src/helpers/__mocks__/testDictionary.txt';
            const dictionaryInstance = new Dictionary(dictionaryPath);

            const mockDictionaryTrieNodeInstance = DictionaryTrieNode.mock.instances[0];
            const mockInsert = mockDictionaryTrieNodeInstance.insert;
    
            const lineReader = dictionaryInstance.prepareTrieDictionary();

            const wordsArray = dictionaryMocks.wordsArray;
            
            lineReader.on('close', () => {
                wordsArray.forEach((word) => {
                    expect(mockInsert).toHaveBeenCalledWith(word);
                });
                expect(mockInsert).toHaveBeenCalledTimes(wordsArray.length);
                done();
            });
        });
    });
    
    describe('getSuggestions method', () => {
        it('returns matching words from dictionary given a numeric string entry', () => {
            const dictionaryInstance = new Dictionary();
            const numericString = "224";
    
            const mockDictionaryTrieNodeInstance = DictionaryTrieNode.mock.instances[0];
            const mockGetSuggestions = mockDictionaryTrieNodeInstance.getNodeSuggestions;
    
            dictionaryInstance.getSuggestions(numericString);
    
            expect(mockGetSuggestions).toHaveBeenCalledWith("224");
            expect(mockGetSuggestions).toHaveBeenCalledTimes(1);
        });
    });
});