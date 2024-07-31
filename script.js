const hamburger = document.getElementById('hamburger-icon');
const cross = document.getElementById('cross-icon');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-x-full');
    hamburger.classList.add('hidden');
    cross.classList.remove('hidden');
})
cross.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-x-full');
    cross.classList.add('hidden');
    hamburger.classList.remove('hidden');
})