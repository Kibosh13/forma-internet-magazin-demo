
(() => {
  const notice = document.createElement('div');
  notice.className = 'static-demo-notice';
  notice.textContent = 'Статическая демонстрация — оформление заказов и отправка форм отключены';
  document.body.prepend(notice);
  if (document.querySelector('.palette-page')) notice.hidden = true;

  document.querySelectorAll('.menu-button').forEach((button) => {
    button.addEventListener('click', () => document.querySelector('.global-nav')?.classList.toggle('global-nav--open'));
  });

  document.querySelectorAll('.cart-button, .add-button, .checkout-link').forEach((control) => {
    control.addEventListener('click', (event) => {
      event.preventDefault();
      notice.textContent = 'Корзина и оформление заказа доступны только в полной серверной версии';
    });
  });

  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      notice.textContent = 'Отправка форм отключена в статической демонстрации';
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
