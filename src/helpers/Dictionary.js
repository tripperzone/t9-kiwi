import fs from "fs";
import winston from "winston";
import readline from 'readline';
import DictionaryTrieNode from "./DictionaryTrieNode";

export default class Dictionary {
  constructor(dictionaryPath) {
    this.trieNode = new DictionaryTrieNode();
    this.dictionaryPath = dictionaryPath;
  }

  async prepareTrieDictionary() {
    const lineReader = readline.createInterface({
      input: fs.createReadStream(this.dictionaryPath, {encoding: 'utf8'}),
      terminal: false
    });

    lineReader.on('line', (line) => {
      const tuple = line.split(/\t/);
      this.trieNode.insert(tuple);
    });

    lineReader.on('close', () => winston.info('Trie dictionary ready'));
  }

  getSuggestions(numericString) {
    if (!numericString) return { nodeLevel: [], deepLevel: [] };
    return this.trieNode.getNodeSuggestions(numericString);
  }
}