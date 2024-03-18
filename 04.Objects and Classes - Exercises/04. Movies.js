function solve(input){
const movies = [];
class Movie{
constructor(name,director,date){
    this.name = name;
    this.director = director;
    this.date = date;
}
}
for (const curr of input) {
    let splitted = curr.split(' ');
    if(splitted.includes('addMovie')){
      let name = splitted.slice(1,splitted.length).join(' ');
       movies.push(new Movie(name,null,null));
    }else if(splitted.includes('directedBy')){
        let name = splitted.slice(0,splitted.indexOf('directedBy')).join(' ');
        let movie = movies.find(x=>x.name ===name);
        if(movie){
            movie.director = splitted.slice(splitted.indexOf('directedBy')+1,splitted.length).join(' ');
        }
        }else if(splitted.includes('onDate')){
            let name = splitted.slice(0,splitted.indexOf('onDate')).join(' ');
            let movie = movies.find(x=>x.name ===name);
            if(movie){
                movie.date = splitted.slice(splitted.indexOf('onDate')+1,splitted.length).join(' ');
            }
    }
}
movies.forEach(x=>x.name!=null&&x.date!=null&&x.director!=null?console.log(JSON.stringify(x)):null);
}