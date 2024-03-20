function solve(input){
    function getInfo(splitted){
        return splitted.slice(splitted.indexOf(':')+2,splitted.length)
    }
    function isPassed(grade){
        return grade>3;
    }
let studentGrades = [];
for (const curr of input) {
   let splitted = curr.split(',');
   let name = getInfo(splitted[0]);
   let grade = parseFloat(getInfo(splitted[1]));
   let avgScore = parseFloat(getInfo(splitted[2]));
   if(isPassed(avgScore)){
    let isThereGrade = studentGrades.find(x=>x.grade===grade);
    if(isThereGrade){
        isThereGrade.names.push(name);
        isThereGrade.avgScore+=avgScore;
    }else{
        studentGrades.push({grade,names:[name],avgScore});
    }
   }
}
studentGrades.sort((a,b)=>a.grade-b.grade);
for (const grade of studentGrades) {
    console.log(`${grade.grade+1} Grade`);
    console.log(`List of students: ${grade.names.join(', ')}`);
    console.log(`Average annual score from last year: ${(grade.avgScore/grade.names.length).toFixed(2)}`);
    console.log();
}
}