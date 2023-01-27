// Ham. button display menu function
function active() {
    let hBN = document.getElementById('headerButtonNav');
    let hMN = document.getElementById('headerMenuNav');
    if (hBN.ariaPressed === "false") {
        return [hBN.ariaPressed = "true", hMN.ariaPressed = "true"];
    } else {
        return [hBN.ariaPressed = "false", hMN.ariaPressed = "false"];
    }
}

let toggleState = true; // Toggle between two states for dark/light mode
let logo = document.getElementById("logo"); // Header Logo
let toggleDarkmodeOne = document.getElementById("toggleDarkmodeOne"); // Toggle Button (mobile)
let toggleDarkmodeTwo = document.getElementById("toggleDarkmodeTwo"); // Toggle Button (Full Screen)
let buttonNav = document.getElementById("headerButtonNav") // Ham. button container
let hamburgerButton = document.getElementById("hamburgerButton"); // Ham. button (svg)

// Darkmode Function
const viewMode = () => {
    // This class contains general Dark/Light mode properties
    document.body.classList.toggle('bodyLightmode');
    if (toggleState) {
        toggleState = false;
        toggleDarkmodeOne.innerHTML = '<i class="fa-solid fa-moon"></i><p>Dark Mode</p>';
        toggleDarkmodeTwo.innerHTML = '<i class="fa-solid fa-moon"></i><p>Dark Mode</p>';
        logo.src = 'https://escrituras-eremitas.com/wp-content/uploads/2023/01/CS50HomepageLogoLightMode.png';
        hamburgerButton.setAttribute('fill', 'var(#181818)');
        buttonNav.style.border = '2px solid #181818'
    } else {
        toggleState = true;
        toggleDarkmodeOne.innerHTML = '<i class="fa-regular fa-sun"></i><p>Light Mode</p>';
        toggleDarkmodeTwo.innerHTML = '<i class="fa-regular fa-sun"></i><p>Light Mode</p>';
        logo.src = 'https://escrituras-eremitas.com/wp-content/uploads/2023/01/CS50HomepageLogo.png';
        hamburgerButton.setAttribute('fill', 'var(--button-color)');
        buttonNav.style.border = '2px solid #bcbbff'

    }
        
}
// Dark/Light mode anchors for mobile & full screen
const viewModeAnchorMobile = document.getElementById('viewModeAnchorMobile');
const viewModeAnchorFull = document.getElementById('viewModeAnchorFullScreen')
//Event handlers
viewModeAnchorMobile.onclick = viewMode;
viewModeAnchorFull.onclick = viewMode;
