function solve(commands){
    function wash(command){
        switch(command){
            case'soap':
            cleanedProcentage+=10;
            break;
            case'water':
            cleanedProcentage*=1.2;
            break;
            case'vacuum cleaner':
            cleanedProcentage*=1.25;
            break;
            case'mud':
            cleanedProcentage*=0.9;
            break;
        }
    }
let cleanedProcentage=0;
for(let i =0;i<commands.length;i++){
    wash(commands[i]);
}
console.log(`The car is ${cleanedProcentage.toFixed(2)}% clean.`);
}