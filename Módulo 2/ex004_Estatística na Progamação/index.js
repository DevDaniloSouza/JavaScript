const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + (num * (weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }

    
}