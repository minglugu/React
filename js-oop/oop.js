// oop: object oriented programming in JS

// Java, Python, JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
/* 3 principles of OOP:
    - encapsulation: 
        Binding the data with the code that manipulates it.
        It keeps the data and the code safe from external interference.
    - inheritance: 
        an object acquires the some/all properties of another object
        Class A inherits class B.  
    - polymorphism:    
        access objects of different types through the same interface

*/

/*
    class declaration (use class keyword)
    clas is a blueprint
    class is not hoisted: classes must be defined before they can be constructed
*/

// 封装
class FullStackClasses {
    // constructor
    constructor(classNo, students, teacher) {
        
        this.classNo = classNo;
        this.students = students;
        this.teacher = teacher;
    }

    // method
    calNo() {
        return this.students.length
    }
}

// object and instance of a class
let class_55 = new FullStackClasses(10, ['Tom', 'Jan', 'Sally'], 'Tom')
console.log(class_55.students, class_55.classNo, class_55.calNo());

let todayDateTime = new Date()

// 3-element array
let myArr = new Array(3)
console.log(myArr.length, myArr);

// subClass, child class (of the parent class)
class DAClasses extends FullStackClasses {
    constructor(type) {
        super(5, ['Tony', 'Jack', 'Jerry'], 'Codey')
        this.type = type
    }

    calTeacherToStuRatio() {
        return 1 / this.students.length
    }
}

let daClass5 = new DAClasses('part-time')
console.log(daClass5.students, daClass5.calTeacherToStuRatio())