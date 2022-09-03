//Hold Person Details
class Person{
    constructor(name,age,gender,address,state,country){
         this.name=name;
         this.age=age;
         this.gender=gender;
         this.address=address;
         this.state=state;
         this.country=country;
    }

    getdetails()
    {
        return(`The Person details is: ${this.name},${this.age},${this.gender},${this.address},${this.state},${this.country}`);
    }
}

      let person1 = new Person('kovendhan',01,'male','erode','tamilnadu','india');
    
      let person2 = new Person('Andrew',07,'male','chennai','tamilnadu','india');
      let person3 = new Person('jenifer',05,'female','washinhton','newyork','America');
      
      console.log(person1.name);
      console.log(person2.age);
      console.log(person3.getdetails());



let allname=[];
allname.push(person1.name,person2.name,person3.name);
console.log (allname);



