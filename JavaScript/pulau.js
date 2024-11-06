const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('fitur');
const reg = document.getElementById('reg');
const checkbox = document.getElementById('hamburger-checkbox');

function toggleMenu() {
    if (window.innerWidth <= 820) {
        if (checkbox.checked) {
            nav.style.transition = 'all 1s'
            reg.style.transition = 'all 1s'

            nav.style.transform = 'translateY(0%)';
            reg.style.transform = 'translateY(0%)';

        } else {
            nav.style.transform = 'translateY(-200%)';
            reg.style.transform = 'translateY(-1200%)';
        }
    } else {
        nav.style.transition = 'none'
        reg.style.transition = 'none'

        nav.style.transform = 'translateY(0%)';
        reg.style.transform = 'translateY(0%)';
    }
}

hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', toggleMenu);
