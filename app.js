const saygac = document.getElementById('counter-el');
const plus = document.getElementById('increment-btn');
const entries = document.querySelector('.entries');
const saveEl = document.getElementById('saveEl');


let count = 0;

function increment(){
    count++;
    saygac.textContent = count;
}

let decrement = ()=>{
    count--;
    saygac.textContent = count;
}

// Save count
// const save = ()=>{
//     let values = document.createElement("h3");
//     values.classList.add('ent-values');
//     entries.appendChild(values);
//     values.innerText=count;
//     console.log(entries);
// };

const save = ()=>{
    let el = count + ' - ';
    saveEl.textContent+=el;
    saygac.textContent = 0;
    count = 0;
}