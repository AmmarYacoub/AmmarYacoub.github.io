// Keep accessible menu states in sync with the theme's existing controls.
(() => {
  const navButton = document.querySelector('#site-nav > button');
  const overflow = document.getElementById('navigation-overflow');
  if (navButton && overflow) {
    const syncNavigation = () => navButton.setAttribute('aria-expanded', String(!overflow.classList.contains('hidden')));
    new MutationObserver(syncNavigation).observe(overflow, { attributes: true, attributeFilter: ['class'] });
    syncNavigation();
  }

  const profileButton = document.querySelector('.author__urls-wrapper button');
  if (profileButton) {
    const syncProfile = () => profileButton.setAttribute('aria-expanded', String(profileButton.classList.contains('open')));
    new MutationObserver(syncProfile).observe(profileButton, { attributes: true, attributeFilter: ['class'] });
    syncProfile();
  }

  const themeToggle = document.querySelector('#theme-toggle [role="button"]');
  if (themeToggle) {
    themeToggle.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        themeToggle.click();
      }
    });
  }
})();
