const h1 = document.getElementById("head")

h1.style.color="red";
h1.style.border="solid 2px green";
h1.style.backgroundColor="teal";
// h1.style.padding="20px 40px";


const p = document.getElementsByTagName("p");
console.log(p);

for(let i of p){
    i.style.border="2px solid red";
}

const spcial = document.querySelectorAll(".spcial");
console.log(spcial);

for(let j of spcial){
    j.style.backgroundColor="blue";
    j.style.border="solid red 2px"
}