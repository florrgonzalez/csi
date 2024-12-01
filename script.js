const logoContainer = document.getElementById('logo-container');
const logos = logoContainer.children;
const totalLogos = logos.length;

// Duplicar los logos en el contenedor
for (let i = 0; i < totalLogos; i++) {
    const clone = logos[i].cloneNode(true); // Clonar el logo
    logoContainer.appendChild(clone); // Añadir el clon al contenedor
}

// Calcular la duración de la animación en función del número de logos
const animationDuration = 15 + totalLogos * 0.5; // Ajusta la duración según la cantidad de logos
logoContainer.style.animationDuration = `${animationDuration}s`; // Establecer la duración de la animación

