const container = document.querySelector('.container')

fetch("http://localhost:3000").then(
    (res)=>{
        return res.json();
    }).then((datas) => {
        datas.forEach(element => {
            console.log(element);
            const p =document.createElement('p');
            p.innerHTML=`<h1> ${element}</h1>`;
            container.appendChild(p);
        });
    })

    const getData = async()=>{
        const res = await axios.get("http://localhost:3000")
        console.log(res.data);
    }
    getData()