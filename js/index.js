function verificar() {
    // Capturamos los datos
    let edad = document.getElementById('edad').value;
    let tieneEntrada = document.getElementById('ticket').value;
    let mensaje = document.getElementById('mensaje');

    // Convertimos la edad a número
    edad = Number(edad);

    // Primer nivel: Verificar si es mayor de edad
    if (edad >= 18) {
        
        // Segundo nivel (Anidado): Verificar si tiene entrada
        if (tieneEntrada === "si") {
            mensaje.textContent = "Puedes entrar.";
        } else {
            mensaje.textContent = "No puedes entrar: te falta la entrada.";
        }

    } else {
        // Respuesta si el primer nivel falla
        mensaje.textContent = "No puedes entrar: eres menor de edad.";
    }
}

