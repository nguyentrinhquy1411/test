document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const featuresMenuBtn = document.getElementById('featuresMenuBtn');
    const featuresDropdown = document.getElementById('featuresDropdown');
    const mobileFeaturesBtn = document.getElementById('mobileFeaturesBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    // Open the mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
    });

    // Close the mobile menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('flex');
        mobileMenu.classList.add('hidden');
    });

    // Close the mobile menu if the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            mobileMenu.classList.remove('flex');
            mobileMenu.classList.add('hidden');
        }
    });

    // Dropdown functionality for Desktop
    featuresMenuBtn.addEventListener('click', () => {
        // Toggle dropdown visibility
        featuresDropdown.classList.toggle('hidden');
    });

    // Dropdown functionality for Mobile
    mobileFeaturesBtn.addEventListener('click', () => {
        // Toggle mobile dropdown visibility
        mobileDropdown.classList.toggle('hidden');
    });
});
