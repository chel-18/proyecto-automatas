// Al hacer clic en el botón "Validar"
document.getElementById('validar').addEventListener('click', verificarCadena);
document.getElementById('limpiar').addEventListener('click', limpiarTodo);

function verificarCadena() {
    // Obtener la cadena ingresada por el usuario
    let cadena = document.getElementById('inputString').value.trim(); // Limpia los espacios en blanco
    
    if (cadena === '') {
        cadena = 'ε'; // Epsilon si la cadena está vacía
    }

    const { aceptacion, recorrido } = reconocerCadena(cadena);
    document.getElementById('recorrido').innerHTML = recorrido.join('<br>') + `<br><strong>Estado final:</strong> ${ aceptacion ? 'Aceptación' : 'Rechazo' }`;
    

    if (aceptacion) {
        Swal.fire({
            icon: 'success',
            title: 'Cadena Válida',
            text: `La cadena "${cadena}" es válida según el autómata.`,
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Cadena Inválida',
            text: `La cadena "${cadena}" no es válida según el autómata.`,
        });
    }
}

function reconocerCadena(cadena) {
    // Estados iniciales
    let estado = "q0";
    const recorrido = [];

    // Bucle para iterar en cada símbolo de la cadena
    // Chelsi => C, h, e, l, s, i
    for (let simbolo of cadena) {
        let estadoAnterior = estado;
        let estadoNuevo = "";

        // Switch para manejar las transiciones de estados
        switch (estado) {
            case "q0":
                if (simbolo === 'ε') {
                    estado = "q0";
                } else if (simbolo === '1') {
                    estado = "q1";
                } else if (simbolo === '2') {
                    estado = "q2";
                } else if (simbolo === '3') {
                    estado = "q0";
                } else {
                    estado = "qØ"; // Estado de error
                }
                break;
            case "q1":
                if (simbolo === '1') {
                    estado = "q2";
                } else if (simbolo === '2') {
                    estado = "q0";
                } else if (simbolo === '3') {
                    estado = "q1";
                } else {
                    estado = "qØ"; // Estado de error
                }
                break;
            case "q2":
                if (simbolo === '1') {
                    estado = "q0";
                } else if (simbolo === '2') {
                    estado = "q1";
                } else if (simbolo === '3') {
                    estado = "q2";
                } else {
                    estado = "qØ"; // Estado de error
                }
                break;
            case "qØ":
                estado = "qØ"; // Estado de error permanece
                break;
            default:
                estado = "q∅"; 
        }

        estadoNuevo = estado;

        document.getElementById('estadoActual').innerText = estadoNuevo !== '' ? estadoNuevo : 'q0';
        console.log(estadoNuevo);

        // Registrar el paso en el recorrido
        recorrido.push(`
            δ(${estadoAnterior}, '${simbolo}') = ${estadoNuevo}
        `);
    }


    // Verificación final
    const aceptacion = (estado === "q0"); // Devuleve true si el estado final es de aceptación o false en caso contrario
    return { aceptacion, recorrido };
}

function limpiarTodo() {
    // Limpiar la entrada del usuario
    document.getElementById('inputString').value = '';
    // Limpiar el log del proceso
    document.getElementById('recorrido').innerHTML = `Ingrese una cadena de números {1, 2, 3}.<br><br> El autómata sumará los dígitos y verificará si el total es divisible por 3.`;
    // Reiniciar el estado actual
    document.getElementById('estadoActual').innerText = 'Esperando...';
}