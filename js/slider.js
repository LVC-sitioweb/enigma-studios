// Params
var sliderSelector = '.swiper-container',
    options = {
        init: false,
        loop: true, // Asegúrate de que esta opción esté activada para el efecto infinito
        speed: 800, // Velocidad de la transición entre slides
        autoplay: {
            delay: 3000, // Tiempo en milisegundos entre transiciones
            disableOnInteraction: false, // Permite continuar el autoplay después de la interacción
        },
        slidesPerView: 2, // Número de slides visibles
        centeredSlides: true, // Centra el slide activo
        effect: 'coverflow', // Efecto de transición
        coverflowEffect: {
            rotate: 50, // Rotación de los slides en grados
            stretch: 0, // Espacio entre slides en píxeles
            depth: 100, // Profundidad en el eje Z
            modifier: 1, // Múltiplo del efecto
            slideShadows: true, // Habilitar sombras de slides
        },
        grabCursor: true,
        parallax: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1023: {
                slidesPerView: 1, // Cambia a un solo slide en pantallas más pequeñas
                spaceBetween: 0
            }
        },
        // Events
        on: {
            imagesReady: function(){
                this.el.classList.remove('loading');
            }
        }
    };

// Inicializa el slider
var mySwiper = new Swiper(sliderSelector, options);

// Inicializa el slider
mySwiper.init();
