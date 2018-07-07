const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90; // 90 is to offset our transform.
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);