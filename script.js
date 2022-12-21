// All sizes in px
const imageWidth = 1822;
const imageHeight = 1646;
const aspectRatio = imageWidth / imageHeight;
// const textOffsetX = 728.8;
// const textOffsetY = 750;
// const textOffsetPctX = textOffsetX / imageWidth;
// const textOffsetPctY = textOffsetY / imageHeight;
const textOffsetPctX = 0.4;
const textOffsetPctY = 0.45;
const listPctWidth = 0.238;

function handleResize(_event) {
    const displayedHeight = window.innerHeight;
    const displayedWidth = aspectRatio * window.innerHeight;
    const marginWidths = (window.innerWidth - displayedWidth) / 2;
    const posX = marginWidths + textOffsetPctX * displayedWidth;
    const posY = textOffsetPctY * displayedHeight;
    const list = document.querySelector("#list-content");
    console.log(marginWidths);
    console.log(textOffsetPctX);
    console.log(displayedWidth);
    console.log(posX);
    list.style.left = `${posX}px`;
    list.style.top = `${posY}px`;
}

handleResize();


const encodedData = "eeyJMb2EiOlsiU3RlZmFuaWEiLCJFbG5hIiwiSm9uIl0sIlN0ZWZhbmlhIjpbIkxvYSIsIktyaXN0amFuIiwiSm9uIl0sIktyaXN0amFuIjpbIlN0ZWZhbmlhIiwiR3VkZnJpZHVyIiwiTG9hIl0sIkd1ZGZyaWR1ciI6WyJFbG5hIiwiS3Jpc3RqYW4iLCJTdGVmYW5pYSJdLCJFbG5hIjpbIkpvbiIsIktyaXN0amFuIiwiR3VkZnJpZHVyIl0sIkpvbiI6WyJFbG5hIiwiR3VkZnJpZHVyIiwiTG9hIl19";
const presentsData = JSON.parse(atob(encodedData));

const namesMap = {
    'Gudfridur': 'Gu&eth;fr&iacute;&eth;ur',
    'Stefania': 'Stefan&#xED;a',
    'Kristjan': 'Kristj&#225n',
    'Loa': 'L&oacute;a'
}

const params = new URLSearchParams(window.location.search);
const whoEncoded = params.get("who");
if (whoEncoded) {
    const who = atob(whoEncoded);
    const names = presentsData[who];

    for (let i = 0; i < names.length; i++) {
        const el = document.querySelector(`#name-${i+1}`);
        const name = names[i];
        el.innerHTML = namesMap[name] ?? name;
    }
}

window.addEventListener('resize', handleResize);
