import fs from "fs";
import winston from "winston";
import readline from 'readline';
import DictionaryTrieNode from "./DictionaryTrieNode";

export default class Dictionary {
  constructor(dictionaryPath) {
    this.trieNode = new DictionaryTrieNode();
    this.dictionaryPath = dictionaryPath;
  }

  prepareTrieDictionary() {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.dictionaryPath, {encoding: 'utf8'}),
      terminal: false
    });

    lineReader.on('line', (line) => {
      const [frequency, word] = line.split(/\t/);
      this.trieNode.insert({ frequency, word});
    });

    lineReader.on('close', () => winston.info('Trie dictionary ready'));
    return lineReader;
  }

  getSuggestions(numericString) {
    if (!numericString) return { nodeLevel: [], deepLevel: [] };
    return this.trieNode.getNodeSuggestions(numericString);
  }
}