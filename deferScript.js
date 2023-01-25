function active() {
    let hBN = document.getElementById('headerButtonNav');
    let hMN = document.getElementById('headerMenuNav')
    if (hBN.ariaPressed === "false") {
        return [hBN.ariaPressed = "true", hMN.ariaPressed = "true"];
    } else {
        return [hBN.ariaPressed = "false", hMN.ariaPressed = "false"];
    }
}

let toggleState = true;
let toggleMode = document.querySelector('.toggle');
let logo = document.getElementById("logo");
let logoLightmode = document.getElementById("logoLightmode");
let toggleLightmodeOne = document.getElementById("toggleLightmodeOne");
let toggleLightmodeTwo =document.getElementById("toggleLightmodeTwo");
let toggleDarkmodeOne = document.getElementById("toggleDarkmodeOne");
let toggleDarkmodeTwo = document.getElementById("toggleDarkmodeTwo");
const viewMode = (screen) => {
    document.body.classList.toggle('lightmode')
    if (toggleState === true) {
        toggleState = false
        logo.style.display = 'none';
        toggleDarkmodeOne.style.display = 'none';
        toggleDarkmodeTwo.style.display = 'none';
        logoLightmode.style.display = 'block';
        toggleLightmodeOne.style.display = 'block';
        toggleLightmodeTwo.style.display = 'block';
    } else {
        toggleState = true
        logo.style.display = 'block';
        toggleDarkmodeOne.style.display = 'block';
        toggleDarkmodeTwo.style.display = 'block';
        logoLightmode.style.display = 'none';
        toggleLightmodeOne.style.display = 'none';
        toggleLightmodeTwo.style.display = 'none';
    }
    if (screen === 'mobile') {
        toggleDarkmodeTwo.style.display = 'none';
        toggleLightmodeTwo.style.display = 'none';
    } else {
        toggleDarkmodeOne.style.display = 'none';
        toggleLightmodeOne.style.display = 'none';
    }
}