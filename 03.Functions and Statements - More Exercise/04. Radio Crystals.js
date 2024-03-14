function solve(input){
    function operation(startingThickness,disaredThickness,operations){
        if(startingThickness/4>=disaredThickness){
            startingThickness/=4;
            operations.push('Cut');
        }else if(startingThickness*0.8>=disaredThickness){
            startingThickness*=0.8;
            operations.push('Lap');
        }else if(startingThickness-20>=disaredThickness){
            startingThickness-=20;
            operations.push('Grind');
        }else if(startingThickness-2>=disaredThickness){
            startingThickness-=2;
            operations.push('Etch');
        }else{
            startingThickness++;
            operations.push('X-ray');
        }
        startingThickness = Math.floor(startingThickness);
    }
    function print(){
        if(operations.includes('Cut')){
            let count1= operations.reduce((count,curr)=>{return curr ==='Cut'?count+1:count},0)
            console.log(`Cut x${count1}`);
            console.log('Transporting and washing');
           }
           if(operations.includes('Lap')){
               let count1= operations.reduce((count,curr)=>{return curr ==='Lap'?count+1:count},0)
               console.log(`Lap x${count1}`);
               console.log('Transporting and washing');
           }
           if(operations.includes('Grind')){
               let count1= operations.reduce((count,curr)=>{return curr ==='Grind'?count+1:count},0)
               console.log(`Grind x${count1}`);
               console.log('Transporting and washing');
           }
           if(operations.includes('Etch')){
               let count1= operations.reduce((count,curr)=>{return curr ==='Etch'?count+1:count},0)
               console.log(`Etch x${count1}`);
               console.log('Transporting and washing');
           }
           if(operations.includes('X-ray')){
               let count1= operations.reduce((count,curr)=>{return curr ==='X-ray'?count+1:count},0)
               console.log(`X-ray x${count1}`);
           }
           console.log(`Finished crystal ${disaredThickness} microns`);
    }
    let disaredThickness = input[0];
for(let i=1;i<input.length;i++){
    let operations=[];
    let startingThickness = input[i];
    console.log(`Processing chunk ${startingThickness} microns`);
    while(startingThickness!=disaredThickness){
       operation(startingThickness,disaredThickness,operations);
    } 
        print();
    }
}
solve([1000, 4000, 8100]);