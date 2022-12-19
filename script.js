function handleResize(_event) {
    const textOffset = 410;
    const pictureWidth = 1050;
    const marginWidths = (window.innerWidth - pictureWidth) / 2;
    const posX = marginWidths + textOffset;
    const list = document.querySelector("#list-content");
    list.style.left = `${posX}px`;
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