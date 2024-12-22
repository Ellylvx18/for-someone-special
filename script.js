function toggleLetter() {
    const letter = document.getElementById('letter');
    letter.style.display = letter.style.display === 'block' ? 'none' : 'block';
}

function closeLetter(event) {
    event.stopPropagation();
    const letter = document.getElementById('letter');
    letter.style.display = 'none';
}

document.querySelector('.btn-bottom-right').addEventListener('click', function() {
    const envelope = document.querySelector('.envelope');
    if (envelope) {
        envelope.remove(); // Supprime l'élément enveloppe
    }
});

// Écouter l'événement sur le premier bouton
document.querySelector('.btn-bottom-right').addEventListener('click', function() {
    const button = this; // Référence au bouton cliqué

    // Supprimer le bouton actuel
    button.remove();

    // Créer le second bouton
    const newButton = document.createElement('button');
    newButton.textContent = "Click on me!";
    newButton.classList.add('btn-bottom-right'); // Ajouter la classe existante
    document.body.appendChild(newButton);
    newButton.classList.add('btn-center'); // Ajouter la classe pour centrer le bouton


    // Ajouter un événement au deuxième bouton
    newButton.addEventListener('click', function() {
        // Supprime le deuxième bouton
        newButton.remove();

       // Faire apparaître l'image du cadeau
        const gift = document.getElementById('gift');
        gift.style.display = 'block'; // Rend visible le cadeau

        // Ajouter un événement au clic sur le cadeau
        gift.addEventListener('click', function() {
            // Cacher le cadeau
            gift.style.transition = 'opacity 1s ease';
            gift.style.opacity = '0';

            gift.addEventListener('transitionend', function() {
                gift.style.display = 'none';
            });

            // Faire apparaître l'image cachée
            const hiddenImage = document.getElementById('hidden-image');
             hiddenImage.style.display = 'block'; // Rend visible l'image cachée

             // Faire apparaître le texte caché
             const hiddenText = document.getElementById('hidden-text');
              hiddenText.style.display = 'block'; // Rend visible le texte caché
            
            // Créer le bouton "Tout effacer"
            const clearButton = document.createElement('button');
            clearButton.textContent = 'Click on me and see what happen.';
            clearButton.classList.add('btn-bottom-center');

             // Ajouter le bouton au body
            document.body.appendChild(clearButton);

            // Ajouter un événement au clic sur le bouton "Tout effacer"
            clearButton.addEventListener('click', function() {
                // Supprimer tous les éléments du body
                document.body.innerHTML = '';

                // Ajouter le conteneur pour les feux d'artifice
                const fireworksContainer = document.createElement('div');
                fireworksContainer.id = 'fireworks-container';
                document.body.appendChild(fireworksContainer);
                
                
                // Initialiser l'animation des feux d'artifice
                tsParticles.load('fireworks-container', {
                    fullScreen: {
                        enable: true,
                        zIndex: 9999
                    },
                    particles: {
                        number: {
                            value: 0
                        },
                        color: {
                            value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
                        },
                        shape: {
                            type: 'circle'
                        },
                        opacity: {
                            value: 1
                        },
                        size: {
                            value: 3
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            outMode: 'destroy',
                            bounce: false
                        }
                    },
                    interactivity: {
                        detectsOn: 'window',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            }
                        },
                        modes: {
                            push: {
                                quantity: 4
                            }
                        }
                    },
                    detectRetina: true,
                    background: {
                        color: '#000000'
                    },
                    emitters: {
                        direction: 'top',
                        life: {
                            count: 0,
                            duration: 0.1,
                            delay: 0.1
                        },
                        rate: {
                            delay: 0.1,
                            quantity: 1
                        },
                        size: {
                            width: 100,
                            height: 0
                        },
                        position: {
                            x: 50,
                            y: 100
                        }
                    }
                });
            });            
        });
    });
});

function generateWord() {
    // Liste des mots doux
    const phrases = [
        "You're my sunshine",
        "I love you",
        "You make me smile",
        "My everything",
        "You're amazing",
        "Beautiful soul",
        "Love of my life",
        "The one who sees me",
        "My joy in the chaos",
        "My other half",
        "The reason my heart beats",
        "My home",
        "My heart’s keeper",
        "The one who makes my days better",
        "My favorite person",
        "The reason I smile",
        "My strength",
        "The one who warms my heart",
        "My peace",
        "The one I care for",
        "My light in the dark",
        "My safe place",
    ];

    // Choisir une phrase aléatoire
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    // Créer un élément pour la phrase
    const word = document.createElement('div');
    word.className = 'word';
    word.textContent = randomPhrase;

    // Position aléatoire (gauche ou droite)
    const randomX = Math.random() > 0.5 ? '10%' : '80%'; // Gauche ou droite
    const randomY = Math.random() * 80 + 10; // Entre 10% et 90% en hauteur

    // Appliquer les styles
    word.style.left = randomX; // Position horizontale
    word.style.top = `${randomY}%`; // Position verticale

    // Ajouter au document
    document.body.appendChild(word);

    // Supprimer après l'animation (3 secondes)
    setTimeout(() => {
        word.remove();
    }, 10000);
}

// Fonction pour générer les mots doux périodiquement
function startGeneratingWords() {
    const interval = setInterval(() => {
        generateWord(); // Générer un mot doux
    }, 500); // Intervalle entre les mots (500ms)

    // Arrêter après 10 secondes
    setTimeout(() => {
        clearInterval(interval);
    }, 100000); // Ajustez la durée totale si nécessaire
}

startGeneratingWords();