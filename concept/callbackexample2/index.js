function arthematic(a , b, arthematicFinalFunction){
    return arthematicFinalFunction(a, b)
 }
 
 function sum(a, b){
     return a + b
 }
 function sub(a, b){
     return a - b
 }
 
 const res = arthematic(3, 2, sub)
 console.log(res)