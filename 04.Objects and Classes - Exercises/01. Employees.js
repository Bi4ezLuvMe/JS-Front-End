function solve(names){
let employees = {};
for (const name of names) {
   employees[name] = name.length;
}
for (const employee in employees) {
console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
}
}