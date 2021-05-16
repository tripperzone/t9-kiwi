import DictionaryTrieNode from "./DictionaryTrieNode";

describe("DictionaryTrieNode class", () => {
  describe("insert method", () => {
    describe("error handling", () => {
      it("throws error when given empty string", () => {
        const trieInstance = new DictionaryTrieNode();
        const input = "";

        const assert = () => {
          trieInstance.insert(input);
        };

        expect(() => {
          assert();
        }).toThrow();
      });

      it("throws error when given value which is not a lowercase letter", () => {
        const trieInstance = new DictionaryTrieNode();
        const input = "R";

        const assert = () => {
          trieInstance.insert(input);
        };

        expect(() => {
          assert();
        }).toThrow();
      });
    });

    describe("Suggestions at node level", () => {
      it("generates a Trie node to dictionary where the current word is stored as nodeLevel suggestions", () => {
        const trieInstance = new DictionaryTrieNode();
        const input = { frequency: 10, word: "a" };

        trieInstance.insert(input);
        const assertion = trieInstance.root.children[2].suggestions.nodeLevel;
        const expectedResult = [{ frequency: 10, word: "a" }];
        expect(assertion).toEqual(expectedResult);
      });

      it("generates multiples trie nodes and stores the given word at the correct nodeLevel suggestions Trie node", () => {
        const trieInstance = new DictionaryTrieNode();
        const input = { frequency: 30, word: "developer" };

        trieInstance.insert(input);
        const array =
          trieInstance.root.children[3].children[3].children[8].children[3].children[5]
          .children[6].children[7].children[3].children[7].suggestions.nodeLevel;

        const expectedArray = [{ frequency: 30, word: "developer" }];
        expect(array).toEqual(expectedArray);
      });

      it("stores second word in same trie node in descending frequency if the numeric strings to generate them are the same", () => {
        const trieInstance = new DictionaryTrieNode();
        const firstInput = { frequency: 20, word: "herd" };
        const secondInput = { frequency: 50, word: "here" };
        
        trieInstance.insert(firstInput);
        trieInstance.insert(secondInput);

        const array =
          trieInstance.root.children[4].children[3].children[7].children[3].suggestions.nodeLevel;

        const expectedArray = [{ frequency: 50, word: "here" }, { frequency: 20, word: "herd" }];

        expect(array).toEqual(expectedArray);
      });
    });

    describe("Suggestions at deep level", () => {
      it('stores the word "eat" in the deep predictions array at 2 nodes', () => {
        const trieInstance = new DictionaryTrieNode();
        const input = { frequency: 50, word: "dev" };

        trieInstance.insert(input);

        const firstNode = trieInstance.root.children[3].suggestions.deepLevel;
        const secondNode = trieInstance.root.children[3].children[3].suggestions.deepLevel;

        const expectedResult = [{ frequency: 50, word: "dev" }];

        expect(firstNode).toEqual(expectedResult);
        expect(secondNode).toEqual(expectedResult);
      });
    });
  });

  describe("getNodeSuggestions method", () => {
    it("returns correct suggestions ordered by descending frequency at nodeLevel and deepLevel given numeric string input", () => {
      const trieInstance = new DictionaryTrieNode();
      const numericString = "338";

      const firstInput = { frequency: 30, word: "dev" };
      const secondInput = { frequency: 40, word: "devops" };
      const thirdInput = { frequency: 50, word: "developer" };

      trieInstance.insert(firstInput);
      trieInstance.insert(secondInput);
      trieInstance.insert(thirdInput);

      const suggestions = trieInstance.getNodeSuggestions(numericString);

      const { nodeLevel, deepLevel } = suggestions;

      const expectedNodeLevelSuggestions = [{ frequency: 30, word: "dev" }];
      const expectedDeepLevelSuggestions = [{ frequency: 50, word: "developer" }, { frequency: 40, word: "devops" }];

      expect(nodeLevel).toEqual(expectedNodeLevelSuggestions);
      expect(deepLevel).toEqual(expectedDeepLevelSuggestions);
    });

    it("returns empty arrays of suggestions if trie node has not been created", () => {
      const trieInstance = new DictionaryTrieNode();
      const numericString = "4386";

      const input = { frequency: 50, word: "developer" };;

      trieInstance.insert(input);

      const suggestions = trieInstance.getNodeSuggestions(numericString);
      const expectedResult = { nodeLevel: [], deepLevel: [] };

      expect(suggestions).toEqual(expectedResult);
    });
  });
});