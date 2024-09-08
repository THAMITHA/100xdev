let startDate = Date.now()
setTimeout(()=>{
    let endDate = Date.now();
    let elapsedTime = endDate - startDate
    console.log(`elapsedtime: ${elapsedTime}ms`)
}, 1000)