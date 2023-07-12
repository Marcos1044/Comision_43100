// Carrusel de publicidad
const carrusel = document.getElementById('carrusel');
const imagenesContenedor = document.getElementById('imagenesContenedor');
const anteriorBoton = document.getElementById('anteriorBoton');
const siguienteBoton = document.getElementById('siguienteBoton');

let indice = 0;

function mostrarImagenActual() {
    const imagenes = imagenesContenedor.getElementsByTagName('img');
    

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }
    
    imagenes[indice].style.display = 'block';
}

function irImagenAnterior() {
    if (indice > 0) {
        indice--;
    } else {
        indice = imagenesContenedor.getElementsByTagName('img').length - 1;
    }
    mostrarImagenActual();
}

function irImagenSiguiente() {
    if (indice < imagenesContenedor.getElementsByTagName('img').length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    mostrarImagenActual();
}

anteriorBoton.addEventListener('click', irImagenAnterior);
siguienteBoton.addEventListener('click', irImagenSiguiente);

function moverImagendAutomaticamente() {
    irImagenSiguiente();
}

const duracionDeImagen = 4000; 

const tiempo = setInterval(moverImagendAutomaticamente, duracionDeImagen);

mostrarImagenActual();

// Carrusel de publicidad Terminacion.

// console.table(productos);
let productos;
obtenerJsonProds();
let contenedorDermaglos = document.getElementById('cardDermaglos');
const carro = JSON.parse(localStorage.getItem('carro')) || [];
let tablaBody = document.getElementById('tablabody');
let contenedorProds = document.getElementById('misprods');
document.getElementById('finalizar').addEventListener('click', finalizarCompra);
document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);





//tratamiento si encontramos algo en un carrito abandonado
(carro.length != 0) && dibujarTabla();

//dibujo tabla si hay algo en el storage al comienzo
function dibujarTabla(){
    for(const producto of carro){
        document.getElementById("tablabody").innerHTML += `
        <tr>
            <td class="px-24 py-2">${producto.id}</td>
            <td class="px-24 py-2">${producto.nombre}</td>
            <td class="px-24 py-2">$${producto.precio}</td>
            <td class="px-24 py-2"><img class=" h-28 w-28"src= "${producto.foto}" alt="" /></td>
            <td class="px-24 py-2">
            <button class=" bg-red-600 text-white" data-id="${producto.id}" onclick="eliminarDelCarrito(event)">Eliminar</button>
            </td>
        </tr>   
    `;
    }
    totalCarrito = carro.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: "+totalCarrito;
    
}

// Funcion para filtrar por precio
function filtrarPrecio(precio){

    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados; 

}

function renderizarProductos(listaProds) {
    for (const prod of listaProds) {
        contenedorDermaglos.innerHTML+=`
       
            <div class="block border shadow-lg rounded-lg bg-white dark:bg-neutral-700 h-auto w-72 m-4">
                <a href="#!">
                    <img
                    class="rounded-t-lg h-48 w-48"
                    src= ${prod.foto}
                    alt="" />
                </a>
                <div class="p-6 bg-gray-300 flex justify-center flex-col flex-wrap text-center">
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    ${prod.nombre}
                    </p>
                    <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    $ ${prod.precio}
                    </h5>
                    <button
                    id=${prod.id}
                    type="button"
                    class="compra bg-blue-900 w-44 h-8 text-center inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Agregar al carrito
                    </button>
                </div>
            </div>
       
        `;
    }

    let botones = document.getElementsByClassName('compra');
    for(const boton of botones){
        boton.addEventListener('click',()=>{
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            agregarACarrito(prodACarro);
        })
    }

    let botonesEliminar = document.getElementsByClassName('eliminar');
    for (const boton of botonesEliminar) {
            boton.addEventListener('click', eliminarDelCarrito);
    }

}



// renderizarProductos(dermaglos);


function agregarACarrito(producto) {
    carro.push(producto);
    console.table(carro);

    Swal.fire(
        'Felicitaciones!',
        `Agregaste ${producto.nombre} al carrito`,
        'success'
      )

    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td class="px-24 py-2">${producto.id}</td>
            <td class="px-24 py-2">${producto.nombre}</td>
            <td class="px-24 py-2">$${producto.precio}</td>
            <td class="px-24 py-2"><img class=" h-28 w-28"src= "${producto.foto}" alt="" /></td>
            <td class="px-24 py-2">
            <button class="bg-red-600 font-bold rounded-lg w-20" data-id="${producto.id}" onclick="eliminarDelCarrito(event)">Eliminar</button>
            </td>
        </tr>       
    `;

        let total = carro.reduce((acumulador,prod)=> acumulador + prod.precio,0);
        console.log(total);
        document.getElementById('total').innerText = `Total a pagar: $ ${total}`;
        localStorage.setItem('carro',JSON.stringify(carro));
}

function eliminarDelCarrito(event) {
    const productoId = event.target.getAttribute('data-id');
    const indice = carro.findIndex((producto) => producto.id == productoId);
    if (indice !== -1) {
        carro.splice(indice, 1);
        event.target.parentElement.parentElement.remove();
        let total = carro.reduce((acumulador, prod) => acumulador + prod.precio, 0);
        document.getElementById('total').innerText = `Total a pagar: $ ${total}`;
        localStorage.setItem('carro', JSON.stringify(carro));
    }
}

function finalizarCompra() {
    Swal.fire(
        '¡Compra finalizada!',
        'Gracias por tu compra.',
        'success'
    );

    carro.length = 0;
    tablaBody.innerHTML = '';
    document.getElementById('total').innerText = 'Total a pagar: $ 0';
    localStorage.removeItem('carro');
}


function vaciarCarrito() {
  carro.length = 0;
  tablaBody.innerHTML = '';
  document.getElementById('total').innerText = 'Total a pagar: $ 0';
  localStorage.removeItem('carro');

  Swal.fire(
    'Vaciando carrito',
    'El carrito ha sido vaciado correctamente',
    'success'
  );
}

//JSON
async function obtenerJsonProds() {
    const URLJSON = 'dermaglos.json'; 
    const respuesta = await fetch(URLJSON);
    const data = await respuesta.json();
    productos = data;
    renderizarProductos(productos);
}



























