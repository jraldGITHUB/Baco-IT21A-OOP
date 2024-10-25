class Student{
    #name;
    #allowance;
    
    setName(val){
    this.#name = val;
    }
    setAllowance(val){
    this.#allowance = val;
    }
    getName(){
    return this.#name;
    }
    
    getAllowance(){
    let bonus = 10;
    return this.#allowance + bonus;
    }
    }
    var student = new Student();
    student.setName("Baco the gwapo")
student.setAllowance(100);
console.log(student.getName());
console.log(student.getAllowance());