// Al hacer clic en el botón "Validar"
document.getElementById('validar').addEventListener('click', verificarCadena);
document.getElementById('limpiar').addEventListener('click', limpiarTodo);

function verificarCadena() {
    // Obtener la cadena ingresada por el usuario
    const cadena = document.getElementById('inputString').value.trim(); // Limpia los espacios en blanco
    
    if (cadena === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Entrada vacía',
            text: 'Por favor, ingresa una cadena para verificar.',
        });
        return;
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
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q1";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q1":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q1";
                } else if (simbolo === '.' || simbolo === '-') {
                    estado = "q2";
                } else if (simbolo === '@') {
                    estado = "q3";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q2":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q1";
                } else if (simbolo === '.' || simbolo === '-') {
                    estado = "q2";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q3":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo)) {
                    estado = "q6";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q6":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q6";
                } else if (simbolo === '-') {
                    estado = "q7";
                } else if (simbolo === '.') {
                    estado = "q4";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q7":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q6";
                } else if (simbolo === '-') {
                    estado = "q7";
                } else if (simbolo === '.') {
                    estado = "q4";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q4":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo)) {
                    estado = "q5";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q5":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q5";
                } else if (simbolo === '.') {
                    estado = "q4";
                } else if (simbolo === '-') {
                    estado = "q8";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q8":
                if (/[a-zA-Z]/.test(simbolo) || /[0-9]/.test(simbolo) || simbolo === '_') {
                    estado = "q5";
                } else if (simbolo === '-') {
                    estado = "q8";
                } else if (simbolo === '.') {
                    estado = "q4";
                } else {
                    estado = "q∅"; // Estado de error
                }
                break;
            case "q∅":
                estado = "q∅"; // Estado de error
                break;
            default:
                estado = "q∅"; 
        }

        estadoNuevo = estado;

        document.getElementById('estadoActual').innerText = estadoNuevo;

        // Registrar el paso en el recorrido
        recorrido.push(`
            δ(${estadoAnterior}, '${simbolo}') = ${estadoNuevo}
        `);
    }


    // Verificación final
    const aceptacion = (estado === "q5"); // Devuleve true si el estado final es de aceptación o false en caso contrario
    return { aceptacion, recorrido };
}

function limpiarTodo() {
    // Limpiar la entrada del usuario
    document.getElementById('inputString').value = '';
    // Limpiar el log del proceso
    document.getElementById('recorrido').innerHTML = `Esperando entrada...`;
    // Reiniciar el estado actual
    document.getElementById('estadoActual').innerText = 'Esperando...';
}