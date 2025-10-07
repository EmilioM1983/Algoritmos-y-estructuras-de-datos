"""
    Verificar si una palabra es un anagrama de otra, por ejemplo Roma y Amor
"""

def anagrama(palabra1, palabra2):
    palabra1 = palabra1.replace(' ','').lower()
    palabra2 = palabra2.replace(' ','').lower()

    #Verificamos que no sea la misma palabra
    if palabra1 == palabra2:
        return False
    if len(palabra1) != len(palabra2):
        return False
    # Definimos un diccionario vacio
    contador = {}

    # Suma las letras si coincide sino se cuenta como uno
    for letra in palabra1:
        if letra in contador:
            contador[letra] += 1
        else:
            contador[letra] =1

    # Resta las letras si coincide sino se cuenta como uno
    for letra in palabra2:
        if letra in contador:
            contador[letra] -= 1
        else:
            contador[letra] =1

    # Si el contador es distinto de cero entonces no es un anagrama
    for item in contador:
        if contador[item] != 0:
            return False
        
    return True

verificar = anagrama("Amor", "Ramon")

if verificar:
    print("Es un anagrama")
else:
    print("No es un anagrama")
    
"""
    ¿Por qué usar un diccionario?
    Eficiencia:
    Los diccionarios permiten acceso rápido a los valores mediante claves (en este caso, las letras).
    Cada operación de actualización (suma/resta) es O(1), y el proceso total es O(n), donde n es la longitud de las palabras.
    Conteo de frecuencias:
    Es la estructura ideal para contar ocurrencias de elementos (letras) y compararlas después.
    Alternativas menos eficientes:
    Ordenar las palabras y compararlas (usando sorted(palabra1) == sorted(palabra2)), pero esto tiene complejidad O(n log n) por el ordenamiento.
    El diccionario es más eficiente en tiempo para este caso.
"""