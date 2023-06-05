/* Estas líneas de código seleccionan los elementos HTML con los ID `menu-btn` y
 `navbar` respectivamente usando el método `document.querySelector()` y asignándolos a las variables `menu`
and `navbar`. */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

/* Este código agrega un detector de eventos al elemento `menu` que alterna la clase `fa-times` 
en el elemento `menu` y la clase `active` en el elemento `navbar` cuando se hace clic en el elemento `menu`.
 Él también está agregando un detector de eventos al objeto de la ventana que elimina la clase `fa-times` 
 del elemento `menu` y la clase `active` del elemento `navbar` cuando el usuario se desplaza por la página. */
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



/* Este código inicializa una nueva instancia de la clase Swiper y crea un nuevo control deslizante 
con la clase "home-slider". El control deslizante tiene varias opciones configuradas,incluida la capacidad
de agarrar el cursor, recorrer las diapositivas, centrarlas y reproducirlas automáticamente con un retraso de 7500 milisegundos. 
También incluye botones de navegación con las clases "swiper-button-next" y "swiper-button-prev". */
var swiper = new Swiper(".home-slider",{
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

/* Este código inicializa una nueva instancia de la clase Swiper y crea un nuevo control
 deslizante con la clase "prom-slider". El control deslizante tiene varias opciones configuradas, 
 incluida la capacidad de agarrar el cursor, recorrer las diapositivas, centrar las diapositivas y
  reproducir automáticamente con un retraso de 7500 milisegundos. También incluye viñetas de paginación 
  con la clase "swiper-pagination". Además, establece puntos de interrupción para diferentes tamaños de pantalla,
   con el número de diapositivas por vista cambiando en anchos de pantalla de 0px, 768px y 991px. */
var swiper = new Swiper(".prom-slider",{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
    },

});


/* Este código inicializa una nueva instancia de la clase Swiper y crea un nuevo control 
deslizante con la clase "room-slider". El control deslizante tiene varias opciones configuradas, 
incluida la capacidad de agarrar el cursor, recorrer las diapositivas, centrar las diapositivas y 
reproducir automáticamente con un retraso de 7500 milisegundos. También incluye viñetas de paginación 
con la clase "swiper-pagination". Además, establece puntos de interrupción para diferentes tamaños de pantalla,
 con el número de diapositivas por vista cambiando en anchos de pantalla de 0px, 768px y 991px. */
var swiper = new Swiper(".room-slider",{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
    },

});


/* Este código inicializa una nueva instancia de la clase Swiper y crea un nuevo control
 deslizante con la clase "gallery-slider". El control deslizante tiene varias opciones configuradas,
incluida la capacidad de agarrar el cursor, recorrer las diapositivas, centrar las diapositivas y
reproducir automáticamente con un retraso de 1500 milisegundos. También incluye viñetas de paginación
con la clase "swiper-pagination". Además, establece puntos de interrupción para diferentes tamaños de pantalla,
con el número de diapositivas por vista cambiando en anchos de pantalla de 0px, 768px y 991px. */
var swiper = new Swiper(".gallery-slider",{
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:3,
        },
        991: {
            slidesPerView:4,
        },
    },

});