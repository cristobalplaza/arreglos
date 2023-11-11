//Proyecto: Base de datos de alumnos
//Descripción
//Crearán un pequeño proyecto con html, css y js con el cual podrán gestionar a los alumnos de una 
//clase, así como sus calificaciones y sacar datos importantes sobre su performance.
//Requisitos
//1.- Crear un objeto alumno, el cual debe incluir:
// Nombre String
// Apellidos String
// Edad Number
// Grupo (A, B, C) String
// Materias inscritas [] array de strings
// Calificaciones [] array de numbers
//2.- Alta de alumnos (Ingresar alumnos en un arreglo de objetos)
// Una vez creada el objeto, deberán dar de alta alumnos, por defecto lo único que deben 
//pedir para incluir es nombre, apellidos, edad.
//3.- Después deberás crear funciones y vistas que les ayuden a hacer lo siguiente: (En todas debe 
//primero buscar o ubicar al alumno dentro del arreglo de objetos)
// Ingresar cada una de las materias de un alumno con su respectiva calificación.
//4.- Con todo completo, deberán crear e implementar las siguientes funciones:
// Buscar alumno por nombre.
// Buscar alumno por apellido.
// Obtener promedio de notas de un alumno.
// Obtener promedio de edad de un grupo.
// Obtener promedio de edad de todos los alumnos.
// Obtener lista de alumnos ordenados ascendente y descendente por Edad.
// Con los datos almacenados crear otro ordenamiento bajo el parámetro que quieran (Este 
//es el punto extra).

// Arreglo para almacenar los alumnos
const alumnos = [];
const promedioNotasElement = document.getElementById("notas");
const promedioEdadGrupoElement = document.getElementById("promedio-edad-grupo");
const promedioEdadElement = document.getElementById("promedio-edad");
document.addEventListener("DOMContentLoaded", function() {
    const opcionFormulario = document.getElementById("opcion-formulario");
    const opcionListado = document.getElementById("opcion-listado");
    const formulario = document.getElementById("formulario");
    const listaAlumnos = document.getElementById("alumnos-lista");
    const agregarBoton = document.getElementById("agregar");
    const opcionAltaAlumno = document.getElementById("opcion-alta-alumno");
    const seccionAlta = document.getElementById("seccion-alta");
    const opcionBuscarAlumno = document.getElementById("opcion-buscar-alumno");
    const opcionPromedioAlumno = document.getElementById("opcion-promedio-alumno");
    const seccionBuscar = document.getElementById("seccion-buscar");
    const seccionPromedio = document.getElementById("seccion-promedio");
    const buscarAlumnoButton = document.getElementById("buscar");
    
   
    opcionFormulario.addEventListener("click", function() {
        formulario.style.display = "block";
        listaAlumnos.style.display = "none";
        seccionAlta.style.display = "none";
        seccionBuscar.style.display = "none";
        seccionPromedio.style.display = "none";
    });

    opcionListado.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "block";
        seccionAlta.style.display = "none";
        seccionBuscar.style.display = "none";
        seccionPromedio.style.display = "none";
        mostrarListaAlumnos();
    });

    opcionAltaAlumno.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "none";
        seccionAlta.style.display = "block";
        seccionBuscar.style.display = "none";
        seccionPromedio.style.display = "none";
    });

    opcionBuscarAlumno.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "none";
        seccionAlta.style.display = "none";
        seccionBuscar.style.display = "block";
        seccionPromedio.style.display = "none";
    });

    opcionPromedioAlumno.addEventListener("click", function() {
        formulario.style.display = "none";
        listaAlumnos.style.display = "none";
        seccionAlta.style.display = "none";
        seccionBuscar.style.display = "none";
        seccionPromedio.style.display = "block";
    });
    agregarBoton.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let grupo = document.getElementById("grupo").value;
        let materia = document.getElementById("materia").value;
        let edad = parseInt(document.getElementById("edad").value);
        let nota1 = parseInt(document.getElementById("nota1").value);
        let nota2 = parseInt(document.getElementById("nota2").value);
        let nota3 = parseInt(document.getElementById("nota3").value);
        let nota4 = parseInt(document.getElementById("nota4").value);
        let notas = [nota1, nota2, nota3, nota4]; // Almacena las notas en un arreglo.

        // Validar que las notas sean números válidos
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            alert("Por favor, ingrese notas válidas.");
            return;
        }

        // Crear un objeto alumno
        let alumno = {
            nombre: nombre,
            apellido: apellido,
            edad: edad,
            grupo: grupo,
            calificaciones: notas,
            materias: [] // Usar el arreglo de notas
        };

        alumnos.push(alumno);
        alert("Alumno agregado exitosamente");

        ingresarMateria(alumno);

        // Limpiar con reset el formulario después de agregar
        document.getElementById("miFormulario").reset();
    });

    function mostrarListaAlumnos() {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        for (const alumno of alumnos) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerHTML = `
                <strong>Nombre:</strong> ${alumno.nombre}<br>
                <strong>Apellido:</strong> ${alumno.apellido}<br>
                <strong>Edad:</strong> ${alumno.edad}<br>
                <strong>Grupo:</strong> ${alumno.grupo}<br>
                <strong>Calificaciones:</strong> ${alumno.calificaciones.join("-")}<br><br>
            `;
            lista.appendChild(listItem);
        }
    }

    //2.- Alta de alumnos (Ingresar alumnos en un arreglo de objetos)
    // Una vez creada el objeto, deberán dar de alta alumnos, por defecto lo único que deben 
    //pedir para incluir es nombre, apellidos, edad.
    encontrar.addEventListener("click", function() {
        // Solicitar al usuario ingresar datos del nuevo alumno
        let nombre = document.getElementById("nombre-alta").value;
        let apellido = document.getElementById("apellido-alta").value;
        let edad = parseInt(document.getElementById("edad-alta").value);

        // Validar la entrada del usuario
        if (!validarEntradaUsuario(nombre, apellido, edad)) {
            return;
        }

        // Buscar si el alumno ya existe
        if (alumnoExistente(nombre, apellido)) {
            alert("El alumno ya existe.");
        } else {
            // Crear el objeto representando al nuevo alumno
            let nuevoAlumno = {
                nombre: nombre,
                apellido: apellido,
                edad: edad
            };

            // Agregar el nuevo alumno al arreglo
            alumnos.push(nuevoAlumno);

            // Mostrar mensaje de éxito
            mostrarMensaje("Alumno dado de alta correctamente.");

            // Limpiar el formulario o hacer otras acciones necesarias
            limpiarFormulario();

            // Actualizar la lista de alumnos en la interfaz si es necesario
            mostrarListaAlumnos();
        }
    });
    
    buscarAlumnoButton.addEventListener("click", function () {
        let nombreBuscado = document.getElementById("nombre-buscar").value;
        let apellidoBuscado = document.getElementById("apellido-buscar").value;
    
        if (!alumnos) {
            alert("La variable 'alumnos' no está definida.");
            return;
        }
    
        const alumnoEncontrado = buscarAlumnoPorNombreApellido(nombreBuscado, apellidoBuscado);
    
        const divAlumnoEncontrado = document.getElementById("alumno-encontrado");
    
        if (alumnoEncontrado) {
            // Limpia el contenido anterior del div
            divAlumnoEncontrado.innerHTML = "";
    
            // Crea elementos para mostrar la información del alumno
            const nombreElement = document.createElement("p");
            nombreElement.textContent = `Nombre: ${alumnoEncontrado.nombre}`;
    
            const apellidoElement = document.createElement("p");
            apellidoElement.textContent = `Apellido: ${alumnoEncontrado.apellido}`;
    
            const edadElement = document.createElement("p");
            edadElement.textContent = `Edad: ${alumnoEncontrado.edad}`;
    
            const grupoElement = document.createElement("p");
            grupoElement.textContent = `Grupo: ${alumnoEncontrado.grupo}`;
    
            const calificacionesElement = document.createElement("p");
            calificacionesElement.textContent = `Calificaciones: ${alumnoEncontrado.calificaciones.join("-")}`;
    
            // Agrega los elementos al div
            divAlumnoEncontrado.appendChild(nombreElement);
            divAlumnoEncontrado.appendChild(apellidoElement);
            divAlumnoEncontrado.appendChild(edadElement);
            divAlumnoEncontrado.appendChild(grupoElement);
            divAlumnoEncontrado.appendChild(calificacionesElement);
        } else {
            alert("El alumno no existe.");
            // Limpia el contenido del div si el alumno no se encuentra
            divAlumnoEncontrado.innerHTML = "";
        }
    });
             
    //3.- Después deberás crear funciones y vistas que les ayuden a hacer lo siguiente: (En todas debe 
    //primero buscar o ubicar al alumno dentro del arreglo de objetos)
    // Ingresar cada una de las materias de un alumno con su respectiva calificación.   
        
    function ingresarMateria() {
        // Solicitar al usuario ingresar datos del alumno
        let nombreAlumno = document.getElementById("nombre-buscar").value;
        let apellidoAlumno = document.getElementById("apellido-buscar").value;
    
        // Buscar al alumno en el arreglo
        let alumno = buscarAlumnoPorNombreApellido(nombreAlumno, apellidoAlumno);
    
        if (alumno) {
            // El alumno existe, ahora ingresaremos la materia y calificaciones
            const materia = document.getElementById("materia").value;
            let nota1 = parseInt(document.getElementById("nota1").value);
            let nota2 = parseInt(document.getElementById("nota2").value);
            let nota3 = parseInt(document.getElementById("nota3").value);
            let nota4 = parseInt(document.getElementById("nota4").value);
    
            // Crear el objeto representando la materia y sus calificaciones
            let nuevaMateria = {
                nombre: materia,
                calificaciones: [nota1, nota2, nota3, nota4]
            };
    
            // Agregar la materia al arreglo de materias del alumno
            alumno.materias.push(nuevaMateria);
            alert("Materia y calificaciones ingresadas correctamente.");
        } else {
            alert("Alumno no encontrado.");
        }
    }
        
        //4.- Con todo completo, deberán crear e implementar las siguientes funciones:
        // Buscar alumno por nombre.
        // Buscar alumno por apellido.
        function buscarAlumnoPorNombreApellido(nombre, apellido) {
            return alumnos.find(alumno => alumno.nombre === nombre && alumno.apellido === apellido);
        }


        // Obtener promedio de notas de un alumno.
        // Obtener promedio de edad de un grupo.
        // Obtener promedio de notas de un alumno        

        document.getElementById("buscarPromedio").addEventListener("click", function() {
            const promedioNotasElement = document.getElementById("notas");

            function obtenerPromedioGeneral(alumnos) {
                if (alumnos.length === 0) {
                    console.log("No hay alumnos en el grupo.");
                    return 0;
                }
            
                let totalNotas = 0;
                let totalMaterias = 0;
            
                // Recorrer cada alumno y sus calificaciones
                for (const alumno of alumnos) {
                    if (alumno.calificaciones && alumno.calificaciones.length > 0) {
                        totalNotas += alumno.calificaciones.reduce((suma, nota) => suma + nota, 0);
                        totalMaterias += alumno.calificaciones.length;
                    }
                }
            
                if (totalMaterias > 0) {
                    const promedio = totalNotas / totalMaterias;
                    promedioNotasElement.textContent = `Promedio de Notas: ${promedio.toFixed(2)}`;
                    return promedio;
                } else {
                    console.log("Ningún alumno tiene calificaciones.");
                    promedioNotasElement.textContent = "Promedio de Notas: 0";
                    return 0;
                }
            }
            obtenerPromedioGeneral(alumnos);
            // Obtener promedio de edad de un grupo
            const promedioEdadGrupoElement = document.getElementById("promedio-edad-grupo");
            function obtenerPromedioEdadGrupo(alumnos) {
                if (alumnos.length === 0) {
                    console.log("No hay alumnos en el grupo.");
                    return 0;
                }
            
                let sumaEdades = 0;
            
                // Sumar las edades de todos los alumnos
                for (const alumno of alumnos) {
                    sumaEdades += alumno.edad;
                }
            
                // Calcular el promedio de edad
                const promedioEdad = sumaEdades / alumnos.length;
                return promedioEdad.toFixed(2);
            }
            const promedioGrupo = obtenerPromedioEdadGrupo(alumnos);
            promedioEdadGrupoElement.textContent = `Promedio de Edad del Grupo:${promedioGrupo}`;

            // Obtener promedio de edad de todos los alumnos.
            // Obtener lista de alumnos ordenados ascendente y descendente por Edad.
            const promedioEdadElement = document.getElementById("promedio-edad");
            function obtenerPromedioEdad(alumnos) {
                // Verificar si el arreglo de alumnos no está vacío
                if (alumnos.length === 0) {
                    return "No hay alumnos en el arreglo";
                }
            
                // Calcular la suma de todas las edades
                let sumaEdades = alumnos.reduce((acumulador, alumno) => acumulador + alumno.edad, 0);
            
                // Calcular el promedio dividiendo la suma de edades por la cantidad de alumnos
                let promedio = sumaEdades / alumnos.length;
                
                return promedio;
            }
            
            // Ejemplo de uso
            const promedio = obtenerPromedioEdad(alumnos);
            promedioEdadElement.textContent = `Promedio de Edad: ${promedio.toFixed(2)}`;
        })
});        