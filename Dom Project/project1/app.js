const istatus = document.querySelector('h5');
const btn = document.querySelector('button');
let flag = 0;

btn.addEventListener('click', () => {
    if(flag === 0) {
        istatus.innerText = "Friend";
        istatus.style.color = "green";
        btn.innerText = "Remove Friend";
        flag = 1;
    }
    else {
        istatus.innerText = "Stranger";
        istatus.style.color = "crimson";
        btn.innerText = "Add Friend";
        flag = 0;
    }
})