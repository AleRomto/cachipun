function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

//cachipun

function cachipun() {
    var piedra = 0;
    var papel = 1;
    var tijeras = 2;
    var opciones = ["Piedra 🤜", "Papel 🤚", "Tijeras ✌️"];

    //puntos

    var puntosUsuario = 0;
    var puntosMaquina = 0;

//resumen resultadis

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "✨ Resultados ✨ <br><br>";

//cantidad de jugadas    
    var CantidadJugadas = parseInt(prompt("¿Cuántas veces quieres jugar?", 1));
    if (isNaN(CantidadJugadas) || CantidadJugadas <= 0) {
        resultDiv.innerHTML += "Número de jugadas no válido. La partida se cancelará.<br><br>";  //jugadas inválidas
        return;
    }

    for (var n = 1; n <= CantidadJugadas; n++) {
        var opcionMaquina = aleatorio(0, 2);
        
        resultDiv.innerHTML += "Jugada " + n + "<br>";

        //opciones

        var opcionUsuario = parseInt(prompt("¿Qué eliges? \nPiedra 🤜: 0\nPapel 🤚: 1\nTijeras ✌️: 2", 0));

        if (isNaN(opcionUsuario) || opcionUsuario < 0 || opcionUsuario > 2) {
            resultDiv.innerHTML += "😜 No elegiste una opción válida 😜 <br><br>"; //no jugadas inválidas
            n--; 
            continue;
        }

//lo que se eligió, jugadas

        resultDiv.innerHTML += 
            "Elegiste " + opciones[opcionUsuario] + "<br>" +
            "Máquina eligió " + opciones[opcionMaquina] + "<br>";

        if (opcionUsuario == opcionMaquina) {
            resultDiv.innerHTML += "¡Empate!<br><br>";   //empate
        } else if (
            (opcionUsuario == piedra && opcionMaquina == tijeras) ||
            (opcionUsuario == papel && opcionMaquina == piedra) ||
            (opcionUsuario == tijeras && opcionMaquina == papel)
        ) {
            resultDiv.innerHTML += "🥳 ¡Ganaste la Jugada! 🥳 <br><br>"; //winner
            puntosUsuario++;
        } else {
            resultDiv.innerHTML += "😭 ¡Perdiste la Jugada! 😭<br><br>"; //loser
            puntosMaquina++;
        }
    }
//partidas 
    if (puntosUsuario > puntosMaquina) {
        resultDiv.innerHTML += "😎 ¡Felicitaciones, Ganaste la Partida! 😎<br>";
    } else if (puntosMaquina > puntosUsuario) {
        resultDiv.innerHTML += "😱 ¡Perdiste la Partida! 😱<br>";
    } else {
        resultDiv.innerHTML += "🙃 ¡Empate! Sigue intentando 🙃 <br>";
    }
}
