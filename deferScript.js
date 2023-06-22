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
// About Me section slices
const aboutMeImg = document.getElementById('aboutImages');
const aboutMeText = document.getElementById('subDes');
const aboutMeButton = document.getElementById('introBtn')

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
        aboutMeButton.style.border = '3px solid #181818'
        aboutMeImg.style.border = '0.2rem solid #181818'
    } else {
        toggleState = true;
        toggleDarkmodeOne.innerHTML = '<i class="fa-regular fa-sun"></i><p>Light Mode</p>';
        toggleDarkmodeTwo.innerHTML = '<i class="fa-regular fa-sun"></i><p>Light Mode</p>';
        logo.src = 'https://escrituras-eremitas.com/wp-content/uploads/2023/01/CS50HomepageLogo.png';
        hamburgerButton.setAttribute('fill', 'var(--button-color)');
        buttonNav.style.border = '2px solid #bcbbff'
        aboutMeButton.style.border = '3px solid #bcbbff'
        aboutMeImg.style.border = '0.2rem solid #bcbbff'
    }
        
}
// Dark/Light mode anchors for mobile & full screen
const viewModeAnchorMobile = document.getElementById('viewModeAnchorMobile');
const viewModeAnchorFull = document.getElementById('viewModeAnchorFullScreen')
// Event handlers
viewModeAnchorMobile.onclick = viewMode;
viewModeAnchorFull.onclick = viewMode;


let currentSlideIndx = 1;
const aboutMeImgArray = [
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic1.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic2.jpeg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic3.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic4.jpg",
    "https://escrituras-eremitas.com/wp-content/uploads/2022/11/pic5.jpg"
];
const aboutMeTextArray = [
    "Welcome to my homepage! Here you will learn more about myself and my programming journey. I will share my background, hobbies and even some of my most notable projects. Enjoy!",
    "I have a degree in Mechanical Engineering. After four years of work experience I decided to move to Thailand to learn more about Buddhism and to experience a different culture.",
    "I am originally from the Dominican Republic, a place I love and visit often. My wife is Thai, she is a Social Studies teacher, and as you can see, that's my dad! The greatest guy I know.",
    "I consider myself to be a Buddhist. I enjoy reading about it and practicing sitting and walking meditation. Every once in a while my wife and I support our local monastery with supplies!",
    "I'm also a teacher with six years of experience. Recently, I moved from teaching full-time to doing it part-time; now I have more time to continue to develop my programming skills!"
];

// Function for changing slices
const aboutMeChangeSlide = () => {
    if(currentSlideIndx >= aboutMeImgArray.length) {
        currentSlideIndx = 0;
    }
    aboutMeImg.src = aboutMeImgArray[currentSlideIndx];
    aboutMeText.innerHTML = aboutMeTextArray[currentSlideIndx];
    aboutMeButton.innerHTML =  `Next [${currentSlideIndx + 1}/5]`;
    currentSlideIndx++;
}

aboutMeButton.onclick = aboutMeChangeSlide;