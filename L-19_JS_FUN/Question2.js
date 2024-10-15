function funn(){
    let x=150
    function inner(){
        x++;
        var a =10;
        function innermost() {
            x++;
            a++
            console.log(x,"a",a);
            
        }
        return innermost;
    }
    return inner
}
let fun =funn()
let fun1 = fun()
let fun2 = fun()
fun1()
fun1()
fun2()
fun2()
fun2()
fun1()