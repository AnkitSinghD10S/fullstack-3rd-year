const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const input = document.querySelector(".input");
async function fun() {
    try {
        const data = await fetch("http://universities.hipolabs.com/search?");
        const l = await data.json();
        let input_name =input.value
        const div =document.createElement('div');
        const name = document.createElement('div');
        const state = document.createElement('div');
        const webpage = document.createElement('div');
        for (let i = 0; i < l.length; i++) {
            console.log(l[i]);
            if(l[i].country==(input_name)){
                const C_name = document.createElement("li");
                C_name.innerText = l[i].name;
                list.appendChild(li);
                const C_state= document.createElement("li");
                C_state.innerText = l[i].country;
                list.appendChild(li);
                const C_webpage= document.createElement("li");
                C_webpage.innerText = l[i]['web_pages'][0];
                name.appendChild(C_name);
                state.appendChild(C_state);
                webpage.appendChild(C_webpage);
            }
            div.style.display='flex';
            div.appendChild(name);
            div.appendChild(state);
            div.appendChild(webpage);
            list.appendChild(div)
        }
    } catch (error) {
        console.log(error, " error has occured ");
    }
}
