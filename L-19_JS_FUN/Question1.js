let a =30
let x=50
function funn(){
    let x=40
    function inner(){
        var a =30;
        console.log(a);
        x++;
        console.log(x);
    }
    return inner
}

let p=funn()
p()

p()

var z =funn()
z()