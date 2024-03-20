function solve(input){
let leaderArmies = [];
for (const cmd of input) {
    if(cmd.includes('arrives')){
      let leaderName = cmd.slice(0,cmd.indexOf('arrives')-1);
      leaderArmies.push({leaderName,armies:[]})
    }else if(cmd.includes(':')){
        let leaderName = cmd.slice(0,cmd.indexOf(':'))
     let leader = leaderArmies.find(x=>x.leaderName===leaderName);
     if(leader){
        let armyName = cmd.slice(cmd.indexOf(':')+2,cmd.indexOf(','));
        let armyCount = parseFloat(cmd.slice(cmd.indexOf(',')+1,cmd.length));
        leader.armies.push({armyName,armyCount});
     }
    }else if(cmd.includes('+')){
        let armyName = cmd.slice(0, cmd.indexOf('+') - 1);
            for (const leader of leaderArmies) {
                let army = leader.armies.find(x => x.armyName === armyName);
                if (army) {
                    let armyCount = parseFloat(cmd.slice(cmd.indexOf('+') + 1, cmd.length));
                    army.armyCount += armyCount;
                    break; // Exit loop after updating army count
                }
            }
    }else if(cmd.includes('defeated')){
      let leaderName = cmd.slice(0,cmd.indexOf('defeated')-1);
      let leader = leaderArmies.findIndex(x=>x.leaderName===leaderName);
      if(leader){
       leaderArmies.splice(leader,1);
      }
    }
}
leaderArmies.forEach(x=>x.armies.sort((a,b)=>b.armyCount-a.armyCount));
leaderArmies.sort((a, b) => {
    let totalArmyCountA = a.armies.reduce((acc, curr) => acc + curr.armyCount, 0);
    let totalArmyCountB = b.armies.reduce((acc, curr) => acc + curr.armyCount, 0);
    return totalArmyCountB - totalArmyCountA;
});
for (const leader of leaderArmies) {
    console.log(`${leader.leaderName}: ${leader.armies.reduce((acc, curr) => acc + curr.armyCount, 0)}`);
    for (const army of leader.armies) {
        console.log(`>>>${army.armyName} - ${army.armyCount}`);
    }
}
}
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500','Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);