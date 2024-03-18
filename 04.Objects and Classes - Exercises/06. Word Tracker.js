function solve(input) {
    let wordsCount = [];

    let wordsToFind = input[0].split(' ');

    for (let wordToFind of wordsToFind) {
        let count = 0;
        for (let i = 1; i < input.length; i++) {
            if (input[i] === wordToFind) {
                count++;
            }
        }
        wordsCount.push({ word: wordToFind, count: count });
    }

    wordsCount.sort((a, b) => b.count - a.count);

    for (const word of wordsCount) {
        console.log(`${word.word} - ${word.count}`);
    }
}
