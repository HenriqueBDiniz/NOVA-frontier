<<<<<<< HEAD
// ================= HEADER HIDE/SHOW =================
let lastScroll = 0;
const header = document.getElementById('top');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        header.classList.add('show');
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

// ================= MOBILE DROPDOWN =================
const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
        item.classList.toggle('open');
    });
});

// ================= CLOSE DROPDOWN AO CLICAR FORA =================
document.addEventListener('click', () => {
    dropdowns.forEach(item => item.classList.remove('open'));
});
=======
// ================= HEADER HIDE/SHOW =================
let lastScroll = 0;
const header = document.getElementById('top');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add('hide');
        header.classList.remove('show');
    } else {
        header.classList.add('show');
        header.classList.remove('hide');
    }

    lastScroll = currentScroll;
});

// ================= MOBILE DROPDOWN =================
const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach(item => {
    item.addEventListener('click', e => {
        e.stopPropagation();
        item.classList.toggle('open');
    });
});

// ================= CLOSE DROPDOWN AO CLICAR FORA =================
document.addEventListener('click', () => {
    dropdowns.forEach(item => item.classList.remove('open'));
});
>>>>>>> 0d1557b (commit 1)
