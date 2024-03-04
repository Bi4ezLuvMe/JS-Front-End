function solve(users){
let userName = users[0];
for(let i=1;i<users.length;i++){
    let currUsername = users[i].split('').reverse().join('');
    if(currUsername===userName){
        return console.log(`User ${userName} logged in.`)
    }
    if(i==4){
        return console.log(`User ${userName} blocked!`)
    }
    console.log('Incorrect password. Try again.');
}
}