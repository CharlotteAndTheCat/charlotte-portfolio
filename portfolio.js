document.querySelectorAll('.section .image-container').forEach(container => {
    container.addEventListener('mouseenter', () => {
        const originalImg = container.querySelector('img');
        const expandedImg = originalImg.cloneNode(true);
        expandedImg.classList.add('expanded-img');
        document.body.appendChild(expandedImg);
    });

    container.addEventListener('mouseleave', () => {
        const expandedImg = document.querySelector('.expanded-img');
        if (expandedImg) {
            expandedImg.remove();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le bouton "Home"
    var btnHome = document.getElementById('btnHome');

    // Ajoutez un gestionnaire d'événements pour écouter le clic sur le bouton "Home"
    btnHome.addEventListener('click', function() {
        // Faites défiler la page vers le haut
        window.scrollTo(0, 0);
    });

    // Ajoutez votre code existant ici
    document.querySelectorAll('.section .image-container').forEach(container => {
        container.addEventListener('mouseenter', () => {
            const originalImg = container.querySelector('img');
            const expandedImg = originalImg.cloneNode(true);
            expandedImg.classList.add('expanded-img');
            document.body.appendChild(expandedImg);
        });

        container.addEventListener('mouseleave', () => {
            const expandedImg = document.querySelector('.expanded-img');
            if (expandedImg) {
                expandedImg.remove();
            }
        });
    });
});
