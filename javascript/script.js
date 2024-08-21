document.addEventListener('DOMContentLoaded', () => {
    // Manipulação dos links do menu
    const menuItems = document.querySelectorAll('.sidebar ul li a');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(`Link clicado: ${item.textContent}`);
        });
    });

    // Manipulação da barra lateral
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });

    // Manipulação do submenu
    const submenuItems = document.querySelectorAll('.has-submenu > a');

    submenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parentLi = item.parentElement;
            parentLi.classList.toggle('active');
        });
    });
});