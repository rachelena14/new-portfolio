document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        const navItems = nav.querySelectorAll('a');
        navItems.forEach((item) => {
            item.addEventListener('click', function() {
                navItems.forEach((navItem) => {
                    navItem.classList.remove('active');
                });
                item.classList.add('active');
            });
        });
    } else {
        console.error('Nav element not found');
    }
});