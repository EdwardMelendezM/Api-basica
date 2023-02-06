## MONGO DB

    - OPERACIONES CON COLECCIONES

        - collection.save:guardar/actualizar un documente
        - collection.insert:insertar un documento
        - collection.findOne:recuperar un documento
        - collection.find:recuperar varios documentos
        - collection.remove:borrar uno o varios documentos
        - collection.drop:eliminar una coleccion
        - collection.rename:cambia el nombre de coleccion
        - collection.count:numero de documentos

    - OPERADORES DE BUSQUEDA

        - $gt / $gte : mayor / mayor o igual
        - $lt / $lte : menor / menor o igual
        - $ne : diferente
        - $in / $nin: en /no en array de valores.

    - OPERADORES LOGICOS

        - $or : se cumple alguna condicion
        - $and: se cumplen todas las clausulas
        - $nor: el resultado opuesto
        - $not: no se cumplen todas las clausula

    - CONSULTAS

        - El operador find(...) devuelve un cursor
        - cursor.count(cb) : cantidad de documentos
        - cursor.limit(n) : limitar a "n" coumentos
        - cursor.skip(n) : saltarse los n primeros documentos
        - cursor.nextObject(cb): siguiente documento
        - cursor.each(cb): para cada documento en orden
        - cursor.toArray(cb): convierte el cursor en array

    - ORDENACION
        - cursor.sort(opciones,[cb])
        - Ordenar los resultados
        - Ordernar del tipo
            -[["campo"],1],[["otroCampo",-1]]
            - 1 para ascendente
            - (-1) para descentende
