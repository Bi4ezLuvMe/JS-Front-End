function solve(info){
const meetings = {};
for (const curr of info) {
    const [day,name] = curr.split(' ');
     if(day in meetings){
        console.log(`Conflict on ${day}!`);
        continue;
     }
     meetings[day]=name;
     console.log(`Scheduled for ${day}`);
}
for (const meeting of Object.entries(meetings)) {
    console.log(`${meeting[0]} -> ${meeting[1]}`);
}
}