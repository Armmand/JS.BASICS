let person = {
    name: 'John',
    lastName: 'Alston',
    age: 30
};
//Dot Nottaion
person.name = 'Armmand';
console.log(person.name);

//Bracket Notation.

//First Example.
person ['name'] = 'Mary';
console.log(person.name);

//Second Example.
let selection = 'name';
person [selection] = 'Tom';
console.log(person.name);
////////////////////////////////////////////////////////////
 //Comment This was a test javascript code!
 console.log("Hello World"); 

 alert('This is really working');

 //Variables 
 //Cannot be a reserved keyword. (Let and Var are Reserved).
 //Should be menaingful.
 //Cannot start with a number (1name).
 //Cannot contain a space it hypen (-).
 //Are case-sensitive.
 var name2 =('Alston');
 console.log(name2);

 var wing =('John Doe');
 console.log(wing);

 let name =('Armmand');
 console.log(name);
////////////////////////////////////////////////////////////
 //Constants.
 //Constants are like Var and Let. 
 //You only use constants when you dont want your varible to change.
 const interestRate = 0.3;
 interestRate = 1;
 console.log(interestRate);

 var interestRate = 0.3;
 interestRate = 1;
 console.log(interestRate);

 let interestRate =0.3;
 interestRate = 1;
 console.log(interestRate);