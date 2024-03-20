function solve(input){
const songs = [];
class Song{
    constructor(type,name,length){
        this.type = type;
        this.name = name;
        this.length = length;
    }
}
let wantedType = input[input.length-1];
for(let i =1;i<input.length-1;i++){
const [type,name,length] = input[i].split('_');
const song = new Song(type,name,length);
songs.push(song);
}
for (const curr of songs) {
    if(wantedType==='all'){
        console.log(curr.name);
        continue;
    }
    if(curr.type===wantedType){
        console.log(curr.name);
    }
}
}