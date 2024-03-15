function solve(info){
    const peopleAddresses = {};
for (const curr of info) {
    const [name,address] = curr.split(':');
peopleAddresses[name] = address;
}
for (const curr of Object.entries(peopleAddresses).sort()) {
    console.log(`${curr[0]} -> ${curr[1]}`);
}
}