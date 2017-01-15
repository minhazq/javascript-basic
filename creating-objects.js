"use strict"
// Non litteral way
function Person(name){
    //All assignment should have = sign. NOT : sign
    this.name = name;
    this.sayHi= function(msgValue){
      console.log(this.name+ " saying "+ msgValue);
    }
};
var p1 = new Person("Richard");
p1.sayHi("Thanks");

//Litteral way
var car = {
  //All assignment should have : sign. NOT = sign
    carName: "Honda",
    sayHi: function(name){
      console.log(name+ " said hi to "+ this.carName); //Notice i had to say car.carName/this.carName
    } // Notice no comma or semicolon
};
car.sayHi("Richard");

//Using Object
var employee = Object.create(Object,{
  name:{ // decleared a property
    value:"Nixon",
    configurable:true,
    writable:true,
    enumerable:true
  },
  sayHi:{  // Decleared a method
    configurable:true,
    value: function(){
      console.log(this.name +"  "+"said hello");
    }
  }
});
employee.sayHi();
