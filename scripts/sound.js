// Som para hover/click em itens de Skills, Technologies e Projects
const soundHover = new Audio('assets/sfx/sfx xilofone.m4a');
const soundFirefly = new Audio('assets/sfx/shine-1-268902.mp3');
soundHover.volume = 0.5;
soundFirefly.volume = 0.5;

// Função para adicionar som
function addSoundEffect(selector) {
    document.querySelectorAll(selector).forEach(item => {
        item.addEventListener('mouseenter', () => {
            soundHover.currentTime = 0; // reinicia o som
            soundHover.play();
        });
        item.addEventListener('click', () => {
            soundClick.currentTime = 0;
            soundClick.play();
        });
    });
}


// Aplica o som nos itens desejados
addSoundEffect('.skill-tag');
addSoundEffect('.project-item');

// Firefly hover sound
function addFireflySound() {
    const fireflies = ['#moode-toggle', '#moode-toggle-dark'];
    fireflies.forEach(id => {
        const btn = document.querySelector(id);
        if (btn) {
            btn.addEventListener('mouseenter', () => {
                soundFirefly.currentTime = 0;
                soundFirefly.play();
            });
        }
    });
}

addFireflySound('.firefly-lightmode');
addFireflySound('.firefly-darkmode');