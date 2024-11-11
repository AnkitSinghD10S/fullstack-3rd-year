async function fun() {
    try {
        let l = await fetch("https://jsonplacehlder.typicode.com/users")
        console.log(l);
        console.log(l.date);
        
        console.log("hi");
    } catch (error) {
        console.log(error);
    }
}
// fun()
// let x=new Date().getTime();
// while(new Date().getTime()<x+1000){
//     console.log("hello");

// }

let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("radha radha");
        res("dsgsd")
    },3000)
})

let b= async ()=>{
    let x= await pr
    console.log(x);
    return 10
}

b().then((x)=>{
    console.log(x);
}).catch((error)=>{
    console.log(error);
    
})
    