let arr =[
    {
        firstName:"Govind",lastName:"JHA",age:25
    },
    {
        firstName:"Donald",lastName:"Trump",age:76
    },
    {
        firstName:"Vimpol",lastName:"Xyz",age:20
    },
    {
        firstName:"Depika",lastName:"Padukone",age:25
    },
]

let op=arr.reduce((acc,item)=>{
    if(acc[item.age]){
        acc[item.key]+=1
    }
    else{
        acc[item.age]=1;
    }
    console.log(acc);
    
    return acc
    // acc[item.age]=(acc[item.age]|0)+1
    // return acc;
},{})
console.log(op);
