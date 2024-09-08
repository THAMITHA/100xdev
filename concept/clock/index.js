function display(){
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, 0)
    const minute = String(now.getMinutes()).padStart(2, 0)
    const seconds = String(now.getSeconds()).padStart(2, 0)
    console.clear()
    console.log(`${hour}:${minute}:${seconds}`)
}
setInterval(display,1000)