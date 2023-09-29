//Exercise TEST
console.log("Hello");

const sayHi = function Hello() {
    console.log("Hi");
}

sayHi();

let sayBye = ()=> {
    console.log("Bye");
}

sayBye();

//Exercise 2 (a)
let datQuer = () => {
    return console.log("Data Representation & Querying");
}

datQuer();

//Exercise 2 (b)
let argu = (var1) => {
    return console.log(var1);
}

argu("Bars");

//Exercise 2 (c) Adding
let arrowC = (var1,var2) => {
    let var3 = var1+var2;
    return console.log(var3);
}

arrowC(5,4);

//Exercise 2 (d)


const ages = [25, 31, 42, 77];

//Map fucntinon repeats all
const map1 = ages.map((x) => {
    if(x > 70) {
        return x;
    }else{
        return x * 2;
    }
    
});

console.log(map1);