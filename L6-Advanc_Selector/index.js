const color = () => {
  let c = "#";
  for (let i = 0; i < 6; i++) {
    c += Math.floor(Math.random() * 10);
  }
  console.log(c);
  return c;
};

const n=()=> {
    console.log("working");
    let t= color()
    const p = document.querySelector('.time')
    console.log(p);  
    p.style.color=t;
    document.body.style.backgroundColor = t;
}
setInterval(n,1000)
