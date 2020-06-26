// const person ={
//     name :'Amol',
//     age : 24
// }

// module.exports = person;
console.log(">>>>",__filename+">>>>"+ __dirname);
class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    greeting(){
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
}

module.exports = Person;