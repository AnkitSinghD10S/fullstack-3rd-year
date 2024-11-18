const btn = document.querySelector('.btn')
const list = document.querySelector('.list');

async function fun() {
    try {
        const data =await fetch("https://jsonplacder.typicode.com/users")
        const l=await data.json();
        for(let i=0;i<l.length;i++){
            const li = document.createElement('li');
            li.innerText=l[i].name;
            list.appendChild(li) 
        }
    } catch (error) {
        console.log(error," error has occured ");
    }
}
