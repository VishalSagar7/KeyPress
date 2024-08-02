const span = document.getElementById('span');
const keycode = document.getElementById('keycode');

window.addEventListener('keyup', (e) => {
    // console.log(e.key);
    span.innerText = e.key

    keycode.innerText = e.keyCode
    
    
})