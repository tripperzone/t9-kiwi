const colorRanges = [
    { minRange: 0, maxRange: 10000, colorCode: '#2F4F4F' },
    { minRange: 10001, maxRange: 100000, colorCode: '#006400' },
    { minRange: 100001, maxRange: 500000, colorCode: '#228B22' },
    { minRange: 500001, maxRange: 10000000, colorCode: '#32CD32' },
]

const colorInRange = (frequency, range) =>
    frequency >= range.minRange && frequency <= range.maxRange;


const frequencyToColorMap = (frequency) =>
    colorRanges.filter(range =>
        colorInRange(frequency, range)
    )[0].colorCode;

export default frequencyToColorMap;