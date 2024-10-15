function fun(b) {
        var a =()=>{
            console.log("hello HOF");
            
        };
        return a();
}

let b=()=>{
    console.log("function b");
}
let a =fun(b())

console.log(typeof(a));

// console.log(y());
