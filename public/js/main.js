function logueo() {

    let usuario = prompt("Ingrese su nombre de usuario");
    let contraseña = prompt("Ingrese la contraseña");

    if (usuario == "") {
    alert ("Debe ingresar un usuario");
    }else if (contraseña == "") {
    alert ("Debe ingresar la contraseña");
    }else {
        alert("Puede ingresar");
    }
}
function agregarProducto() {

    let numeroProducto = prompt("Ingresar el numero de producto (Ingresa 0 para salir)");

    while (numeroProducto != 0) {

     switch (numeroProducto) {
          case  "1":
                 alert("Acabas de agregar el producto 1");
                break;

            case  "2":
                alert("Acaba de agregar el producto 2");
                break;

         case  "3":
                alert("Acaba de agregar el producto 3");
                break;

         case  "4":
              alert("Acaba de agregar el producto 4");
                break;

            case  "5":
                alert("Acaba de agregar el producto 5");
                break;

            default:
                    alert("Salir");
                break;
        }

        numeroProducto = prompt("el numero de producto (Ingresa 0 para salir)");

    }
}



function filtrarPrecio(precio) {

    const filtrados = productos.filter((prod)=>prod.precio <= precio);
    return filtrados; 

}

function precioMax() {
    while (precioMax != 0)  {
        if (isNaN(precioMax) || (precioMax < 0)) {
            alert('Ingrese un numero valido');
        }else {
            const prodsFiltrados = filtrarPrecio(precioMax);
            console.table(prodsFiltrados);
        }
        let precioMaximo = parseFloat(prompt('Ingresa el precio maximo a abonar. Ponga 0 para salir: ')) 
    }
}


//Probando Funcion sumar iva automaticamente
//  function sumaIva(precio) {
//            const precioIva = productos.precio * 1.21;
//             return precioIva;            
// }




logueo();
// let precioMaximo = parseFloat(prompt('Ingresa el precio maximo a abonar. Ponga 0 para salir: '))
precioMax();
agregarProducto();
productos.push( {id: 8, foto: "foto", nombre: "Crema Facial", precio: "5.000,00"})


