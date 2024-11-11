let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolve data");
  }, 3000);
});

let b = (result) => {
  console.log(result);
  return 10;
};

// let a = async()=>{
//     try {
//         let b = await pr;
//         console.log(b);
//     } catch (error) {
//         console.log(error);
//     }
// }
// a()

// let a = pr
//   .then((data) => console.log(data))
//   .then((data) => b(data))
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(a);

const fun = (data) => {
  let pr = new Promise((res, rej) => {
    let z =0;
    setTimeout(() => {
      if (data) {
        res("radh radha ");
      } else {
        rej(" ghar ja");
      }
    },3000);
  });
  return pr;
};

fun("dsg").then((x)=>{
    console.log('adf');
    console.log(x);
    b(10);
}).then((data)=>{
    console.log(data);
}).
catch((err)=>{
    console.log(err);  
})
