import { binaryInsert, keyValueExists } from './';
import { binaryInsertMocks } from './__mocks__';

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

});