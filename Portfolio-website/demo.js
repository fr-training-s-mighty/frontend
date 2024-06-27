console.log("Hello from demo.js!");
let a = 5;
let b= 10;
let sum = a + b;
console.log(`${sum}`);

// logical operators

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse);

console.log(isTrue || isFalse);

function login(username,password){
    const actUsername = "admin";
    const actUpassword = "admin123";
    if (actUsername === username && actUpassword === password){
        // console.log("Login Success");
        return "logged in ";
    }
    else{
        return "Login Failed";
    }   

}

console.log(login("admin","admin123"));