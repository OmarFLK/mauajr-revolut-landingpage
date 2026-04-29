/* =============================================
   SERVICES.JS — Mauá Júnior
   Responsável: Caio Arthuzo Dania
   - Tabs de núcleos de serviço
   - Contador animado
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------
     TABS — NÚCLEOS DE SERVIÇO
  ------------------------------------------ */
  const tabs = document.querySelectorAll('.nucleo-tab');
  const panels = document.querySelectorAll('.nucleo-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Atualiza tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Atualiza panels
      panels.forEach(panel => {
        if (panel.id === `tab-${target}`) {
          panel.removeAttribute('hidden');
          panel.classList.add('active');
          // Re-dispara animação de reveal nos cards do painel
          panel.querySelectorAll('.reveal').forEach(el => {
            el.classList.remove('is-visible');
            void el.offsetWidth; // reflow
            el.classList.add('is-visible');
          });
        } else {
          panel.setAttribute('hidden', '');
          panel.classList.remove('active');
        }
      });
    });
  });

  /* ------------------------------------------
     CONTADOR ANIMADO
  ------------------------------------------ */
  const numberItems = document.querySelectorAll('.servicos-number-value');
  if (!numberItems.length) return;

  let counted = false;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        numberItems.forEach(el => animateCount(el));
        counterObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const numbersSection = document.querySelector('.servicos-numbers');
  if (numbersSection) counterObserver.observe(numbersSection);

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1600;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

});