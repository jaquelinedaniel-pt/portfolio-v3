document.addEventListener('DOMContentLoaded', () => {
    
    // 1. FORÇA SCROLL PARA O TOPO (RESET)
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. INICIA ÍCONES (LUCIDE)
    lucide.createIcons();

    // 3. (REMOVIDO: SISTEMA DE INTRODUÇÃO)
    // O site carrega diretamente agora.
    const body = document.body;

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