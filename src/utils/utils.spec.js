import { binaryInsert, keyValueExists } from './';
import { binaryInsertMocks, keyValueExistsMocks } from './__mocks__';

describe('testing binaryInsert function', () => {
    let array;
    let insertValue;
    let comparator;
    
    const exec = () => binaryInsert([...array], insertValue, comparator);
    
    beforeEach(() => {
        array = binaryInsertMocks.array;
        insertValue = binaryInsertMocks.value;
        comparator = binaryInsertMocks.comparator;
    });

    it('inserts given object into correct position in array according to frequency value', () => {
        const result = exec();
        expect(result).toEqual(binaryInsertMocks.result);
    });

    it('inserts given object into array given an empty array', () => {
        array = [];
        const result = exec();
        expect(result).toEqual(binaryInsertMocks.resultFirstInsert);
    });

    it('inserts given object into first position if frequency is highest', () => {
        insertValue = binaryInsertMocks.valueHighest;
        const result = exec();
        expect(result).toEqual(binaryInsertMocks.resultHighest);
    });

    it('inserts given object into last position if frequency is lowest', () => {
        insertValue = binaryInsertMocks.valueLowest;
        const result = exec();
        expect(result).toEqual(binaryInsertMocks.resultLowest);
    });
});

describe('testing keyValueExists function', () => {
    let array;
    let key;
    let value;

    beforeEach(() => {
        array = keyValueExistsMocks.arrayWithoutWord;
        key = 'word';
        value = 'developer';
    });

    const exec = () => keyValueExists(array, key, value);

    it('returns false when key "word" is not found with value "developer" in current array', () => {
        const result = exec();
        expect(result).toBe(false);
    });

    it('returns false when key "word" is found with value "developer" in current array', () => {
        array = keyValueExistsMocks.arrayWithWord;
        const result = exec();
        expect(result).toBe(true);
    });

    it('returns false when sent key does not exists in target array', () => {
        key = 'code';
        const result = exec();
        expect(result).toBe(false);
    });

    it('returns false if an empty array is sent', () => {
        array = [];
        const result = exec();
        expect(result).toBe(false);
    });

    it('returns false when no value is sent', () => {
        value = undefined;
        const result = exec();
        expect(result).toBe(false);
    });
});