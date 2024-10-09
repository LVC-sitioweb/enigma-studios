
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    let menuVisible = false;

    menuToggle.addEventListener('click', () => {
    if (!menuVisible) {
    navMenu.style.left = '0'; // Muestra el menú
    menuVisible = true;
} else {
    navMenu.style.left = '-250px'; // Oculta el menú
    menuVisible = false;
}
});
