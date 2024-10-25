class Person{
    constructor(name){
    this.name = name;
    }

Name(){ 
    console.log( this.name);
    }
}
    class Student extends Person{
    constructor(name, age){
    super(name);
    this.age = age;
    }
    
    Details(){
    console.log(`Name: ${this.name},
    age: ${this.age}`)

    }

    Name(){

    console.log(" Student");
    super.Name();

    }
    }
    let student = new Student("Baco", 19);
    student.Details();
    student.Name();