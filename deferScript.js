function active() {
    let hBN = document.getElementById('headerButtonNav');
    let hMN = document.getElementById('headerMenuNav')
    if (hBN.ariaPressed === "false") {
        return [hBN.ariaPressed = "true", hMN.ariaPressed = "true"];
    } else {
        return [hBN.ariaPressed = "false", hMN.ariaPressed = "false"];
    }
}

let toggleState = true; //this
let toggleMode = document.querySelector('.toggle');
let logo = document.getElementById("logo"); //this
let logoLightmode = document.getElementById("logoLightmode");
let toggleLightmodeOne = document.getElementById("toggleLightmodeOne");
let toggleLightmodeTwo =document.getElementById("toggleLightmodeTwo");
let toggleDarkmodeOne = document.getElementById("toggleDarkmodeOne"); //this
let toggleDarkmodeTwo = document.getElementById("toggleDarkmodeTwo");
let buttonNav = document.getElementById("hamburgerButton")
let burgerLine = document.getElementsByClassName("line")
/*const viewMode = (screen) => {
    document.body.classList.toggle('lightmode')
    if (toggleState === true) {
        toggleState = false;
        logo.style.display = 'none';
        toggleDarkmodeOne.style.display = 'none';
        toggleDarkmodeTwo.style.display = 'none';
        logoLightmode.style.display = 'block';
        toggleLightmodeOne.style.display = 'inline';
        toggleLightmodeTwo.style.display = 'inline';
        console.log(buttonNav);
        Array.from(buttonNav).map(function(button) {
            button.style.border="2px solid #181818";
        });
    } else {
        toggleState = true;
        logo.style.display = 'block';
        toggleDarkmodeOne.style.display = 'inline';
        toggleDarkmodeTwo.style.display = 'inline';
        logoLightmode.style.display = 'none';
        toggleLightmodeOne.style.display = 'none';
        toggleLightmodeTwo.style.display = 'none';
        Array.from(buttonNav).map(function(button) {
            button.style.border="2px solid #bcbbff";
        });
    }
    if (screen === 'mobile') {
        toggleDarkmodeTwo.style.display = 'none';
        toggleLightmodeTwo.style.display = 'none';
    } else {
        toggleDarkmodeOne.style.display = 'none';
        toggleLightmodeOne.style.display = 'none';
    }
}*/
    // Darkmode Function
    const viewModeTwo = () => {
        // This class contains general Dark/Light mode properties
        document.body.classList.toggle('bodyLightmode');
        if (toggleState) {
            toggleState = false;
            toggleDarkmodeOne.innerHTML = '<i class="fa-solid fa-moon"></i><p>Dark Mode</p>';
            logo.src = 'https://escrituras-eremitas.com/wp-content/uploads/2023/01/CS50HomepageLogoLightMode.png';
            buttonNav.setAttribute('fill', 'var(#181818)');
        } else {
            toggleState = true;
            toggleDarkmodeOne.innerHTML = '<i class="fa-regular fa-sun"></i><p>Light Mode</p>';
            logo.src = 'https://escrituras-eremitas.com/wp-content/uploads/2023/01/CS50HomepageLogo.png';
            buttonNav.setAttribute('fill', 'var(--button-color)');
        }
        
    }
    // Dark/Light mode anchor for mobile
    const viewModeAnchorMobile = document.getElementById('viewModeAnchorMobile');
    //Event handler
    viewModeAnchorMobile.onclick = viewModeTwo;
