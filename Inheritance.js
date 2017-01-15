"use strict"

//lets say i have an object called Person
function Person(name){
  this.name = name;
};

//Lets say i have another Object called Employee inherited from person
function Employee(employeeId, person){
  this.employeeId = employeeId;
  Person.call(this, person.name); // Calling super constructor altought
                                  // I did not established the inharitance yet
}; //Employee class id done.

// Now lets establish inharitance
Employee.prototype = Object.create(Person.prototype,{
  constructor:{
        configurable : true,
        writable: true,
        value : Employee,
        enumarable:true
  }
});

var p1 = new Person("Richard");
var employee1 = new Employee(111,p1);
console.log(employee1.name);
