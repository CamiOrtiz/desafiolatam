//EJERCICIO 4.4 //
numero = 7;
function adivinaNumero (numero){
    if (numero == 7){
        return "Adivinaste el número secreto";
    } else if (numero == 6) {
        return "Casi, pero no es el número secreto";
    } else {
        return "Estás equivocado, el número secreto no es " + numero;
    }
};

/* Escribe tu código aquí */


/* Escribe tu código aquí */
function descuentos (cantidad, hora){
    if (hora == "Mañana") {
        if (cantidad >= 10){
            return ("Descuento del 25% en la compra matutina");        
        } else if (cantidad >= 5 && cantidad < 10) {
            return ("Descuento del 15% en la compra matutina");
                     
        } else {
            return ("Sin descuento en la compra matutina")
        }
    } else if (hora == "Noche") {
        if (cantidad >= 10){
            return ("Descuento del 15% en la compra nocturna");        
        } else if (cantidad >= 5 && cantidad < 10) {
            return ("Descuento del 5% en la compra nocturna");
                         
        } else if (cantidad >= 3 && cantidad < 5) {
            return ("Descuento del 3% en la compra nocturna");

        } else {
            return ("Sin descuento en la compra nocturna")
            
        }
    } else {
        return ("Descuento no reconocido")
    };
};


clima = "soleado"; 
horaDelDia = "tarde";

if (clima == "soleado") {
    if (horaDelDia == "mañana") {
        console.log("Es un buen momento para salir a correr.");
    } else if (horaDelDia == "tarde") {
        console.log("Perfecto para visitar un parque.")
    } else {
        console.log("Hora del día no reconocida.");
    }
} else if (clima == "lluvioso") {
    if (horaDelDia == "mañana") {
        console.log("Buen momento para leer un libro.");
    } else {
        console.log("Hora del día no reconocida.");
    }
} else {
    console.log("Clima no reconocido.");
}


function descuentos(cantidad, hora){
    if(hora == "Mañana"){
        if(cantidad >= 10){
            return "Descuento del 25% en la compra matutina"
        }else if(cantidad >= 5 && cantidad < 10){
            return "Descuento del 15% en la compra matutina"
        }else{
            return "Sin descuento en la compra matutina"
        }
    } else if(hora == "Noche"){
        if(cantidad >= 10){
          return "Descuento del 15% en la compra nocturna"
        }else if(cantidad >= 5 && cantidad < 10){
          return "Descuento del 5% en la compra nocturna"
        }else if(cantidad >= 3 && cantidad < 5){
          return "Descuento del 3% en la compra nocturna"
        }else{
          return "Sin descuento en la compra nocturna"
        }
    }
};

function fizzBuzz(numero){
    if (numero % 3 == 0 && numero % 5 == 0){
        return "FizzBuzz"
    } else if (numero % 5 == 0){
        return "Fizz"
    }else if (numero % 5 == 0){
        return "Buzz"
    }else{
        return numero;
    }};

    codigo = "1234"
/* Escribe tu código aquí */

    mensaje = codigo == "1234" ? "Código Incorrecto" : "Código correcto"
    console.log(mensaje)


    edad = 18
    mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"


    ///

    numero = 2
    function atencionAlCliente(numero){
        switch (numero){
            case 1:
                console.log ("Contactar a un vendedor");
                break;
            case 2:
                console.log ("Esperar a ser atentido");
                break;
            case 3:
                console.log ("Contactar a soporte");
                break;
            default:
               console.log ("Opción inválida");            
        }};


        function mayorQue(a, b){
            if (a > b){
                return "El primer número es mayor que el segundo"
            } else if (b > a){
                return "El segundo número es mayor que el primero"
            } else {
                return "Ambos números son iguales"
            }  
        };
        
//EJERCICIO: Crea una función llamada mix que tome 2 parámetros, palabra1 y palabra2, y que retorne una mezcla de ambas palabras en donde la mitad de la primera palabra se concatena con la segunda mitad de la segunda palabra. Para simplificar, asume que ambas palabras tienen una longitud par. El resultado de la mezcla debe ser una sola palabra en minúsculas.//

        function mix(palabra1,palabra2){
            const mitad1 = (palabra1.length / 2);
            const mitad2 = (palabra2.length / 2);
        
            const primeraMitad = palabra1.substring(0,mitad1);
            const segundaMitad = palabra2.substring(mitad2);
        
            return (primeraMitad + segundaMitad).toLowerCase();
        };

//EJERCICIO: Crea una función llamada primerosCaracteresMayusculas que reciba un párametro texto y devuelva los primeros 3 caracteres del texto en mayúsculas. Si el texto tiene menos de 3 caracteres, debe retornar el mensaje error//

function primerosCaracteresMayusculas(texto){
    if (texto.length < 3){
        return "error"
    }else{
        return texto.substring(0, 3).toUpperCase();
    }  
};

function ultimoYPrimero(arreglo = []){
    return (arreglo[arreglo.length -1] + [arreglo.length, [0]])
};


function modificarPorElMayor(arreglo = [ 3, 6], numero1, numero2){
    arreglo[0] = numero2
    return arreglo;
    
};

function borrarAlFinal( arreglo = []){
    arreglo.splice(4, 1)
};


function rotarALaIzquierda(arreglo) {
    arreglo.push(arreglo.splice(0, 1)[0]);
    return arreglo;
};

function izqDerecha(arreglo, num){
    if(num < 100){
        arreglo.push(5)
    }else{
        arreglo.push(arreglo.splice(0, 1)[0])
    }
    return arreglo;

};




//EJERCICIO: Crea una función llamada izqDerecha que reciba un parámetro llamado arreglo y otro llamado num.Si num es menor que 100, el valor se ingresará por la derecha del arreglo, como normalmente se ingresan todos los valores.Si el valor es mayor o igual a 100, el valor se ingresará por la izquierda del arreglo.La función debe retornar el arreglo modificado.//

function izqDerecha(arreglo, num) {
    if (num < 100) {
        arreglo.push(num);
    } else if (num >= 100) {
        arreglo.splice(0, 0, num)
    }
    return arreglo;
};

//crea una función llamada rotarALaDerecha que reciba un arreglo y retorne el arreglo rotado a la derecha.//
function rotarALaDerecha(arreglo){
    nuevoArreglo = arreglo[arreglo.length -1];
    arreglo.splice(arreglo.length -1,1);
    arreglo.unshift(nuevoArreglo);
    
    return arreglo;
};




contador = 1
function contarHasta(numero){
    while (contador <= numero){
        console.log(contador)
        contador = contador ++
    }    
};

function sumarHasta(numero){
    contador = 1
    suma = 0
    while(contador <= numero){
        suma = suma + contador
        contador = contador + 1
        return console.log(suma)
    }
};

function sumarDesdeHasta(numero1, numero2) {
    let suma = 0;
    while (numero1 <= numero2) {
        suma += numero1; 
        numero1++; 
    }
    return suma; 
};


//Crea una función llamada productoria que reciba un número como parámetro y retorne la productoria de los números del 1 al número ingresado//
function productoria(numero) {
    let contador = 1;
    let resultado = 1; 
    while (contador <= numero) {
        resultado *= contador; 
        contador++; 
    }
    return resultado; 
}



nombres = ["Juan", "Pedro", "Ana", "Luis"]
for (indice = 0; indice < nombres.length; indice = indice + 1) {
  console.log(nombres[indice])
}


function mostrar(arreglo=[]){
    for(i=0; i < arreglo.length; i++){
        if (arreglo.length <= 3){
            return arreglo
        }
    }
};

//Crea una función llamada mostrarDatosAlReves que reciba un arreglo y que muestre en consola los datos del arreglo en orden inverso.//
function mostrarDatosAlReves(arreglo=[]){
    for(i= arreglo.length -1; i >= 0; i--){
        console.log(arreglo[i])
    }
};

function mostrarDatoEIndice(datos) {
    for (i = 0; i < datos.length; i = i + 1) { 
      console.log(datos[i] + " en la posición " + i) 
    }
  }

///Crea una función llamada mostrarPares que reciba un arreglo y muestre los números pares del arreglo recibido.//
  function mostrarPares(arreglo=[]){
    for(i= 0; i < arreglo.length; i ++){
        if (arreglo[i] % 2 == 0){
            console.log(arreglo[i])

        }
    } 
};

//Crea una función llamada mostrarLasPalabrasQueEmpiezanConA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a".//
function mostrarLasPalabrasQueEmpiezanConA(arreglo=[]){
    for(i=0; i < arreglo.length; i ++){
        if (arreglo[i].startsWith("a") ){
            console.log (arreglo[i])
        }
    }

};

//Crea una función llamada palabras que reciba un arreglo de palabras y una letra. El programa debe mostrar en consola las palabras que empiecen con la letra recibida.//

function palabras(arreglo=[], l){
    for(i=0; i < arreglo.length; i++){
        if(arreglo[i].startsWith(l)){
            console.log(arreglo[i])
        }

    }

};

//Crea una función llamada mostrarCada2 que reciba un arreglo y que muestre una de cada dos palabras.//
function mostrarCada2(arreglo=[]){
    for(i=0; i< arreglo.length; i = i + 2){
        console.log(arreglo[i])
    }

};

//Crea la función paresQueEmpiezenconA que reciba un arreglo de palabras y muestre las palabras que empiezan con la letra "a" siempre y cuando tengan un índice par en la posición del arreglo.Para motivos del ejercicio el cero es considerado un número par.//
function paresQueEmpiezenconA(arreglo=[]){
    for(i=0; i < arreglo.length; i ++){
        if (i % 2 == 0 && arreglo[i].startsWith("a")){
            console.log(arreglo[i])
        }
    }
};


//Crea una función llamada sumarDatos que reciba un arreglo y retorne la suma de los elementos del arreglo recibido.//
function sumarDatos(arreglo=[]){
    let suma=0;
    for(i= 0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    return(suma)
};

//Crea una función llamada promediarDatos que reciba un arreglo y retorne el promedio de los elementos del arreglo recibido.//
suma=0
function promediarDatos(arreglo=[]){
    for(i=0; i < arreglo.length; i++){
        suma += arreglo[i]
    }
    return(suma / arreglo.length)
};

//Crea una función llamada contarPares que reciba un arreglo y retorne la cantidad de números pares que contiene el arreglo recibido.//
function contarPares(arreglo=[]){
    pares = 0
    for(i=0; i < arreglo.length; i ++){
        if ( arreglo[i] % 2 == 0){
            pares++;            
        }
    }
    return pares;
};


//Crea una función llamada contarImpares que reciba un arreglo y retorne la cantidad de números impares que contiene el arreglo recibido.//

function contarImpares(arreglo=[]){
    impares = 0
    for(i=0; i < arreglo.length; i ++){
        if ( arreglo[i] % 2 !== 0){
            impares++;            
        }
    }
    return impares;
};


//Dado un arreglo de números, crea una función llamada sumarPares que reciba un arreglo y retorne la suma de los números pares que contiene el arreglo recibido.//
function sumarPares(arreglo=[]){
    suma = 0
    for(i=0; i < arreglo.length; i ++){
        if (arreglo[i] % 2 == 0){
            suma += arreglo[i]            
        }
    }
    return suma;
};

//Crea una función llamada juntarPalabras que reciba un arreglo de palabras y retorne un string con todas las palabras concatenadas con un espacio entre cada palabra. Al final del string no debe haber un espacio.//
function juntarPalabras(arreglo=[]){
    palabras= ""
    for(i = 0; i < arreglo.length; i ++){
        palabras = palabras + " " + arreglo[i];
        
    }
    return palabras;    
};

//En el siguiente arreglo hay un mensaje escondido utilizando solo la primera letra de cada elemento del arreglo. Encuentra el mensaje escondido. mesajeOculto(["Sol", "Elefante", "Casa", "Rana", "Estrella", "Tigre", "Oso"]) // "SECRETO" ---> Tip: Recuerda la función substring para obtener una subcadena de un string. Tip 2: De la misma forma que sumas números, puedes concatenar strings. Tip 3: Necesitas inicializar un string vacío para ir concatenando las letras.Crea una función llamada mensajeOculto que reciba un arreglo y retorne un texto con el mensaje escondido en el arreglo utilizando solo la primera letra de cada elemento del arreglo// 

function mensajeOculto(arreglo=[]){
    mensaje= ""
    for(i=0; i < arreglo.length; i++){
        mensaje = mensaje + arreglo[i].substring(0,1)
    }
    return mensaje;
    
};
//Crea una función llamada mensajeOculto que reciba un arreglo y retorne un texto con el mensaje escondido en el arreglo utilizando solo la primera letra de cada elemento del arreglo.
function mensajeOculto(arreglo=[]){
    mensaje= ""
    for(i=0; i < arreglo.length; i++){        
        if(i % 2== 0){  
            mensaje = mensaje + arreglo[i].substring(0,1)        

        }        
    }
    return mensaje    
    
};

//Crea una función llamada sumarDatos que reciba un arreglo y muestre en consola la suma de los elementos del arreglo recibido. Si hay algún elemento que no sea un número, debes transformarlo antes de sumarlo.//

function sumarDatos(arreglo=[]){
    suma=0;
    for(i=0; i < arreglo.length; i++){
        valor = parseFloat(arreglo[i])
        suma += valor;
    } 
    console.log(suma)
};
//parseFloat(arreglo[i]) intenta convertir el elemento del arreglo a un número. Si la conversión falla y retorna NaN, el operador || se asegura de que valor sea 0.//

//Crea una función llamada promediarDatos que reciba un arreglo y muestre en consola el promedio de los elementos del arreglo recibido. Dentro del arreglo pueden haber números y cadenas de texto que representen números.//

function promediarDatos(arreglo=[]){
    let suma=0;
    for(i=0; i < arreglo.length; i++){
        let valor = parseFloat(arreglo[i])
        suma += valor; 
        
    }
    console.log(suma / arreglo.length)
};


//Se necesita crear un sistema de descuentos según la cantidad de productos comprados y la hora del día.Crea una función llamada descuentos que dependa de los parámetros cantidad y hora. La función debe retornar el descuento, que corresponderá al mensaje entregado para cada caso. Escribe un conjunto de "if" anidados para determinar la categoría de descuento basada en la cantidad de productos comprados y la hora del día: "Mañana" y cantidad mayor o igual a 10: Descuento del 25% en la compra matutina. "Mañana" y cantidad mayor o igual a 5 pero menor que 10: Descuento del 15% en la compra matutina. "Mañana" y cantidad menor que 3: Sin descuento en la compra matutina."Noche" y cantidad mayor o igual a 10: Descuento del 15% en la compra nocturna. "Noche" y cantidad mayor o igual a 5 pero menor que 10: Descuento del 5% en la compra nocturna. "Noche" y cantidad mayor o igual a 3 pero menor que 5: Descuento del 3% en la compra nocturna. "Noche" y cantidad menor que 3: Sin descuento en la compra nocturna. No muestres los mensajes con console.log, solo retorna el mensaje desde la función. Ten cuidado con las mayúsculas y minúsculas de los mensajes y la ortografía. Copia los textos de cada tipo de descuento tal como se muestran en el enunciado para evitar errores.


function descuentos(cantidad, hora){
    if (hora== "Mañana") {
        if (cantidad >= 10) {
            return("Descuento del 25% en la compra matutina.");
        } else if (cantidad >= 5 && cantidad < 10) {
            return ("Descuento del 15% en la compra matutina.")
        } else {
            return("Sin descuento en la compra matutina.");
        }
    } else if (hora == "Noche") {
        if (cantidad >= 10) {
            return("Descuento del 15% en la compra nocturna.");
        } else if (cantidad >= 5) {
            return("Descuento del 5% en la compra nocturna.");
        } else if (cantidad >=3 && cantidad <= 5){
            return("Descuento del 3% en la compra nocturna.")
            
        } else {
            return("Sin descuento en la compra nocturna.");
        }
    } else {
        console.log("Sin descuento ");
    }

};

function revisarAntesDeSalir(llaves, celular){
    if(llaves == true && celular == true){
        return("Todo listo, puedes salir de casa")
    }else if(llaves == true && celular == false){
        return("Te falta el celular")
    }else if(llaves == false && celular == true){
        return("Te falta las llaves")
    }else{
        return("No hay nada")
    }
        
};


function juntarArreglos(arreglo1=[], arreglo2=[]){
    let arreglos1 = arreglo1.slice(1);
    let arreglos2 = arreglo2.slice(1);
    
    let arreglo3 = arreglos1.concat(arreglos2);
    return (arreglo3);
};

//Crea una función que reciba 3 valores arr1, valor y arr2, donde arr1 y arr2 serán arreglos y valor un número, la función debe retornar un nuevo arreglo juntando los elementos de arr1, el valor y los elementos de arr2.//

juntarElementos([1, 2, 3], 4, [5, 6, 7]) // [1, 2, 3, 4, 5, 6, 7]

function juntarElementos2(arr1, valor, arr2){
    let arr3 = arr1.concat(arr2);
    return arr3.push(valor)
};


function juntarElementos(arr1, valor, arr2) {        
    let arr3 = arr1.concat(arr2);
    
    arr3.push(valor);
    
    
    return arr3;
};


//Crea una función que reciba 3 valores arr1, valor y arr2, donde arr1 y arr2 serán arreglos y valor un número, la función debe retornar un nuevo arreglo juntando los elementos de arr1, el valor y los elementos de arr2.//
function juntarElementos(arr1, valor, arr2) {       
    let arr3 = arr1.concat(valor, arr2);         
    
    return(arr3);
};

//Crea una función llamada sumarDatos que reciba un string, lo convierta en un arreglo y luego sume los elementos del arreglo. La función debe mostrar en consola la suma de los elementos.//

function sumarDatos(texto = "palabras separadas"){
    suma = 0
    arreglo = texto.split(",");

    for( i = 0; i < arreglo.length; i++){
        num = parseFloat(arreglo[i]) || 0;
        suma += num;       

    }
    console.log(suma);
};

//Crea la función contadorDeNaN que reciba un string como parámetro. La función debe convertir el string recibido en un arreglo y luego, contar cuántos elementos del arreglo son NaN. La función debe mostrar en consola el número de elementos NaN.//

function contadorDeNaN(palabra){
    arreglo = palabra.split(",");
    contador = 0;
    for (i = 0; i < arreglo.length; i++){
        num = Number(arreglo[i]);
        if (isNaN(num)) {
            contador++;

    }
}    
    console.log(contador)

};


//Crea una función llamada retornarPrimerNumero que reciba un arreglo y muestre en consola el primer elemento que sea un número. El número puede venir en formato de texto o en formato de número.//

function retornarPrimerNumero(arreglo=[]){
    for(i=0; i < arreglo.length; i++){
        if(!isNaN(arreglo[i])){
            console.log(arreglo[i]);break
        }        
    }

    };


//Se tienen datos guardados en un arreglo que tienen el siguiente formato:["25 años", "30 años", "40 años", "50 años", "60 años", "70 años", "80 años", "90 años", "100 años"] Todos los datos están en el formato de "n años". Se pide crear una función llamada sumarAños que reciba un arreglo de strings y que muestre en consola la suma de todos los años en el arreglo.//

function sumarAños(arreglo =[" "]){
    suma= 0;
    for( i = 0; i < arreglo.length; i++){
        num = parseInt(arreglo[i]) || 0;
        suma += num;       

    }
    console.log(suma)
};

//Se te ha proporcionado un arreglo con los pesos de varios paquetes en kilogramos, algunos de los cuales incluyen valores decimales. El costo por cada kilogramo entero es de $1.00. Si pesa menos de un kilogramo, el costo es de $0.Crea una función llamada calcularCostoTotal que reciba un arreglo de pesos en kilogramos y muestre en consola el costo total de todos los paquetes.//

function calcularCostoTotal(pesos = []){
    suma = 0;
    for(i = 0; i < pesos.length; i++){
        num= parseInt(pesos[i]) || 0;
        suma += num

    }
    console.log(suma)

};

//Los expertos del negocio se han dado cuenta que las personas aprovechan que los paquetes de menos de 1 kg son gratis para enviar los paquetes más pesados en partes. Por esta razón, han decidido cambiar la forma de cobrar: Por un paquete de menos de 1kg se cobrará $1.00.Por uno de 1kg o más (hasta menos de 2 kg) se cobrará $2.00. Por uno de 2kg o más (hasta menos de 3kg) se cobrará $3.00.Por uno de 3kg o más (hasta menos de 4kg) se cobrará $4.00.Y así se debe repetir este patrón sucesivamente.Crea una función llamada calcularCostoTotal que reciba un arreglo de pesos en kilogramos y muestre en consola el costo total de todos los paquetes.

function calcularCostoTotal(pesos=[]){
    total = 0;
    for(i = 0; i < pesos.length; i++){
    // Elimina "kg" y convierte la parte numérica a un número de punto flotante:
        num= parseFloat(pesos[i].replace("kg", "").trim());
         // Redondea hacia abajo a un entero:
        pesoTotal = Math.floor(num);
        // Calcula el costo basado en el peso entero
        costo = pesoTotal + 1;
        total += costo;
    }

    console.log(total)

};

//Explicaciones importantes: Usamos replace para eliminar "kg" y trim para eliminar cualquier espacio en blanco adicional. Luego, parseFloat convierte la cadena resultante en un número de punto flotante. Utilizamos Math.floor para redondear el número hacia abajo a un entero.

//Para simplificar la estructura de precios y hacerla más intuitiva para los clientes, los expertos del negocio han decidido que el costo de envío de los paquetes sea exactamente proporcional al peso registrado de cada paquete, incluyendo decimales.Nueva política de precios:El costo de envío será de $1.00 por cada kilogramo del peso del paquete, contando también las fracciones de kilogramo. Esto significa que el costo se calculará utilizando el peso exacto, sin redondear.Instrucciones:Crea una función llamada calcularCostoEnvio que acepte un arreglo de pesos de paquetes en kilogramos, y muestre en consola el costo total de envío de todos los paquetes.//


function calcularCostoEnvio(precio=[]){
    total = 0;
    for(i=0; i< precio.length; i++){
        num= parseFloat(precio[i])
        total +=num;
    }
    console.log(total)
};

//Crea una función llamada contarVerdaderos que reciba un arreglo con diversos datos y cuente cuántos de esos datos son verdaderos truthy.//

function contarVerdaderos(datos=[]){
    conteo = 0;
    for(i=0; i< datos.length; i++){
        if(datos[i]){ 
            conteo ++;                   
        }         
    }
    console.log(conteo) 
};

//Se tiene un arreglo con los notas de algunos estudiantes. Crea una función llamada agregarPunto que reciba un arreglo de notas y que retorne el arreglo original modificado, agregando 1 punto a cada nota.//

function agregarPunto(notas=[]){
    let punto = 1;
    for(let i=0; i < notas.length; i ++){
        notas[i] = notas[i] + punto;
    }
    return(notas);
};

//Se tiene un arreglo con los pesos de varios paquetes, en kilogramos. Crea la función transformarCostos que retorne el arreglo original modificado, en el cual se registren los precios de cada paquete.La función debe recibir el parámetro pesos con arreglo de pesos y el parámetro costoPorKg. El precio de cada paquete se calcula multiplicando el peso por el costo por kilogramo.//

function transformarCostos(pesos=[], costoPorKg){     
    nuevosP=[];   
    for(let i= 0; i < pesos.length; i++){
        nuevosP.push(parseFloat(pesos[i]) * costoPorKg);
    }
    return(nuevosP);

};

//Se tiene un arreglo con nombres de personas en minúsculas.Crea una función llamada capitalizarNombres que modifique el arreglo original para que los nombres empiecen con mayúscula.Retorna el arreglo.//

function capitalizarNombres(nombres){
    for(let i = 0; i < nombres.length; i++){
        nombres[i]= nombres[i].charAt(0).toUpperCase() + nombres[i].slice(1);
    }
    return nombres

};

//Crea una función llamada transformar que reciba un arreglo de números y realice las siguientes transformaciones sobre este arreglo de nombres: nombres = [" ana", "luis ", "  jose", "rosa", "julio "]. 1.Eliminar los espacios en blanco al principio y al final de cada nombre. 2.Capitalizar la primera letra de cada nombre. 3.Agregar un punto al final de cada nombre. 4.La función debe devolver el arreglo modificado.//

function transformar(nombres){
    for (let i=0; i < nombres.length; i++){     
        nombres[i] = nombres[i].trim().charAt(0).toUpperCase() + nombres[i].trim().slice(1) + '.';
    }
    return nombres
}; 


//Crea una función llamada transformar que reciba un arreglo de números y realice las siguientes transformaciones: 1.Multiplicar por 2 cada número. 2.Restarle 1 a cada número. 3.Retornar el arreglo modificado

function transformar(numeros){
    for(let i = 0; i < numeros.length; i++){
        numeros[i] = numeros[i] * 2 - 1        
    }
    return numeros
};


//Se tiene un arreglo llamado ranking con los nombres de los alumnos que participaron en una competencia: ranking = ["Camila", "Nahuel", "Lucas", "Nico", "Agustina", "Micaela", "Ezequiel", "Mariano", "Florencia", "Gonzalo"]. Debes crear una función llamada rankear que reciba el arreglo ranking y lo transforme agregando la posición del alumno en la competencia. La función debe devolver el arreglo transformado//

function rankear(ranking){
    for (let i = 0; i < ranking.length; i++){
        ranking[i]= ranking[i] + " " + (i + 1);
    }
    return ranking
};

//Crea un función llamada por2 que reciba un arreglo de números y devuelva un nuevo arreglo con cada número multiplicado por 2//

function por2(numeros){
    numerosNuevos=[]
    for(let i=0; i < numeros.length; i++){
        numerosNuevos.push(numeros [i] * 2) 
    }
    return numerosNuevos;
};

//Crea una función llamada transformarCostos que reciba un arreglo de pesos y el costo por kilogramo y devuelva un arreglo nuevo, sin modificar el anterior con los precios de cada paquete.//

function transformarCostos(pesos, costoPorKg){
    preciosNuevos=[]
    for (let i=0; i < pesos.length; i++){
        preciosNuevos.push(parseFloat(pesos[i])* costoPorKg)
    }
    return preciosNuevos
};

//Crea una función llamada filtrarMayoresA que reciba un arreglo de números y un número y que retorne un nuevo arreglo con los números mayores al número recibido.//

function filtrarMayoresA(numeros, n){
    numerosNuevos= [];
    for(let i=0; i < numeros.length; i++){
        if (n < numeros[i]){
            numerosNuevos.push(numeros[i])

        }        
    }
    return numerosNuevos

};

//Se tiene un arreglo con datos que deberían tener 8 bits, es decir, 8 caracteres en donde cada caracter puede ser 0 o 1. Ejemplo: datos = ["00010000", "00000001", "00000000", "00000010", "00000000", "00000001", "00000000", "00000010"] Crea una función que se llame filtrarDatosErrados que reciba el arreglo de datos y retorne un nuevo arreglo únicamente con las cadenas que tienen 8 caracteres.//

function filtrarDatosErrados(datos){
    datosFiltrados = [];
    for(let i=0; i < datos.length; i++){
        if (datos[i].length === 8 && /^[01]+$/.test(datos[i])){
            datosFiltrados.push(datos[i])
        }
    }
    return datosFiltrados
};

//IMPORTANTE SOBRE ESTE EJERCICIO: Condición de filtrado: datos[i].length === 8: Verifica si la cadena tiene exactamente 8 caracteres. /^[01]+$/.test(datos[i]): Utiliza una expresión regular para verificar que la cadena solo contiene los caracteres '0' o '1'.//


//Por fallas en el disco duro, algunos datos del sistema se corrompieron y por algún motivo ahora pueden empezar con 2. Modifica la función anterior llamada filtrarDatosErrados para que pueda filtrar los datos que empiecen con 2 o que tengan una mayor cantidad de caracteres que 8. La función debe retornar un arreglo que contenga únicamente los datos que no estén errados.//

function filtrarDatosErrados(datos){
    datosFiltrados = [];
    for(let i=0; i < datos.length; i++){
        if (datos[i].length === 8 && /^[01]+$/.test(datos[i])&& datos[i].charAt(0) !== '2'){
            datosFiltrados.push(datos[i])
        }
    }
    return datosFiltrados
};

//IMPORTANTE SOBRE ESTE EJERCICIO: Comprobación de que no comienza con '2': datos[i].charAt(0) !== '2' verifica que la cadena no comienza con '2'.

//Crea una función llamada seleccionarUltimos que reciba un arreglo y un número y retorne un nuevo arreglo con los últimos elementos del arreglo original.//

//OPCIÓN 1 DE RESULTADO CORRECTO:
function seleccionarUltimos(arreglo, num) {
    if (num > arreglo.length) {
        return arreglo.slice();    }

    return arreglo.slice(arreglo.length - num);
};


//OPCIÓN 2 DE RESULTADO CORRECTO:

function seleccionarUltimos(arreglo, num) {
    let numNuevo = [];    
    if (num > arreglo.length) {
        num = arreglo.length; 
    }   
    for (let i = arreglo.length - num; i < arreglo.length; i++) {
        numNuevo.push(arreglo[i]);
    }
    
    return numNuevo;
}

//Crea una función llamada seleccionarUltimosNumeros que reciba un arreglo y un número y retorne un nuevo arreglo con los últimos N elementos del arreglo original. Intenta hacerlo de forma eficiente.//

function seleccionarUltimosNumeros(arreglo, num){
    resultado=[]
    for(let i= arreglo.length - num; i < arreglo.length; i++){
        resultado.push(arreglo[i])
    }
    return resultado

};

//Crea una función llamada FiltroEspecial que reciba un arreglo de números y retorne un nuevo arreglo con los números que sean mayores a 5 y que estén en una posición par.//

function FiltroEspecial(arreglo){
    nuevoArreglo=[]
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > 5 && i % 2 === 0 ){
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo
};

//Crea la función transformar que reciba un arreglo con los precios de productos. Esta función debe agregar un 20% a cada producto y luego devolver los productos que tengan un precio superior a 1000.//

function transformar(productos) {
    precios = []
    for (i = 0; i < productos.length; i++) {
      valorTransformado = productos[i] * 1.20
      if (valorTransformado > 1000) {
        precios.push(valorTransformado)
      }
    }
    return precios
  };  
  
//Crea la función seleccionarTemperaturasExtremas que reciba una lista de temperaturas en Kelvin. La función debe convertir cada temperatura a grados Celsius y luego devolver solo aquellas temperaturas que, una vez convertidas, sean inferiores a -10°C o superiores a 40°C./Tip: para transformar de Kelvin a Celsius debes restar 273 a la temperatura en Kelvin (este número está redondeado para facilitar el ejercicio)

function seleccionarTemperaturasExtremas(temperaturas){
    extremas=[]
    for (i = 0; i < temperaturas.length; i++){
        celsius = temperaturas[i] - 273
        if (celsius < -10 || celsius > 40){
            extremas.push(celsius)
        }
    }
    return extremas

};

//Crea la función transformarYreducir que reciba un arreglo con los precios de productos. Esta función debe agregar un 20% a cada producto y luego devolver el total de los precios de los productos con el 20% de aumento.//

function transformarYreducir(productos){
    nuevoPrecio = 0
    for(i= 0; i < productos.length; i++){
        valorTransformado = productos[i] * 1.20
        nuevoPrecio += valorTransformado

    }
    return nuevoPrecio

}

//Crea la función seleccionarTemperaturasExtremas que reciba una lista de temperaturas en Kelvin. La función debe convertir cada temperatura a grados Celsius y luego retornar la suma ellas./

function seleccionarTemperaturasExtremas(temperaturas){
    extremas=0
    for (i = 0; i < temperaturas.length; i++){
        celsius = temperaturas[i] - 273
        extremas.push(celsius)
        
    }
    return extremas

};

//Se tiene un arreglo con las ventas de un negocio, en donde cada venta es un objeto con la siguiente forma: a = [50, 100, 25, 30, 10, 15, 80, 5, 20, 10] - Cada objeto representa una venta en el día, donde el valor es el monto de la venta. Crea una función llamada SumaVentasMayoresA que reciba un arreglo de ventas y un número, y retorne la suma de las ventas que sean mayores a ese número.//

function SumaVentasMayoresA(ventas, n){
    mayores=0
    for(i=0; i < ventas.length; i++){       
        
        if(ventas[i] > n){
            mayores += ventas[i]           
        }

    }
    return mayores

};

//Crea una función llamada patronPiramide que reciba un número n como parámetro y muestre en la consola un patrón de asteríscos creciente. El patrón debe tener n filas, y cada fila debe tener tantas estrellas como su número de fila.La función no debe retornar valor alguno, utiliza console.log() para mostrar el patrón.

function patronPiramide(numero){
    filas= numero
    for(fila_actual = 1; fila_actual <=  filas; fila_actual++){
        string= '';
        for(columnas=1; columnas <= fila_actual; columnas++){
            string= string + '*';
        }    
        console.log(string);
    }   

};

//Crea una función llamada cuadradoRelleno que reciba un número n como parámetro y muestre en la consola un cuadrado relleno de asteriscos de lado n.

function cuadradoRelleno(numero){
    filas= numero
    columnas=numero
    for(fila_actual = 1; fila_actual <=  filas; fila_actual++){
        string= '';
        for(columna_actual=1; columna_actual <= columnas; columna_actual++){
            string= string + '*';
        }    
        console.log(string);
    }   
}; 
//En este código: columnas se ha definido como igual a numero, que es el mismo valor que usas para las filas. Esto asegurará que cada fila tenga la misma cantidad de columnas.En el ciclo interno, se utiliza la variable columna_actual para iterar y construir la cadena de asteriscos. Al final de cada iteración del ciclo externo, se imprime la línea completa de asteriscos, que es lo que necesitas para formar un cuadrado.


//Crea una función llamada lineasAlternadas que reciba dos números filas y columnas como parámetros y muestre en la consola un patrón de líneas alternadas de asteriscos.

function lineasAlternadas(filas, columnas){

    for(fila_actual = 1; fila_actual <=  filas; fila_actual++){
        string= ''
        if(fila_actual % 2 !==0){
            for(columna_actual=1; columna_actual <= columnas; columna_actual++){ 
                string = string + '*';                       
           
            }

        }
        console.log(string);      
            
      }   
}; 

//Crea una función llamada lineasVerticalesAlternadas que reciba dos números filas y columnas como parámetros y muestre en la consola un patrón de líneas verticales alternadas con asteriscos y espacios.

function lineasVerticalesAlternadas(filas, columnas){

    for(columna_actual = 1; columna_actual <=  columnas; columna_actual++){
        string= ''
        if(columna_actual % 2 !==0){
            for(fila_actual=1; fila_actual <= filas; fila_actual++){ 
                string = string + '*';                       
           
            }

        }
        console.log(string);      
            
      }   
}; 

//Crea una función llamada cuadradoHueco que reciba un número n como parámetro y muestre en la consola un cuadrado hueco de asteriscos de lado n.

function cuadradoHueco(numero){
    filas= numero
    columnas=numero
    for(fila_actual = 1; fila_actual <=  filas; fila_actual++){
        string= '';
        for(columna_actual=1; columna_actual <= columnas; columna_actual++){
            if(fila_actual ===1 || fila_actual === filas || columna_actual === 1 || columna_actual === columnas){
                string= string + '*';
            } else {
                string += '';
            }
            
        }    
        console.log(string);
    }   
}; 


//Cambios realizados:Definición del parámetro: La función ahora recibe un argumento llamado numero, que se utiliza como tamaño del cuadrado.Inicialización de la cadena: La variable string se inicializa como una cadena vacía en cada iteración del ciclo exterior (para cada fila).Condición para el borde: Se agregó una condición if para decidir si añadir un asterisco o un espacio, dependiendo de si estamos en el borde o en el interior del cuadrado.Tambien puede ser de la siguiente manera:

lado = 4;
fila = 1;
while (fila <= lado) {
    columna = 1;
    linea = '';
    while (columna <= lado) {
        if (fila == 1 || fila == lado || columna == 1 || columna == lado) {
            linea += "*";
        } else {
            linea += " ";
        }
        columna++;
    }
    console.log(linea);
    fila++;
}
//***********//
//Crea una función llamada diagonal_cuadrado que reciba un número n como parámetro y muestre en la consola la diagonal de un cuadrado de lado n


function diagonal_cuadrado(numero){
    
    for(fila_actual = 0; fila_actual < numero; fila_actual++){
        string= '';
        for(espacio =0; espacio <= fila_actual; espacio++){

        string = string + '';                       
   
    }
     string += '*'
     console.log(string);  
    }     
    
} ;

//Crea una función llamada media_piramide_izquierda que reciba un número altura como parámetro y muestre en la consola la parte izquierda de una pirámide con esa altura.

function media_piramide_izquierda(altura){
    
    for(fila_actual = 0; fila_actual <  altura; fila_actual++){
        string= '';
        for(espacios = 0; espacios < (altura -fila_actual -1); espacios++){
            string+= ''
        }
        for(columnas=0; columnas <= fila_actual; columnas++){
            string= string + '*';
        }    
        console.log(string);
    }   

};

//Crea una función llamada presentarObjeto que retorne un objeto con las siguientes claves y valores: "nombre": "Juan", "edad": 25

function presentarObjeto (nombre = "Juan", edad = 25){
    return {nombre, edad }

};

//Crea una función llamada retornarValor que reciba como argumento un objeto y un string clave y retorne el valor asociado a la clave en el objeto estudiante. En caso de que la clave no exista, la función debe retornar "Desconocido".

function retornarValor(objeto, clave){
    let valor = objeto[clave];
    if(clave in objeto){
        return valor;
    }else{
        return "Desconocido"
    }   

};

//Crea una función llamada cambiarValor que reciba como argumento un objeto, una clave y un valor. Cambia el valor asociado a la clave en el objeto y luego retorna el objeto modificado.

function cambiarValor(objeto, clave, valor){
    objeto [clave] = valor;
    
    return objeto
};

//Crea una función llamada agregarCuenta que reciba un array con números enteros y devuelva un objeto con la clave cuenta y el valor de la suma de los números del array. Si el array está vacío, la función debe devolver un objeto con la clave cuenta y el valor 0.

function agregarCuenta(num){
    if(num.length === 0){
        return {cuenta : 0}
    }
    suma=0
    for(i = 0; i < num.length; i++){
        numero=num[i];
        suma += numero
    }

    return {cuenta:suma}
};


//Se está desarrollando un sistema de gestión de inventario para una tienda. Se tiene un objeto que representa el inventario actual de productos y sus cantidades como se muestra a continuación: inventario = { "manzanas": 50,"plátanos": 30, "naranjas": 40,"peras": 25,"uvas": 35}; Tu tarea es crear una función llamada actualizarInventario que realice lo siguiente: Si se le pasa un producto existente y una cantidad se debe editar la cantidad en el inventario. Si la cantidad pasada es 0 se debe eliminar el producto del inventario. La función debe recibir como argumentos un objeto que representa el inventario, un string que representa el producto y un entero que representa la cantidad. La función debe retornar el inventario modificado.

function actualizarInventario(objeto, producto, cantidad){
    if(cantidad === 0){
        delete objeto [producto]
    }else{
        objeto[producto] = cantidad
    }
    return objeto

};

//Podemos obtener todos los valores de un objeto en JavaScript utilizando el método Object.values().

//Crea la función encontrarStock que reciba un objeto con el inventario de una tienda y retorne la cantidad total de productos en stock.

function encontrarStock(objeto){
    inventario = Object.values(objeto);
    suma= 0;
    for(let i = 0; i < inventario.length; i++){
        numero = inventario[i]
        suma += numero
    }
    
    return suma    

};

//Podemos obtener todas las claves de un objeto en JavaScript utilizando el método Object.keys().

//Crea la función contarProductos que reciba un objeto con el inventario de una tienda y retorne la cantidad total de tipos de productos diferentes en el inventario.

function contarProductos(objeto){
    productos = Object.keys(objeto)
    return productos.length
};

//Crea el objeto calculadora con los métodos sumar, restar, multiplicar y dividir. Cada método debe recibir dos parámetros y devolver el resultado de la operación correspondiente:  sumar(a, b): un método que retorna la suma de a y b; restar(a, b): un método que retorna la resta de a menos b; multiplicar(a, b): un método que retorna el producto de a y b; dividir(a, b): un método que retorna el cociente de a dividido por b (si b es distinto de 0)

calculadora = {
    sumar: function(a, b) {
        return a + b

    },
    restar: function(a, b){
        return a - b

    },
    multiplicar: function(a, b){
        return a * b

    },
    dividir: function(a, b){
        return a / b
    }

};


//Los métodos pueden acceder a las propiedades del objeto usando this. this se refiere al objeto actual en el que se está ejecutando el método. En JavaScript, podemos usar this dentro de los métodos de un objeto para acceder a las propiedades del mismo objeto. Esto nos permite mostrar los valores actuales y/o modificarlos. 

//Corrige el objeto persona. Particularmente asegúrate de que el método presentarse use this para acceder a las propiedades del objeto:
let personax = {
    nombre: "Ana",
    edad: 30,
    presentarse: function() {
        return "Hola, soy " + nombre + " y tengo " + edad + " años.";
    }
};

//Corregido:
let persona = {
    nombre: "Ana",
    edad: 30,
    presentarse: function() {
        return "Hola, soy " + this.nombre + " y tengo " + this.edad + " años.";
    }
};

//Crea el objeto punto con las propiedades x e y, que representan coordenadas en un plano cartesiano. Luego, agrega el método moverA(x, y) que modifica las coordenadas del objeto puntos. Finalmente, agrega el método dondeEstoy() que muestra las coordenadas actuales del objeto en la forma (x, y) ; Para el método moverA(x, y):Debes actualizar las propiedades x e y del objeto punto utilizando los valores que se pasan como argumentos. Recuerda que debes usar this para referenciar esas propiedades. Para el método dondeEstoy():Este método debe devolver una representación de la posición actual del punto. Puedes devolver una cadena que muestre las coordenadas x e y del objeto punto. Nuevamente, utilizarás this para acceder a las propiedades del objeto.

let punto = {
    x:0,
    y: 0,
    moverA(x, y){
        this.x = x;
        this.y = y;

    },
    dondeEstoy: function (){
        console.log("(" + this.x + ", " + this.y + ")");  
        
    }
};


//Crea un objeto literal llamado cuentaBancaria con las siguientes propiedades y métodos:saldo: una propiedad inicializada con el valor 100. obtenerSaldo(): un método que retorna el saldo actual de la cuenta. depositar(cantidad): un método que recibe un argumento cantidad y lo suma al saldo de la cuenta.

cuentaBancaria= {
    valor: 100,
    obtenerSaldo(){
        return this.valor
    },   
    depositar(cantidad){
        this.valor += cantidad
        
        return this.valor
    }
};

//Corrige el código para que funcione.

function saludar() {
    var mensaje = "Hola, mundo!";  /* Modifica esta línea */
}

function otroSaludo() {
    console.log(mensaje);  // Puede acceder a 'mensaje' porque es global
}

saludar();
otroSaludo(); 

//Código corregido:
function saludar() {
    mensaje = "Hola, mundo!";  /* Modifica esta línea */
}

function otroSaludo() {
    console.log(mensaje);  // Puede acceder a 'mensaje' porque es global
}

saludar();
otroSaludo(); 


//Modifica el siguiente código para que la función otroSaludo tenga su propia variable local mensaje con el valor "Hola desde otra función". La función saludar debe mantener su variable local original.

function saludar() {
    var mensaje = "Hola, mundo!";
    console.log(mensaje);
}

function otroSaludo() {
   /* Escribe tu código aquí */
    

    
   /* Fin */
    console.log(mensaje);
}

saludar();
otroSaludo();

//FUNCION CORREGIDA:

function saludar() {
    var mensaje = "Hola, mundo!";
    console.log(mensaje);
}

function otroSaludo() {
   /* Escribe tu código aquí */
    var mensaje = "Hola desde otra función";

    
   /* Fin */
    console.log(mensaje);
}

saludar();
otroSaludo();

//La función setTimeout es una función que ejecuta una función después de un cierto tiempo. En teoría, en el siguiente código se debería mostrar "Tarea 1 ejecutada", "Tarea 2 ejecutada" y "Tarea 3 ejecutada" en ese orden. Sin embargo, debido al uso de var, obtendremos un resultado inesperado. Puesto que la tarea no se está ejecutando y var i se está incrementando en cada iteración, cuando se ejecuta la tarea, i ya tiene el valor de 4. Modifica la función para solucionar esto.Más adelante volveremos a revisar setTimeout, en el ejercicio solo pon foco en el uso de let en lugar de var.
function programarTareas() {
    for (var i = 1; i <= 3; i++) { /* Modifica esta línea */
      setTimeout(function() {
        console.log("Tarea " + i + " ejecutada");
      }, i * 100);
    }
    return "Todas las tareas han sido programadas";
  }
  
  programarTareas();
  console.log("Todas las tareas han sido programadas");

  //Codigo corregido:

  function programarTareas() {
    for (let i = 1; i <= 3; i++) { /* Modifica esta línea */
      setTimeout(function() {
        console.log("Tarea " + i + " ejecutada");
      }, i * 100);
    }
    return "Todas las tareas han sido programadas";
  }
  
  programarTareas();
  console.log("Todas las tareas han sido programadas");

 //const se utiliza para declarar constantes, es decir, variables cuyo valor no cambiará después de su asignación inicial. Las variables declaradas con const deben ser inicializadas en el momento de la declaración. No se puede reasignar un nuevo valor a una variable const. const tiene alcance de bloque, al igual que let.

 //Corrige el siguiente código para que funcione correctamente. El bucle debe mostrar los números del 0 al 9.

/* Escribe tu código aquí */
function imprimirNumeros() {
    for (const i = 0; i < 10; i++) { 
        console.log(i);
    }
}

/* Fin */

imprimirNumeros();

//Código corregido:
/* Escribe tu código aquí */
function imprimirNumeros() {
    for (let i = 0; i < 10; i++) { 
        console.log(i);
    }
}

/* Fin */

imprimirNumeros();

//Un callback es una función que se pasa como argumento a otra función y se ejecuta dentro de esa función. Los callbacks son comunes en JavaScript y se utilizan para manejar eventos, realizar operaciones asincrónicas, y más

//Crea una función llamada aplicarOperacion que tome tres parámetros:Una función que realiza una operación matemática. Dos números sobre los cuales se realizará la operación.

function aplicarOperacion(operacion, a, b) {
    return operacion(a, b); 
}

function sumar(a, b){
    return a + b

}
function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
};

//Crea una función anónima y pásala como argumento a setTimeout. La función debe imprimir el mensaje "¡Hola desde el futuro!" después de 1 segundo (1000 milisegundos).

setTimeout(function() {
    console.log("¡Hola desde el futuro!");
}, 1000);

console.log("Este mensaje aparece primero");

//**Arrow functions son una forma más concisa de escribir funciones en JavaScript:
// Función tradicional con un parámetro
function duplicar(numero) {
    return numero * 2;
}

// Arrow function con un parámetro (con paréntesis)
const duplicarArrow1 = (numero) => {
    return numero * 2;
};

// Arrow function con un parámetro (sin paréntesis)
const duplicarArrow2 = numero => {
    return numero * 2;
};

// Versión aún más concisa con retorno implícito
const duplicarArrow3 = numero => numero * 2;

//Crea una función flecha llamada convertirMayusculas que tome un parámetro texto y devuelva el mismo texto en mayúsculas.

const convertirMayusculas =  texto => {
    return texto.toUpperCase()
};

//Cuando una arrow function tiene más de un parámetro, los paréntesis alrededor de los parámetros son obligatorios. La sintaxis básica es: (param1, param2, ...) => { cuerpo de la función } - EJEMPLOS:

// Función tradicional con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

// Arrow function equivalente
const sumarArrow = (a, b) => {
    return a + b;
};

// Versión concisa con retorno implícito
const sumarArrowConcisa = (a, b) => a + b;

// Ejemplo con tres parámetros
const calcularPromedio = (a, b, c) => (a + b + c) / 3;

// Ejemplo con 2 parámetros y cuerpo de función
const multiplicar = (a, b) => {
    return a * b;
};

//Crea una arrow function llamada concatenarConEspacio que tome tres parámetros texto1, texto2 y texto3, y devuelva estos tres textos concatenados, separados por un espacio.

const concatenarConEspacio = (texto1, texto2, texto3) => {
    return (texto1 + " " + texto2 + " " + texto3)
};

//Cuando una función flecha no tiene parámetros, debemos usar paréntesis vacíos (). Veamos algunos ejemplos:

// Función tradicional sin parámetros
function saludar() {
    return "Hola!";
}
// Arrow function equivalente
const saludarArrow = () => {
    return "Hola!";
};

// Versión concisa con retorno implícito
const saludarArrowConcisa = () => "Hola!";

// Una versión que muestra en pantalla en lugar de devolver el valor
const mostrarMensaje = () => console.log("¡Hola desde una arrow function sin parámetros!");

// Una versión que muestra en pantalla y devuelve un valor
const mostrarYDevolver = () => {
    console.log("¡Hola desde una arrow function sin parámetros!");
    return "Hola!";
};

//Cuando el cuerpo de la función es una sola línea, podemos omitir las llaves {} y el return para hacer la función aún más concisa. Por ejemplo, la función saludarArrowConcisa es una versión más corta de saludarArrow. Cuando realiza más de una tarea, es necesario usar llaves y return, como en la función mostrarYDevolver.

//Crea una función flecha sin parámetros llamada saludoBot que debe hacer lo siguiente: Mostrar en consola el mensaje "Bienvenido, humano".Devolver el string "Beep boop".

const saludoBot = () => {
    console.log("Bienvenido, humano")
    return "Beep boop";
};


//La Zona Muerta Temporal (TDZ) es el período entre el inicio de un ámbito y el punto donde se inicializa una variable declarada con let o const. Durante la TDZ, intentar acceder a la variable resultará en un ReferenceError. Las variables declaradas con var no tienen TDZ, se inicializan con undefined. La TDZ ayuda a prevenir errores al acceder a variables antes de su inicialización. 

//Modifica la función a para que no se produzca un error de referencia al acceder a la variable x antes de su inicialización, mostrando undefined en la consola. No cambies el alcance de la variable x:

const a = function() {
    let x /* Modifica esta línea */
    console.log(x); 
    x = 5
  }
  
  a()
  
  try {
    console.log(x)
  } catch (e) {
    console.log(e.message)

  }

//EJERCICIO RESUELTO:


const a_ = function() {
    var x /* Modifica esta línea */
    console.log(x); 
    x = 5
  }
  
  a()
  
  try {
    console.log(x)
  } catch (e) {
    console.log(e.message)
  };

//Hoisting es el comportamiento de JavaScript de mover las declaraciones al principio de su ámbito (scope). Esto significa que podemos acceder a una variable antes de su declaración, pero no a su inicialización. El hoisting afecta de manera diferente a las variables dependiendo de cómo se declaren:

console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
//En el caso de var, la declaración se alza y se inicializa con undefined. Con let y const, la declaración se alza pero no se inicializa, lo que resulta en la TDZ.


//Modifica la función demostrarHoisting para que muestre el efecto del hoisting con variables var. La función debe mostrar undefined en la consola al acceder a la variable x antes de su inicialización.

const demostrarHoisting = function() {
    console.log(x); 
    x = 5 /* Modifica esta línea */
  }
  
  demostrarHoisting()
  
  try {
    console.log(x)
  } catch (e) {
    console.log(e.message)
  }

  //EJERCICIO RESUELTO:

  const demostrarHoisting1 = function() {
    console.log(x); 
    var x = 5 /* Modifica esta línea */
  }
  
  demostrarHoisting()
  
  try {
    console.log(x)
  } catch (e) {
    console.log(e.message)
  };

 
//Las listas (arrays) en JavaScript son mutables, lo que significa que pueden ser modificadas después de su creación. Modificar una lista afecta a todas las variables que hacen referencia a esa lista. Asignar la lista con const no impide que la lista sea modificada, solo impide que la variable sea reasignada a otro valor. Operaciones como push(), pop(), shift(), unshift() y la asignación directa a índices modifican la lista original:

// Crear una lista
let frutas = ['manzana', 'banana', 'cereza'];

// Modificar un elemento existente
frutas[1] = 'pera';
console.log(frutas); // ['manzana', 'pera', 'cereza']

// Agregar un elemento al final
frutas.push('uva');
console.log(frutas); // ['manzana', 'pera', 'cereza', 'uva']

// Remover el último elemento
let ultimaFruta = frutas.pop();
console.log(frutas); // ['manzana', 'pera', 'cereza']
console.log(ultimaFruta); // 'uva'

// Agregar un elemento al inicio
frutas.unshift('fresa');
console.log(frutas); // ['fresa', 'manzana', 'pera', 'cereza']
  
//Podemos copiar una lista para evitar que las modificaciones afecten a la lista original. Esto se puede hacer utilizando el operador spread (...) o el método slice()
//En este caso, copiaLista es una lista independiente de listaOriginal, por lo que las modificaciones en una no afectan a la otra.

const listaOriginal = [1, 2, 3];
const copiaLista = [...listaOriginal];
listaOriginal.push(4);
listaOriginal[0] = 5;
console.log(listaOriginal); // [5, 2, 3, 4]
console.log(copiaLista);    // [1, 2, 3]

//Modifica el código para que la función mutarLista no modifique la lista original:

const listaOriginal = [1, 2, 3]; 
const listaModificada = listaOriginal; /* Modifica esta línea */

const mutarLista = (listaModificada) => {
    listaModificada[0] = 'Modificado';
    return listaModificada;
}

mutarLista(listaModificada);
console.log(listaOriginal); 

//EJERCICIO MODIFICADO:
const listaOriginal = [1, 2, 3]; 
const listaModificada_ = [listaOriginal]; /* Modifica esta línea */

const mutarLista_ = (listaModificada) => {
    listaModificada[0] = 'Modificado';
    return listaModificada;
}

mutarLista(listaModificada);
console.log(listaOriginal); 

//Los objetos literales al igual que las listas son mutables, lo que significa que pueden ser modificados después de su creación. Modificar un objeto afecta a todas las variables que hacen referencia a ese objeto. Asignar el objeto con const no impide que el objeto sea modificado, solo impide que la variable sea reasignada a otro valor. Las propiedades de un objeto pueden ser añadidas, modificadas o eliminadas después de su creación. EJEMPLOS:
// Crear un objeto

let persona_ = { nombre: 'Ana', edad: 30 };

// Modificar una propiedad existente
persona.edad = 31;
console.log(persona); // { nombre: 'Ana', edad: 31 }

// Añadir una nueva propiedad
persona.ciudad = 'Madrid';
console.log(persona); // { nombre: 'Ana', edad: 31, ciudad: 'Madrid' }

// Eliminar una propiedad
delete persona.ciudad;
console.log(persona); // { nombre: 'Ana', edad: 31 }


//Modifica el código para que la función mutarObjeto no modifique el objeto original.

const objetoOriginal = { x: 1, y: 2 };
const objetoModificado = objetoOriginal; /* Modifica esta línea */

const mutarObjeto = (objeto) => {
    objeto.x = 'Modificado';
    return objeto;
}

mutarObjeto(objetoModificado);
console.log(objetoOriginal);

//EJERCICIO CORREGIDO:
const objetoOriginal_ = { x: 1, y: 2 };
const objetoModificado_ = {objetoOriginal}; /* Modifica esta línea */

const mutarObjeto_ = (objeto) => {
    objeto.x = 'Modificado';
    return objeto;
}

mutarObjeto(objetoModificado);
console.log(objetoOriginal);

//La copia superficial (shallow copy) crea un nuevo objeto/array, pero sus propiedades/elementos anidados siguen siendo referencias al original. La copia profunda (deep copy) crea un nuevo objeto/array y copia recursivamente todas las propiedades/elementos anidados. Métodos como Object.assign() y el operador spread (...) realizan copias superficiales. Para realizar copias profundas, se pueden usar métodos como JSON.parse(JSON.stringify()) o bibliotecas especializadas.
//Nota: JSON.parse(JSON.stringify()) tiene limitaciones, como no poder copiar funciones o Date objects correctamente

//Implementa una función llamada copiarProfundo que realice una copia profunda del objeto obj para evitar que el siguiente código modifique el objeto original. Tu función debe ser capaz de manejar objetos anidados.

const copiarProfundo = (obj) =>{
    return JSON.parse(JSON.stringify(obj));
};   

//El método map() crea un nuevo array con los resultados de llamar a una función para cada elemento del array. map() no modifica el array original. La función pasada a map() se ejecuta para cada elemento del array en orden. map() es útil para transformar datos de un formato a otro. En general para las opciones de map() se suele utilizar la notación de función flecha para simplificar la sintaxis. Ejemplo:

const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(numero => numero * 2);
console.log(duplicados); // [2, 4, 6, 8, 10]

//Implementa la función obtenerLongitudes(palabras) utilizando el método map(). Esta función debe recibir un array de palabras y devolver un nuevo array que contenga la longitud de cada una de esas palabras:

const obtenerLongitudes = palabras =>{
    const longitud = palabras.map(palabras => palabras.length)    
    return longitud
};

//Implementa la función elevarAlCuadrado(numeros), la cual toma un array de números y devuelve un nuevo array con cada número elevado al cuadrado.

const elevarAlCuadrado = (numeros) => {
    const elevados = numeros.map(numeros => numeros ** 2)
    return elevados
};

//Implementa la función agregarPrefijo(), la cual toma un array de palabras y un prefijo, y devuelve un nuevo array donde cada palabra tiene el prefijo agregado, separado por un espacio

const agregarPrefijo = (palabras, prefijo) =>{
    const agregado = palabras.map(palabras => prefijo + " " + palabras)
    return agregado
};

//El método map() es muy versátil y puede trabajar con estructuras de datos más complejas, como arrays de arrays.

//Implementa la función contarElementos(matriz), la cual toma un array de arrays (matriz), y devuelve un nuevo array con la cantidad de elementos en cada subarray. El elemento interior siempre será un array, pero puede tener cualquier cantidad de elementos.

const contarElementos = (matriz) => {
    const cantidad = matriz.map(matriz => matriz.length)
    return cantidad
};

//map() es comúnmente usado para extraer datos específicos de objetos o para añadir nuevas propiedades.
//El método map() es extremadamente útil cuando trabajamos con arrays de objetos, permitiéndonos transformar cada objeto de manera uniforme. Por ejemplo:

const personas = [
    { nombre: "Ana", edad: 29 },
    { nombre: "Carlos", edad: 32 },
    { nombre: "Berta", edad: 25 }
  ];
  
  const nombres = personas.map(persona => persona.nombre);
  console.log(nombres); // ["Ana", "Carlos", "Berta"]

  //Crea la función obtenerPrecios, la cual debe recibir un array de objetos que representan productos y devolver un nuevo array que contenga únicamente los precios de esos productos.

  const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Móvil", precio: 500, descuento: 50 },
    { nombre: "Tablet", precio: 200 }
  ];
  const obtenerPrecios = (productos) => {
    const precios = productos.map(productos => productos.precio);
    return precios
  };


//El operador spread (...) permite copiar todas las propiedades de un objeto existente a un nuevo objeto. Podemos añadir nuevas propiedades al crear el nuevo objeto dentro de map().Esta técnica es útil para agregar información derivada a objetos sin modificar los originales.  
//Podemos usar map() junto con el operador spread para crear nuevos objetos que incluyan todas las propiedades de los objetos originales más algunas adicionales. Por ejemplo:

const personas_ = [
    { nombre: "Ana", edad: 29 },
    { nombre: "Carlos", edad: 32 },
    { nombre: "Berta", edad: 25 }
  ];
  
  const personasConSaludo = personas_.map(persona => ({
    ...persona,
    saludo: `Hola, soy ${persona.nombre}`
  }));
  
  console.log(personasConSaludo);
  // [
  //   { nombre: "Ana", edad: 29, saludo: "Hola, soy Ana" },
  //   { nombre: "Carlos", edad: 32, saludo: "Hola, soy Carlos" },
  //   { nombre: "Berta", edad: 25, saludo: "Hola, soy Berta" }
  // ]

//Crea la función agregarPromedios que tome un array de estudiantes con sus respectivas calificaciones y devuelva un nuevo array con la información de cada estudiante, incluyendo el promedio de sus calificaciones. Nota: Redondea el promedio a dos decimales utilizando el método toFixed(2).


const agregarPromedios = (estudiantes) => {
    const informacion = estudiantes.map(estudiante => {
        const calificaciones = estudiante.calificaciones; 
        const promedio = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / calificaciones.length;
        
        // Redondear a dos decimales
        const promedioRedondeado = Math.round(promedio * 100) / 100;

        return {
            ...estudiante, 
            promedio: promedioRedondeado 
        };
    });
    return informacion;
};

//Implementa la función calcularEstadoEstudiantes que tome un array de estudiantes con sus respectivas calificaciones y devuelva un nuevo array con la información de cada estudiante, incluyendo el promedio de sus calificaciones y su estado (Aprobado/Reprobado) si su promedio es mayor o igual a 6.  Notas: Un estudiante está aprobado si su promedio es mayor o igual a 6. Redondea el promedio a dos decimales utilizando el método toFixed(2). Usa el operador spread para mantener las propiedades originales del objeto estudiante.

const calcularEstadoEstudiantes = (estudiantes) => {
    const informacion = estudiantes.map(estudiante => {
        const calificaciones = estudiante.calificaciones; 
        const promedio = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / calificaciones.length;        
        const promedioRedondeado = Math.round(promedio * 100) / 100;    
        const estado = promedioRedondeado >= 6 ? "Aprobado" : "Reprobado" 

        return {
            ...estudiante, 
            promedio: promedioRedondeado.toFixed(2), 
            estado: estado
        };
    });

    return informacion;
};


//El método map() puede recibir una función de callback con tres parámetros: elemento, índice y array. El segundo parámetro (índice) puede ser utilizado para transformaciones basadas en la posición del elemento. Combinar el valor del elemento con su índice permite crear transformaciones más complejas.
//El método map() no solo transforma elementos basándose en su valor, sino que también puede usar el índice del elemento en la transformación. Esto es útil cuando la posición del elemento es relevante para la transformación. Ejemplo:

const numeross = [1, 2, 3, 4, 5];

const resultado = numeross.map((numero, indice) => numero * indice);
console.log(resultado); // [0, 2, 6, 12, 20]


//Implementa una función llamada transformarConIndice que tome un array de números y realice las siguientes transformaciones usando map(): Si el índice es par, multiplica el número por 2./ Si el índice es impar, suma 5 al número. En ambos casos, añade el índice al resultado de la operación anterior.


const transformarConIndice = (numeros) =>{
    const transformaciones = numeros.map((numero, indice) => {
        if(indice % 2 ===0){
            return (numero * 2) + indice;
        }else {
            return(numero + 5 + indice)
        }       
       
       
    })
    return transformaciones   
};

//El método filter() crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada. filter() crea una copia superficial del array, no modifica el array original. La función de prueba debe retornar true para mantener el elemento en el array resultante, o false para excluirlo. filter() es útil para seleccionar elementos específicos de un array basados en ciertos criterio.
//El método filter() es una forma poderosa de crear un nuevo array que contiene solo los elementos que cumplen con cierta condición. Veamos algunos ejemplos:

// Filtrar números pares
const numerosx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numerosx.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Filtrar strings por longitud
const palabras = ["sol", "luna", "estrella", "cometa", "galaxia"];
const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log(palabrasLargas); // ["estrella", "galaxia"]

//En estos ejemplos, filter() crea nuevos arrays basados en las condiciones especificadas en las funciones de flecha.

//Crea la función filtrarPositivos(numeros), la cual toma un array de números y devuelve un nuevo array solo con los números positivos (estrictamente mayores que cero)

const filtrarPositivos = (numeros) => {
    const positivos = numeros.filter(numero => numero > 0)
    return positivos
};

//Podemos combinar múltiples condiciones usando operadores lógicos (&&, ||) dentro de la función de filtrado. Es importante considerar el orden y la prioridad de las condiciones al combinarlas.
//Podemos usar filter() con múltiples condiciones para crear filtros más específicos. Veamos algunos ejemplos:

// Filtrar números que son pares Y mayores que 5
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const paresMayoresQueCinco = numeros1.filter(numero => numero % 2 === 0 && numero > 5);
console.log(paresMayoresQueCinco); // [6, 8, 10]

// Filtrar números que son múltiplos de 3 O múltiplos de 5
const numerosVariados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 18, 20, 25, 30];
const multiplosDeTresOCinco = numerosVariados.filter(numero => numero % 3 === 0 || numero % 5 === 0);
console.log(multiplosDeTresOCinco); // [3, 5, 6, 9, 10, 15, 18, 20, 25, 30]
//En estos ejemplos, usamos && (AND) y || (OR) para combinar condiciones dentro de la función de filtrado.

//Implementa la función filtrarNumeros(numeros, min, max) utilizando filter() con múltiples condiciones: Toma un array de números y dos valores numéricos (mínimo y máximo). Debe devolver un nuevo array con los números que cumplan AMBAS condiciones: El número es mayor o igual que min. El número es menor o igual que max. Adicionalmente, el número debe ser par.

const filtrarNumeros = (numeros, min, max) => {
    return numeros.filter(numero => {
        return numero >= min && numero <= max && numero % 2 === 0;
    });   

};

//filter() puede trabajar con arrays de objetos, permitiendo filtrar basándose en las propiedades de estos objetos. Podemos acceder y comparar múltiples propiedades de un objeto dentro de la función de filtrado. Cuando trabajamos con arrays de objetos, filter() nos permite crear subconjuntos basados en las propiedades de estos objetos. Por ejemplo:

const productosx = [
    { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { nombre: "Libro", precio: 20, categoria: "Libros" },
    { nombre: "Smartphone", precio: 500, categoria: "Electrónica" },
    { nombre: "Taza", precio: 5, categoria: "Hogar" }
  ];
  
  // Filtrar productos de electrónica con precio mayor a 100
  const electronicasCostosas = productosx.filter(producto => 
    producto.categoria === "Electrónica" && producto.precio > 100
  );
  
  console.log(electronicasCostosas);
  // [
  //   { nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
  //   { nombre: "Smartphone", precio: 500, categoria: "Electrónica" }
  // ]

//Implementa la función filtrarEstudiantes(estudiantes, edadMinima, promedioMinimo) utilizando filter(): La función toma un array de objetos de estudiantes y dos valores numéricos (edad mínima y promedio mínimo). Cada objeto estudiante tiene las propiedades: nombre, edad, y promedio. Debe devolver un nuevo array con los estudiantes que cumplan AMBAS condiciones: La edad del estudiante es mayor o igual que edadMinima. El promedio del estudiante es mayor o igual que promedioMinimo.

const filtrarEstudiantes = (estudiantes, edadMinima, promedioMinimo) => {
    return estudiantes.filter((estudiante) => {
        return estudiante.edad >= edadMinima && estudiante.promedio >= promedioMinimo
    });

};

//Filtrar por índice o por posición puede ser útil para seleccionar elementos basados en su posición en el array. Este tipo de filtrado puede combinarse con otras condiciones basadas en el valor del elemento.
//El método filter() permite acceder al índice de cada elemento en la función de callback. Esto nos permite filtrar elementos basados en su índice o posición en el array. Por ejemplo:

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const primerosCinco = num.filter((value, indice) => indice < 5);
//Por supuesto el ejercicio anterior se puede hacer con slice() pero nos sirve para ilustrar cómo se puede usar el índice en filter()

//Cuando no se utiliza el valor del elemento en la función de callback, es común utilizar _ como nombre de la variable que lo representa. Esto ayuda a indicar que el valor no es relevante para la operación y no es algo que haya sido olvidado.

// Filtrar elementos en posiciones pares
const nume = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const elementosPares = nume.filter((_, indice) => indice % 2 === 0);
console.log(elementosPares); // [10, 30, 50, 70, 90]

//Podemos utilizar tanto el índice como el valor del elemento en la función de callback. Por ejemplo:

// Filtrar elementos cuyo valor es mayor que su índice
const valoresMayoresQueIndice = numeros.filter((valor, indice) => valor > indice * 10);
console.log(valoresMayoresQueIndice); // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//Implementa una función llamada filtrarPorPosicion que tome dos parámetros: Un array de números.Un número n que representa cada cuántas posiciones se debe seleccionar un elemento.La función debe usar filter() para seleccionar cada n-ésimo elemento del array, comenzando desde el primer elemento (índice 0). Pistas: Puedes utilizar el índice en la función de callback para seleccionar los elementos correctos. Los elementos en la posición enesima cumplen con (índice % n === 0). Cada 4 posiciones sería (índice % 4 === 0).

const filtrarPorPosicion = (numeros, n) =>{
    return numeros.filter((numero, indice) => {
        return indice % n === 0;
    });

};

//El método sort() ordena los elementos de un array modificando el array original.Por defecto, sort() ordena los elementos como strings en orden ascendente. Para números, el ordenamiento por defecto puede dar resultados inesperados. sort() modifica el array original. Se puede pasar una función de comparación a sort() para definir un orden personalizado.

//El método sort() se puede usar de forma muy simple para ordenar arrays. Sin embargo, es importante entender su comportamiento predeterminado:

// Ordenar strings
const frutas = ['manzana', 'banana', 'cereza', 'dátil'];
frutas.sort();
console.log(frutas); // ['banana', 'cereza', 'dátil', 'manzana']

// Ordenar números (¡cuidado!)
const numerox = [10, 2, 30, 4, 1];
numerox.sort();
console.log(numerox); // [1, 10, 2, 30, 4]
//Nota que para los números, el resultado puede no ser el esperado porque sort() los trata como strings por defecto.
//Para ordenar números correctamente, podemos pasar una función de comparación a sort():

const numerosss = [10, 2, 30, 4, 1];
numerosss.sort((a, b) => a - b);
console.log(numerosss); // [1, 2, 4, 10, 30]
//La función de comparación debe retornar: Un número negativo si a debe ir antes que b / Un número positivo si b debe ir antes que a / Cero si son iguales
  
//Implementa una función ordenarPalabrasLongitud que ordene un array de palabras de la más corta a la más larga. Si dos palabras tienen la misma longitud deben mantener su orden original.

const ordenarPalabrasLongitud = (palabras) =>{
    return palabras.sort((a, b) => a.length - b.length);
};

//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. reduce() toma una función callback con al menos dos parámetros: el acumulador y el valor actual. Opcionalmente, se puede proporcionar un valor inicial para el acumulador. reduce() es muy versátil y puede usarse para muchas operaciones más allá de la simple suma de números.

//reduce() transforma un arreglo en un solo valor. Para esto itera sobre cada elemento del arreglo y aplica una función reductora que toma dos argumentos: el acumulador y el valor actual. El resultado de la función reductora se convierte en el nuevo valor del acumulador. Un ejemplo común de reduce() es sumar todos los elementos de un array:

const numr = [1, 2, 3, 4, 5];
const suma = numr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 15
//En este ejemplo: acumulador es la suma acumulada / valorActual es el elemento actual del array / 0 es el valor inicial del acumulador

//Crea una función sumarNumeros(numeros). La función debe tomar un array de números y retornar la suma de todos elemento más el largo del array

const sumarNumeros = (numeros) => {
    const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    return suma + numeros.length
}


  
  






  






















 





