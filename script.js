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

const sjclScript = document.createElement("script");
sjclScript.src = "https://bitwiseshiftleft.github.io/sjcl/sjcl.js";
sjclScript.async = false;
sjclScript.onload = () => {
    document.body.removeChild(sjclScript);
};
document.body.appendChild(sjclScript);


const presentsData = {
    Elna: [ 'Stefania', 'Kristjan', 'Loa' ],
    Diddi: [ 'Kristjan', 'Gudfridur', 'Elna' ],
    Jon: [ 'Loa', 'Diddi', 'Gudfridur' ],
    Stefania: [ 'Jon', 'Loa', 'Elna' ],
    Kristjan: [ 'Stefania', 'Elna', 'Diddi' ],
    Gudfridur: [ 'Kristjan', 'Diddi', 'Jon' ],
    Loa: [ 'Stefania', 'Jon', 'Gudfridur' ]
  };  

// const params = new URLSearchParams(window.location.search);
// const whoEncoded = params.get("who");
// console.log(whoEncoded);

const whoEncoded = "RWxuYQ==";
if (whoEncoded) {
    const who = atob(whoEncoded);
    const names = presentsData[who];

    for (let i = 0; i < names.length; i++) {
        const el = document.querySelector(`#name-${i+1}`);
        el.textContent = names[i];
    }
}

window.addEventListener('resize', handleResize);
