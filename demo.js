
(() => {
  document.querySelectorAll('.menu-button').forEach((button) => {
    button.addEventListener('click', () => {
      const navigation = document.querySelector('.global-nav');
      const isOpen = navigation?.classList.toggle('global-nav--open') ?? false;
      button.classList.toggle('menu-button--open', isOpen);
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });
  });

  document.querySelectorAll('.cart-button, .add-button, .checkout-link').forEach((control) => {
    control.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  });

  const hero = document.querySelector('.home-hero');
  if (hero) window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    hero.style.setProperty('--motion-x', String(x * 18) + 'px');
    hero.style.setProperty('--motion-y', String(y * 13) + 'px');
    hero.style.setProperty('--motion-soft-x', String(x * 7) + 'px');
    hero.style.setProperty('--motion-soft-y', String(y * 5) + 'px');
    hero.style.setProperty('--motion-inverse-x', String(x * -8) + 'px');
    hero.style.setProperty('--motion-inverse-y', String(y * -6) + 'px');
  }, { passive: true });
})();
