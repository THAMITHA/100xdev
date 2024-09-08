function displayTime(){
    const now= new Date()
    const hour= String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0') 
    console.clear()
    console.log(`${hour}:${minutes}:${seconds}`)
}

setInterval(displayTime, 1000)