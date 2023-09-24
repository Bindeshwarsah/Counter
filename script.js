let counter=document.querySelector('#title');
let incrementbtn=document.querySelector('#incr');
let resetbtn=document.querySelector('#reset');
let decrementbtn=document.querySelector('#decr');
let count=parseInt(counter.innerText);
function increment(){
    ++count;
    counter.innerText=count;
  


}
function reset(){
    count=0;
    counter.innerText=count;
}
function decrement(){
    --count;
    counter.innerText=count;
}
incrementbtn.addEventListener('click',increment);
resetbtn.addEventListener('click',reset);
decrementbtn.addEventListener('click',decrement);