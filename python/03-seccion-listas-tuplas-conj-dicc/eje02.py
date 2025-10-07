"""
    Dada una lista de numeros , mostrar los pares de numeros que sumado obtiene el mismo valor pasado como parameto
    La funcion debe mostrar los pares de numeros, devolvera el el numero de pares que suman ese valor 
    Ejemplo, suma_pares([1,3,2,2], 4) --> (1,3) (2,2) 
"""
def suma_pares(numeros, suma):
    if len(numeros) < 2:
        return
    
    vistos = set()
    salida = set()

    for numero in numeros:
        objetivo = suma - numero
        if objetivo not in vistos:
            vistos.add(numero)
        else:
            salida.add( (min(numero,objetivo), max(numero,objetivo)) )

    for item in salida:
        print(item)
        
    return len(salida)

suma_pares([1,3,2,2], 4)

"""
    ¿Por qué usar conjuntos (set)?
    Eficiencia:
    Buscar un elemento en un conjunto es O(1) en promedio, mucho más rápido que en una lista (O(n)).
    Evitar duplicados:
    Los conjuntos no permiten elementos repetidos, por lo que los pares se almacenan una sola vez.
    Ej: En la lista [2,2], sin el uso de conjuntos podríamos obtener múltiples veces el mismo par.
"""