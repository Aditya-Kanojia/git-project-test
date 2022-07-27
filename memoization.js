
function memoized(){
 
    let cache={};
    return function(a){
     

        if(a in cache){
            console.log("cache value returned");
            return cache[a];
        }
        else{
            console.log("calculating....")
          let result=a+10;
            cache[a] = result;
            return result
        }
    }
}

let memoizedFunction = memoized();

console.log(memoizedFunction(20));
console.log(memoizedFunction(20));