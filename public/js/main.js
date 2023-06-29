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
let contenedorDermaglos = document.getElementById('cardDermaglos');
const carro = [];
let tablaBody = document.getElementById('tablabody');
let contenedorProds = document.getElementById('misprods');



// Funcion para filtrar por precio
function filtrarPrecio(precio){

    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados; 

}

// let precioMaximo = parseFloat(prompt('Ingresa el precio maximo a abonar. Ponga 0 para salir: '));

// while (precioMaximo != 0){
//         if (isNaN(precioMaximo) || precioMaximo < 0){
//             alert('Ingrese un numero valido');
//         }else{
//             const prodsFiltrados = filtrarPrecio(precioMaximo);
//             console.table(prodsFiltrados);
//             renderizarProductos(prodsFiltrados)
//         }
//         precioMaximo = parseFloat(prompt('Ingresa el precio maximo a abonar. Ponga 0 para salir: '));
// }

function renderizarProductos(listaProds) {
    for (const prod of listaProds) {
        contenedorDermaglos.innerHTML+=`
       
            <div class="block border shadow-lg rounded-lg bg-white dark:bg-neutral-700 w-60 h-auto m-4">
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
            const prodACarro = dermaglos.find((producto) => producto.id == boton.id);
            agregarACarrito(prodACarro);
        })
    }
}

renderizarProductos(dermaglos);

function agregarACarrito(producto) {
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td class="px-24 py-2">${producto.id}</td>
            <td class="px-24 py-2">${producto.nombre}</td>
            <td class="px-24 py-2">${producto.precio}</td>
        </tr>       
    `;

        let total = carro.reduce((acumulador,prod)=> acumulador + prod.precio,0);
        console.log(total);
        document.getElementById('total').innerText = `Total a pagar: $ ${total}`;
        localStorage.setItem('carro',JSON.stringify(carro));
}




























// let contenedorFragancias = document.getElementById('cardFragancias');

// function renderizarProductos(listaProds) {
//     for (const prod of listaProds) {
//         contenedorFragancias.innerHTML+=`
//         <div class="block border shadow-lg rounded-lg bg-white dark:bg-neutral-700 w-60 m-4">
//         <a href="#!">
//             <img
//             class="rounded-t-lg h-48 w-48"
//             src= ${prod.foto}
//             alt="" />
//         </a>
//         <div class="p-6 h-32 bg-gray-300 items-center">
//             <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//             ${prod.nombre}
//             </p>
//             <h5
//             class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//             $ ${prod.precio}
//             </h5>
//             <button
//             type="button"
//             class="bg-blue-900 w-44 h-8 text-center inline-block rounded bg-primary px-6 pb-8 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//             data-te-ripple-init
//             data-te-ripple-color="light">
//             Agregar al carrito
//             </button>
//         </div>
//     </div>
//         `;
//     }
// }

// let contenedorElectroSalud = document.getElementById('cardElectroSalud');

// function renderizarProductos(listaProds) {
//     for (const prod of listaProds) {
//         contenedorElectroSalud.innerHTML+=`
//         <div class="block border shadow-lg rounded-lg bg-white dark:bg-neutral-700 w-60 m-4">
//         <a href="#!">
//             <img
//             class="rounded-t-lg h-48 w-48"
//             src= ${prod.foto}
//             alt="" />
//         </a>
//         <div class="p-6 bg-gray-300 items-center">
//             <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//             ${prod.nombre}
//             </p>
//             <h5
//             class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//             $ ${prod.precio}
//             </h5>
//             <button
//             type="button"
//             class="bg-blue-900 w-44 h-8 text-center inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//             data-te-ripple-init
//             data-te-ripple-color="light">
//             Agregar al carrito
//             </button>
//         </div>
//     </div>
//         `;
//     }
// }

// let contenedorAveno = document.getElementById('cardAveno');

// function renderizarProductos(listaProds) {
//     for (const prod of listaProds) {
//         contenedorAveno.innerHTML+=`
//         <div class="block border shadow-lg rounded-lg bg-white dark:bg-neutral-700 w-60 m-4">
//         <a href="#!">
//             <img
//             class="rounded-t-lg h-48 w-48"
//             src= ${prod.foto}
//             alt="" />
//         </a>
//         <div class="p-6 bg-gray-300 items-center">
//             <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//             ${prod.nombre}
//             </p>
//             <h5
//             class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//             $ ${prod.precio}
//             </h5>
//             <button
//             type="button"
//             class="bg-blue-900 w-44 h-8 text-center inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//             data-te-ripple-init
//             data-te-ripple-color="light">
//             Agregar al carrito
//             </button>
//         </div>
//     </div>
//         `;
//     }
// }

// renderizarProductos(fragancias_productos);
// renderizarProductos(electro_salud_productos);
// renderizarProductos(aveno_productos);
































