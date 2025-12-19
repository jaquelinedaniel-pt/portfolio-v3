document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FORÇA SCROLL PARA O TOPO (RESET)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. INICIA ÍCONES (LUCIDE)
    lucide.createIcons();

    // 3. SISTEMA DE INTRODUÇÃO (BOOT)
    const introLayer = document.getElementById('intro-layer');
    const mainInterface = document.getElementById('main-interface');
    const counterDisplay = document.getElementById('year-counter');
    const body = document.body;

    let currentYear = 0;
    const targetYear = 15;
    const duration = 3500;
    const intervalTime = duration / targetYear;

    // Bloqueia scroll durante a intro
    body.style.overflow = 'hidden';

    const timer = setInterval(() => {
        currentYear++;
        counterDisplay.innerText = currentYear.toString().padStart(2, '0');
        if (currentYear >= targetYear) {
            clearInterval(timer);
            setTimeout(revealSite, 500);
        }
    }, intervalTime);

    function revealSite() {
        window.scrollTo(0, 0); // Garante topo novamente ao revelar
        introLayer.style.transform = 'translateY(-100%)';
        mainInterface.classList.remove('hidden');
        mainInterface.classList.add('visible');
        body.style.overflow = 'auto'; // Libera scroll
    }

    // 4. LÓGICA DOS MODAIS (DIALOG)
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) {
            modal.showModal();
            body.style.overflow = 'hidden'; // Trava fundo
        }
    }

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if(modal) {
            modal.close();
            body.style.overflow = 'auto'; // Libera fundo
        }
    }

    // Fechar ao clicar fora (backdrop)
    document.querySelectorAll('dialog.modal-overlay').forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.close();
                body.style.overflow = 'auto';
            }
        });
    });

    // 5. SCROLL REVEAL (Animação ao rolar)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.neon-card, .timeline-block').forEach(el => {
        observer.observe(el);
    });

});