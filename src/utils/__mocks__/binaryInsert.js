const binaryInsertMocks = {
    array: [
        { frequency: 40, word: 'thanks' },
        { frequency: 20, word: 'bye' },
        { frequency: 10, word: 'hello' },
    ],

    value: { frequency: 30, word: 'developer' },

    valueHighest: { frequency: 50, word: 'developer' },

    valueLowest: { frequency: 5, word: 'developer' },

    comparator: (a, b) => b.frequency - a.frequency,

    result: [
        { frequency: 40, word: 'thanks' },
        { frequency: 30, word: 'developer' },
        { frequency: 20, word: 'bye' },
        { frequency: 10, word: 'hello' },
    ],

    resultFirstInsert: [
        { frequency: 30, word: 'developer' },
    ],

    resultHighest: [
        { frequency: 50, word: 'developer' },
        { frequency: 40, word: 'thanks' },
        { frequency: 20, word: 'bye' },
        { frequency: 10, word: 'hello' },
    ],

    resultLowest: [
        { frequency: 40, word: 'thanks' },
        { frequency: 20, word: 'bye' },
        { frequency: 10, word: 'hello' },
        { frequency: 5, word: 'developer' },
    ],
}

export default binaryInsertMocks;