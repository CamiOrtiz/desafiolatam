#Ejercicio: Se ha diseñado un programa en Python con la intención de imprimir un mensaje de bienvenida a los usuarios cuyo nombre coincide con "Alex". Sin embargo, tras realizar algunas modificaciones en el código, el programa ha dejado de funcionar correctamente y ya no muestra el mensaje de bienvenida adecuado. Corrige el error en el siguiente código para que funcione correctamente

nombreUsuario = "Juan" # Modifica esta línea
if nombreUsuario == "Alex":
  print("Bienvenido, Alex")


#Eercicio: Se tiene definida la función despedir, pero no se está llamando. Llama a la función despedir para que imprima "Adiós Mundo" en la consola.

#def despedir():
  #print("Adiós Mundo")

def despedir():
  print("Adiós Mundo")

despedir() 

#Las funciones nos permiten reutilizar código / Existe más de una forma de crear una función / Por ahora las crearemos utilizando la palabra clave def / Una función primero debe ser definida para que luego pueda ser llamada

#Ejercicio: Define la función saludar para que imprima "Hola Mundo" en la consola. Respeta las mayúsculas, minúsculas y espacios.

def saludar():
    print("Hola Mundo")

#Una función puede depender de parámetros para llevar a cabo su tarea / Utilizando parámetros, podemos hacer que una función se adapte a diferentes situaciones.
#Los parámetros son los valores de los que depende una función para realizar una tarea. Depender de valores hace que una función sea más versátil y adaptable a diferentes situaciones.


#Ejercicio: Se ha definido una función llamada mostrar_mensaje_secreto. Esta función depende de un parámetro llamado mensaje. Si el mensaje es "secreto", mostrará "Mensaje correcto". Sin embargo, si el mensaje es cualquier otro, la función finalizará, mostrando "Término de la función". Para resolver el ejercicio debes llamar a la función dos veces, primero, con el mensaje "secreto" y luego con el mensaje "no secreto" para verificar que funciona correctamente.

def mostrar_mensaje_secreto(mensaje):
    if mensaje == "secreto":
        print("Mensaje correcto")
    print("Término de la función")

# Escribe tu código aquí

mostrar_mensaje_secreto("secreto")
mostrar_mensaje_secreto("no secreto")

# Fin

#Ejercicio: Crea la función restar que dependa de dos parámetros y que imprima la resta de ambos.

def restar(a, b):
   print(a - b)

#Parámetros: Son los nombres que usas en una función para recibir datos. Por ejemplo, en sumar(a, b, c), a, b y c son parámetros.
#Argumentos: Son los valores que le das a la función cuando la llamas. Por ejemplo, en sumar(5, 3, 2), 5, 3 y 2 son argumentos.

#Ejercicio: Crea la función restar que dependa de tres parámetros a, b y c. Esta función al ser llamada debe mostrar el resultado de la resta de los tres valores ingresados

def restar(a, b, c):
   print(a - b - c)

#En python, una función puede tener valores por defecto en sus parámetros. Esto significa que si al llamar a la función no se le pasa un valor para un parámetro, este tomará el valor por defecto que se le haya asignado.