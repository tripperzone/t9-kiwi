import letterToNumberMap from "../utils/letterToNumberMap";
import keyValueExists from "../utils/keyValueExists";
import binaryInsert from "../utils/binaryInsertion.js";

class DictionaryTrieNode {
  constructor() {
    this.emptyNode = () => {
      return { suggestions: { nodeLevel: [], deepLevel: [] } };
    };
    this.root = this.emptyNode();
  }

  insert(wordData) {
    const { word } = wordData;
    const comparator = (a, b) => b.frequency - a.frequency;

    if (word.length === 0) return;

    let currentNode = this.root;
    
    [...word].forEach((letter, index) => {
      const digit = letterToNumberMap[letter];
      if (!digit) return;

      let isLastNode = false;

      if (index === word.length - 1) {
        isLastNode = true;
      }

      if (!currentNode.children) {
        currentNode.children = {};
      }

      if (!currentNode.children[digit]) {
        currentNode.children[digit] = this.emptyNode();
      }

      currentNode = currentNode.children[digit];

      if (!isLastNode && !keyValueExists(currentNode.suggestions.deepLevel, 'word', word))
        binaryInsert(currentNode.suggestions.deepLevel, wordData, comparator);
      
    });

    if (!keyValueExists(currentNode.suggestions.nodeLevel, 'word', word)) 
      binaryInsert(currentNode.suggestions.nodeLevel, wordData, comparator);
    
  }

  getNodeSuggestions(numericString) {
    const emptySuggestions = this.emptyNode().suggestions;
    let currentNode = this.root;
    let suggestions;

    [...numericString].forEach((number) => {
      if (!currentNode.children || !currentNode.children[number]) {
        suggestions = emptySuggestions;
        return;
      }

      currentNode = currentNode.children[number];
      suggestions = currentNode.suggestions;
    });

    return suggestions;
  }
}

export default DictionaryTrieNode;