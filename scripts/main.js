// Esconde todos os cards exceto o "welcome" no início
document.querySelectorAll('.portfolio-card').forEach(card => {
    if (card.id !== 'welcome') {
        card.classList.add('hidden');
        card.classList.remove('visible');
    }
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Fecha todos
        document.querySelectorAll('.portfolio-card').forEach(card => {
            card.classList.add('hidden');
            card.classList.remove('visible');
        });

        
        const targetId = this.getAttribute('href').replace('#', '');
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
            targetCard.classList.remove('hidden');
            targetCard.classList.add('visible');
        }
    });
});

// Botão "X" fecha o card e volta para o welcome
document.querySelectorAll('.close-card').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.portfolio-card');
        card.classList.add('hidden');
        card.classList.remove('visible');

        const welcome = document.getElementById('welcome');
        welcome.classList.remove('hidden');
        welcome.classList.add('visible');
    });
});


// === DARK / LIGHT MODE ===
const body = document.body;
const lightBtn = document.getElementById('moode-toggle');
const darkBtn = document.getElementById('moode-toggle-dark');

// Estado inicial (começa no light)
darkBtn.style.display = 'none';

lightBtn.addEventListener('click', () => {
    body.classList.add('dark-theme');
    lightBtn.style.display = 'none';
    darkBtn.style.display = 'block';
});

darkBtn.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    darkBtn.style.display = 'none';
    lightBtn.style.display = 'block';
});
