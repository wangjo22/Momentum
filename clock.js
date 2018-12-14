const clockTime = document.querySelector(".clock").querySelector("div");

function getCurrentTime()
{
    const date = new Date();
    const min = date.getMinutes();
    const hrs = date.getHours();
    const sec = date.getSeconds();

    clockTime.innerText = `${hrs < 10 ? `0${hrs}` : hrs}:${
                             min < 10 ? `0${min}` : min}:${
                             sec < 10 ? `0${sec}` : sec}`;
}


function main() 
{
    getCurrentTime();
    setInterval(getCurrentTime, 1000);
}

main();