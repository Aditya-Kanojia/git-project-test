
// let key=document.querySelector('input');

// key.addEventListener('onkeypress',getData)
let counter=0;
function getData(){

  console.log("fetching...",counter++);
   console.log("it working") 
}

function debounce(fn,d){
let timer;
return function(){
    let context=this
    clearInterval(timer);
    let args=arguments;
    timer=setTimeout(()=>{
        fn.apply(context,args)
    },d)
}
}

let callDebounce= debounce(getData,500);
callDebounce();
