const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", girar);
giros = 0;

function girar() {
    let rand = Math.random() * 7100;
    console.log(rand)
    calcular(rand);
    
  function premio(premios) {
    document.querySelector(".elije").innerHTML = "Tu castigo es : " + premios;
  }

  function calcular(rand) {
    valor = rand / 360;
    console.log(valor)
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
    console.log(valor)
    ruleta.style.transform = "rotate(" + rand + "deg)";

    setTimeout(() => {
      // switch (true) {
      //   // 1
      //   case valor > 0 && valor <= 34:
      //     premio("1. Quitarse 10 puntos y ponerlos sobre la mesa, el siguiente jugador que saca el numero X se lleva los puntos (incluye un banco de puntos)");
      //     break;
      //   //  2
      //   case valor > 34 && valor <= 64:
      //     premio("4. ¿Estas sintiendo mucha hambre? Ahora solo te moverás con un dado N turnos");
      //     break;
      //   //  3
      //   case valor > 64 && valor <= 79:
      //     premio("14. Tu compañero o tu pierden 15 puntos");
      //     break;
      //   //  4
      //   case valor > 79 && valor <= 96:
      //     premio("9. Regresa al inicio del tablero");
      //     break;
      //   // 5
      //   case valor > 96 && valor <= 117:
      //     premio("10. En el siguiente turno retrocede los putnos que te saldrán en el/los dado(s)");
      //     break;
      //   // 6
      //   case valor > 117 && valor <= 156:
      //     premio("2. Avanza la mitad del numero de casillas por avanzar en el siguiente turno");
      //     break;
      //   // 7
      //   case valor > 156 && valor <= 188:
      //     premio("6. El jugador o el equipo del jugador pierde la cantidad de puntos que le salga al tirar el dado");
      //     break;
      //   // 8
      //   case valor > 188 && valor <= 206:
      //     premio("11. Te han encerrado en tu bote de basura, pierdes todos tus puntos");
      //     break;
      //   // 9
      //   case valor > 206 && valor <= 234:
      //     premio("3. N turnos impares serán anulados");
      //     break;
      //   //  10
      //   case valor > 234 && valor <= 257:
      //     premio("8. Oh no, los dueños se han mudado, la casa se moverá");
      //     break;
      //   //  10
      //   case valor > 257 && valor <= 273:
      //     premio("15. No recibes puntos de la próxima pregunta o reto que completes");
      //     break;
      //   //  12
      //   case valor > 273 && valor <= 304:
      //     premio("5. Pierdes el siguiente turno");
      //     break;
      //   // 13
      //   case valor > 304 && valor <= 334:
      //     premio("7. Pierde la mitad de puntos");
      //     break;
      //   // 14
      //   case valor > 334 && valor <= 351:
      //     premio("12. El jugador pierde 10 puntos, pero si es en equipo, tendrá que elegir que jugador de su equipo perderá los 10 puntos");
      //     break;
      //   // 15
      //   case valor > 35 && valor <= 360:
      //     premio("13. Todos los jugadores (de su grupo) pierden los puntos de esta ronda (todos los jugadores tirararon dados)");
      //     break;
        
      // }
    }, 4000);
  }
}
