## Error Handling and Prototypes
1. Car description
```
class Car{
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

const myNewCar = new Car(2022, "Skoda", "Rapid")
console.log(myNewCar);
console.log(myNewCar.getDescription());
```

2. Employee salary
 ```
class Employee{
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        return  `The Employees salary is $${this.salary}`
    }
}

const Emp1 = new Employee("Ram", "Senior Manager", 5000)
console.log(Emp1);
console.log(Emp1.getSalary());
```

3. Person details
```
class Person{
    constructor(name = "Unknown", age = 0){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

const p1 = new Person("Prathica", 19);
const p2 = new Person();

console.log(p1.getDetails());
console.log(p2.getDetails());
```

4. Calculator class
```
class Calculator{
    static add(num1, num2){
        return num1+num2;
    }
}
const result3 = Calculator.add(2,7)
console.log(result3);
```

5. Password Manager
```
class PasswordManager{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    getPassword(){
        return this.password.replace(/./g,"*");
    }
    setPassword(newPassword){
        let containsNumber = false;
        let containsUpperCase = false;

        for(let i = 0; i < newPassword.length; i++){
            const char = newPassword.charAt(i);
            if(!isNaN(char)){
                containsNumber = true;
            }
            else if(char === char.toUpperCase()){
                containsUpperCase = true;
            }
        }
        if(newPassword.length >= 8 && containsNumber && containsUpperCase){
            this.password = newPassword;
        }
        else{
            console.log("Error : Password must be at least 8 characters long and contain at least one number and one uppercase letter");
        }
    }
}

const user1 = new PasswordManager("prathica","Prathica@1893")
user1.setPassword("ThisIsPassword")
user1.setPassword("setMyNewPassword2345")
console.log(user1.getPassword());
```

6. Student prototypes
```
function Student(name){
    this.name = name;
}
Student.prototype.printDetails = function(){
    console.log(`Hello, my name is ${this.name}`);
}
const student = new Student("Mithun")
student.printDetails();
```

7. Checking numbers
```
function numberChecker(numbers){
    return function(num){
        return numbers.includes(num)
    }
}

const arr = [1,2,3,4,5];
const checkNum = numberChecker(arr);

console.log(checkNum(2));
console.log(checkNum(8));
```

8. Filter products of an e-commerce cart by category
 ```
function filterByCategory(products){
    return function (category){
        return products.filter(function(product){
            return product.category === category;
        })
    }
}

var products =[
    {name: "Shirts", category: "Clothing"},
    {name: "Pants", category: "Clothing"},
    {name: "Sunglasses", category: "Accessories"},
    {name: "Hat", category: "Accessories"},
]

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts);
```
