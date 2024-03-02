function solve(startingYield){
    let yield = startingYield;
    let daysCount = 0;
    let totalSpice = 0;

    while (yield >= 100) {
        daysCount++;
        totalSpice += yield;

        if (totalSpice >= 26) {
            totalSpice -= 26;
        } else {
            totalSpice = 0;
        }

        yield -= 10;
    }

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(daysCount);
    console.log(totalSpice);
}