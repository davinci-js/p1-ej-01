"use strict";

function click() {

  /* Obtiene el limite inferior */
  let inf = parseFloat(document.getElementById("inf-limit").value);
  /* Obtiene el limite inferior */
  let inf = parseFloat(document.getElementById("sup-limit").value);
  /* Obtiene el numero del cuadro de entrada */
  let numero = parseFloat(document.getElementById("input").value);
  
  /* TODO */

}

/* Llama la funcion click al clickear del boton */
document.getElementById("button").addEventListener("click", click);
