// Mantiene visible el carrito
var carritoVisible = false;

//Esperamos que todos los elementos de la página carguen y asi continuar el script
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    // Vamos a hacer funcionar los botones del carrito
    // Eliminar
/* Este código selecciona todos los elementos con la clase "btn-eliminar" y agrega un detector de eventos de clic
a cada uno de ellos que llama a la función "eliminarElementoCarrito" al hacer click. Esta función
elimina el artículo correspondiente del carrito de compras. */
    var botonesEliminarElemento = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarElemento.length;i++){
        var button = botonesEliminarElemento[i];
        button.addEventListener('click', eliminarElementoCarrito);
    }

    // Sumar Cantidad
/* Este código está seleccionando todos los elementos con la clase "sumar-cantidad" y agregando un evento de clic
oyente de cada uno de ellos que llama a la función "sumarCantidad" al hacer clic. Esta función
aumenta la cantidad del artículo correspondiente en el carrito de compras en 1. */
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0; i<botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click', sumarCantidad);
    }
    // Restar Cantidad
/* Este código está seleccionando todos los elementos con la clase "restar-cantidad" y agregando un evento de clic
oyente de cada uno de ellos que llama a la función "restarCantidad" al hacer clic. Esta función
disminuye la cantidad del artículo correspondiente en el carrito de compras en 1. */
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0; i<botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click', restarCantidad);
    }

    // Agregar al Carrito
/* Este código selecciona todos los elementos con la clase "agregar" y agrega un detector de eventos de clic a
cada uno de ellos que llama a la función "agregarAlCarrito" al hacer clic. Esta función agrega la
artículo correspondiente a la cesta de la compra. */
    var botonesAgregarAlCarrito = document.getElementsByClassName('agregar');
    for(var i=0; i<botonesAgregarAlCarrito.length; i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarrito);
    }

    // Pagar
/* Este código está seleccionando el primer elemento con la clase "btn-pagar" y agregando un evento de clic
oyente que llama a la función "pagarClicked" cuando se hace clic. Esta función borra todos los elementos
del carrito de compras, actualiza el total y oculta el carrito mientras muestra un mensaje de agradecimiento. */
    document.getElementsByClassName('btn-pagar')[0].addEventListener('click', pagarClicked)
}

// Eliminamos elemento seleccionado

/**
  * Esta función elimina un artículo del carrito de compras y actualiza el costo total.
  * @param event: el parámetro event es un objeto que representa el evento que activó el
  * función. En este caso, es probable que se trate de un evento de clic en un botón que se utiliza para eliminar un elemento de un
  * carro de la compra.
  */
function eliminarElementoCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    // Actualizamos el total del Carrito
    actualizarTotalCarrito();

    // Hay elementos en el carrito?
    ocultarCarrito();
}

// Actualiza el total del carrito
/**
  * La función actualiza el precio total de los artículos en un carrito de compras iterando a través de cada artículo.
  * precio y cantidad y cálculo del total.
  */
function actualizarTotalCarrito(){
    //Contenedor Carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoElementos = carritoContenedor.getElementsByClassName('carrito-elemento');
    var total = 0;

    // Recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i<carritoElementos.length; i++){
        var elemento = carritoElementos[i];
        var precioElemento = elemento.getElementsByClassName('carrito-elemento-precio')[0];
        console.log(precioElemento)
        // quitamos el simbolo peso y el punto de milesimo
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        console.log(precio)
        var cantidadElemento = elemento.getElementsByClassName('carrito-elemento-cantidad')[0];
        var cantidad = cantidadElemento.value;
        console.log(cantidad);
        total = total + (precio * cantidad);
    }

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total.toLocaleString("es")+ '.00';
}

/**
  * La función oculta el carrito de compras si no tiene artículos.
  */
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-elementos')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var elementos =document.getElementsByClassName('contenedor-elementos')[0];
        elementos.style.width = '100%';
    }
}

// Aumentar +1 cantidad de elemento
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-elemento-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName('carrito-elemento-cantidad')[0].value = cantidadActual;

    // Actualizar el Total
    actualizarTotalCarrito();
}
// Restar -1 cantidad de elemento
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName('carrito-elemento-cantidad')[0].value;
    console.log(cantidadActual);
    cantidadActual--;

    //Que no sea menor a 1
    if(cantidadActual >=1){
        selector.getElementsByClassName('carrito-elemento-cantidad')[0].value = cantidadActual;
        // Actualizar el Total
        actualizarTotalCarrito();
    }

}

function agregarAlCarrito(event){
    var button = event.target;
    var elemento = button.parentElement;
    var nombre = elemento.getElementsByClassName('Nombre-elemento')[0].innerText;
    var precio = elemento.getElementsByClassName('precio-elemento')[0].innerText;
    var imagen = elemento.getElementsByClassName('imagen-elemento')[0].src;
    console.log(imagen);
    
    // Agregamos el elemento al carrito
    agregarElementoAlCarrito(nombre,precio,imagen);

    // Hacer visible el carrito para agregar por primera vez
    hacerVisibleCarrito();

}

function agregarElementoAlCarrito(nombre,precio,imagen){
    var elemento = document.createElement('div');
    elemento.classList.add='elemento';
    var elementosCarrito = document.getElementsByClassName('carrito-elementos')[0];

    // Comprobar que el elemento ya se encuentra en el carrito
    var nombreElementosCarrito = elementosCarrito.getElementsByClassName('carrito-elemento-nombre');
    for(var i=0; i<nombreElementosCarrito.length;i++){
        if(nombreElementosCarrito[i].innerText==nombre){
            alert("El producto ya se encuentra en el carrito");
            return;
        }
    }
    var elementosCarritoContenido = `
    <div class="carrito-elemento">
        <img src="${imagen}" alt="" width="80px">
        <div class="carrito-elemento-detalles">
            <span class="carrito-elemento-nombre">${nombre}</span>
            <div class="selector-cantidad">
                <i class="fa-solid fa-minus restar-cantidad"></i>
                <input type="text" value="1" class="carrito-elemento-cantidad" disabled>
                <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <span class="carrito-elemento-precio">${precio}</span>
        </div>
        <span class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
        </span>
            
    </div>
    `
    elemento.innerHTML = elementosCarritoContenido;
    elementosCarrito.append(elemento);

    // Eliminamos nuevo elemento agregado
    elemento.getElementsByClassName('btn-eliminar')[0].addEventListener('click',eliminarElementoCarrito);

    // Sumar Cantidad Elemento Nuevo 
    var botonSumarCantdad = elemento.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantdad.addEventListener('click', sumarCantidad);

    // Resar Cantidad Elemento Nuevo 
    var botonRestarCantdad = elemento.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantdad.addEventListener('click', restarCantidad);
}

/**
  * La función borra todos los artículos del carrito de compras y los oculta mientras muestra un agradecimiento
  * mensaje.
  */
function pagarClicked(){
    alert("Gracias por su compra");
    // Borramos todos los elementos del carrito

    var carritoElementos = document.getElementsByClassName('carrito-elementos')[0];
    while(carritoElementos.hasChildNodes()){
        carritoElementos.removeChild(carritoElementos.firstChild);
    }
    actualizarTotalCarrito();
    // Ocultamos el carrito
    ocultarCarrito();

}

/**
  * La función hace que el carrito de compras sea visible ajustando su margen, opacidad y el ancho de la
  * elementos contenedores.
  */
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity= '1';

    var elementos = document.getElementsByClassName('contenedor-elementos')[0];
    elementos.style.width = '60%';
}