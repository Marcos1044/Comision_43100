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

logueo();

let numeroProducto = prompt("Ingresar el numero de producto (Ingresa 0 para salir)"); 

while (numeroProducto != 0) {
    
    switch (numeroProducto) {
        case  "1":
                alert("Acaba de agregar el producto 1");
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