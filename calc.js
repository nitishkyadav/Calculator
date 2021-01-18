const output2 = document.querySelector('.output2');
const output1 = document.querySelector('.output1');
const btns = document.querySelectorAll('.btn') ;
const equal = document.querySelector('.equal') ;
const clear = document.querySelector('.clear') ;

btns.forEach(btn => {
    btn.addEventListener('click' , () => {
        let content = btn.getAttribute('data-num');
        output2.textContent += content ;
    })
})
equal.addEventListener('click' , () => {
    let expression = output2.textContent ;
    output2.textContent = eval(expression);
    output1.textContent = eval(expression);
})
clear.addEventListener('click', ()=>{
    let str = output2.textContent ;
    let arr = str.split('') ;
    arr.pop();
    output2.textContent = arr.join('') ;
})