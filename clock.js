const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

//26d 05h 05m 28s
function getTime()
{
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}`: minutes}:${
            seconds < 10 ? `0${seconds}`: seconds}`;
}


function init()
{
    getTime();
    setInterval(getTime,1000);
}

init();

