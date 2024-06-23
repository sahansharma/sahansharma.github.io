document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');

    // URL de tu página
    var pagina = 'sahansharma.github.io';

    // Función para redireccionar al usuario
    function redireccionar() {
        // Verifica si el usuario está utilizando el navegador de Instagram
        if (navigator.userAgent.includes("Instagram")) {
            // Abre la página en el navegador predeterminado del dispositivo móvil
            window.location.href = pagina;
        } else {
            // Detección del sistema operativo del dispositivo
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;

            // Si es un iPhone, abre en Safari
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.open(pagina, '_blank');
            }
            // Si es un dispositivo Android, abre en Chrome
            else if (/android/i.test(userAgent)) {
                window.location.href = 'googlechrome://' + pagina;
            }
            // Para otros dispositivos, abre en una nueva pestaña del navegador
            else {
                window.open(pagina, '_blank');
            }
        }
    }

    // Evento clic para el enlace
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que se siga el enlace por defecto
        redireccionar();
    });
});
