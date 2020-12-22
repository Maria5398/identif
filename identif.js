let user = ''; //variables donde guardar el dato introducido
let password = '';
function identificacion(user,password){ 
    switch(true){ //utilizamos switch para de esta forma crear opciones para cada caso para identificar al usuario correctmente 
        case (user == 'admin') && (password == '1234'): // cuando ambos son correctos
        console.log("Bienvenido a nuestro sitio");
        break;
    case (user == 'admin') && (password != '1234'): //en caso de que la contraseña sea incorrecta
        console.log("Contraseña incorrecta");
        break;
    case (user != 'admin') && (password == '1234'): // en caso de que el nombre de usuario sea incorrecto
        console.log("Usuario incorrecto");
        break;
    default:
        console.log("Datos invalidos"); // en caso de que ninguno sea correcto  
    }
}
identificacion('admin', '1254'); // introducir datos de usuario y contraseña 
