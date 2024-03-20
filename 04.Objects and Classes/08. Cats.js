function solve(input){
class Cat{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    print(){
     console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
for (const curr of input) {
    const [name,age] = curr.split(' ');
    const cat = new Cat(name,age);
    cat.print();
}
}