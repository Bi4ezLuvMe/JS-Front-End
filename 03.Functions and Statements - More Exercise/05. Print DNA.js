function solve(length){
    const sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let currentIndex = 0;

    for (let i = 0; i < length; i++) {
        let firstSymbol = sequence[currentIndex];
        let secondSymbol = sequence[currentIndex + 1];

        if (i % 4 === 0) {
            console.log(`**${firstSymbol}${secondSymbol}**`);
        } else if (i % 4 === 1 || i % 4 === 3) {
            console.log(`*${firstSymbol}--${secondSymbol}*`);
        } else {
            console.log(`${firstSymbol}----${secondSymbol}`);
        }

        currentIndex += 2;
        if (currentIndex >= sequence.length - 1) {
            currentIndex = 0;
        }
    }
}