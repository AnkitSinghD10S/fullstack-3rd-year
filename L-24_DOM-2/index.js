const para = document.querySelectorAll('p')[1];
para.setAttribute('class','spcial-para');

const para1 = document.getElementsByTagName('p')[3];
para1.setAttribute('id','abc');

console.log(
    para.getAttribute('class')
);

para.removeAttribute("spcial");

console.log(
    para.getAttribute('class')
);

// classList :- add - remove - toggle
// para.classList.add('spcial');

console.log(
    para.getAttribute('class')
);

const para2 = document.getElementsByTagName[2];
// para2.classList.add('spcial-para');

// para.classList.toggle('spcial-para');

const list = document.querySelectorAll('#abc');
console.log(list);

list.previousElementSibling.style.color='red';