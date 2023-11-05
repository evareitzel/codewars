// Training JS #5: Basic data types--Object

// Description: 
// In javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}

// You can define the object attributes during initialization, like this:

// var animal={name:"dog"}
// you can also set/get some properties after the object definition, like this:

// var animal={}
// animal.name="dog"  (or animal["name"]="dog")
// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."


// My Solution:
function animal(obj){  
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


// Best Practice Solutions: 

// 1
// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }

// 2
// function animal({name, legs, color}) {
//   return `This ${color} ${name} has ${legs} legs.`;
// }

// 3
// const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

// 4
// function animal(obj){
//   let {color,name,legs} = obj;
//   return `This ${color} ${name} has ${legs} legs.`
// }