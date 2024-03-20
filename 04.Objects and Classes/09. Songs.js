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
    if(curr.type===wantedType){
        console.log(curr.name);
    }
}
}
solve([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])