function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    let greetingText;

    if (currentHour < 12) {
        greetingText = 'Good Morning! Welcome to my portfolio!';
    } else if (currentHour < 18) {
        greetingText = 'Good Afternoon! Check out my work below.';
    } else {
        greetingText = 'Good Evening! Let’s explore my portfolio.';
    }

    greetingElement.textContent = greetingText;
}

function setupPortfolioButton() {
    const hireButton = document.getElementById('hireButton');
    hireButton.addEventListener('click', (event) => {
        alert('Thank you for exploring my portfolio!');
    });
}


function setupSoundOnHover() {
    const pictureBox = document.getElementById('pictureBox');
    const sound = new Audio('hover-sound.mp3'); 

    pictureBox.addEventListener('mouseenter', () => {
        sound.play();
    });

    pictureBox.addEventListener('mouseleave', () => {
        sound.pause();
        sound.currentTime = 0;
    });
}

window.onload = function () {
    displayGreeting();
    setupPortfolioButton();
    setupSoundOnHover();
};
