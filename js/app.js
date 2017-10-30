//Creando un prompt que pida al usuario una palabra a cifrar.
var word = prompt('¿Qué palabra quieres cifrar?');
//Cambiando el resultado del prompt para que todas las letras sean mayúsculas.
var str = word.toUpperCase();

function cipher(str) {
    var encryptedString = '';
    // Aplicando un for que nos ayude a recorrer todo la palabra.
    for (var i = 0; i < str.length; i++) {
        // Emplear charCodeAt() para obtener el número de cada carácter en la tabla Ascii.
        var number = str[i].charCodeAt();
        /* Usando condicional if para empezar a encriptar, aquí se usa del número 65 al 83,
        para que sólo se utilice el abcedario.*/
        if (number >= 65 && number <= 83) {
            encryptedString += String.fromCharCode(number + 7);
        /* Aquí aplicamos un else con los números del 83 al 90 para que las letras restantes
        del abecedario sigan recorriéndolo y no tome otros caracteres de Ascii.*/
        } else if (number >= 83 && number <= 90) {
            encryptedString += String.fromCharCode(number - 19);
        }
    }
    return encryptedString;
}

console.log(cipher(str));
