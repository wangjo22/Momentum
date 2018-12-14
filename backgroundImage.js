const body = document.querySelector("body");
const NUMBER_IMAGES = 8;


function drawImage(imgNumber)
{
    const img = new Image();
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
}

function getRandom()
{
    const number = Math.floor(Math.random() * NUMBER_IMAGES);
    return number;
}

function main()
{
    const randomNumber = getRandom();
    drawImage(randomNumber);
}

main();