function solve(info){
    const people={};
for (const curr of info) {
    const[name,phoneNumber] = curr.split(' ');
    people[name] = phoneNumber;
}
for (const [name, number] of Object.entries(people)) {
    console.log(`${name} -> ${number}`);
}
}