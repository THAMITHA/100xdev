let counter = 30
const countDown = setInterval(()=>{
    console.log(counter)
    counter--
    if(counter<0){
        clearInterval(countDown)
        console.log('counter has fininshed!!!')
    }
}, 1000)
