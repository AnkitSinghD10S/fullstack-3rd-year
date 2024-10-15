function outer() {
    function inner(){
        var a=10
        console.log(a);
        console.log(money);
    }
    return inner;
}
let money=50;

var x= outer()
x()