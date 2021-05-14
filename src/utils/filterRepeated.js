const filterRepeated = (array, key) => [...new Map(array.map(item => [item[key], item])).values()];

export default filterRepeated;