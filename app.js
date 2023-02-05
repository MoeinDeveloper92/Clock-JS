// below we need a function to perform an action evey second
// therefore the best choice is set interval



const hourHand = document.querySelector('[data-hour-hand]')

const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
console.log(minuteHand)


const setClock = () => {
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    // we dont want our minute and hour to jump by entire and hours and minute at a time 
    // we want them to move slower and be a percenage
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12

    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
}




const setRotation = (element, rotationRatio) => {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setInterval(setClock, 1000)