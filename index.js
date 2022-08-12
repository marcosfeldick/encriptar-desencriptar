var botonEncriptar = document.querySelectorAll(".encriptar")[0]; 
var botonDesencriptar = document.querySelectorAll(".desencriptar")[0];
var botonCopiar = document.querySelectorAll(".copiar")[0];
var mensajeCaracteres = document.querySelectorAll(".mensaje-caracteres")[0];

botonEncriptar.addEventListener("click", () => {
  encriptarTexto();
});

botonDesencriptar.addEventListener("click", () => {
  desencriptarTexto();
});

botonCopiar.addEventListener("click", () => {
  copiarTexto();
});

function encriptarTexto() {
  let inputUsuario = document.querySelectorAll("#input-usuario")[0].value;
  let inputEncriptado = "";
  let caracteresEspeciales = inputUsuario.search(/[^a-zñ ]+/g);

  if (inputUsuario == "") {
    location.reload();
  } else {
    if (caracteresEspeciales == -1) {
      for (i = 0; i <= inputUsuario.length; i++) {
        switch (inputUsuario.substring(i, i + 1)) {
          case "a":
            inputEncriptado += "ai";
            break;
          case "e":
            inputEncriptado += "enter";
            break;
          case "i":
            inputEncriptado += "imes";
            break;
          case "o":
            inputEncriptado += "ober";
            break;
          case "u":
            inputEncriptado += "ufat";
            break;
          default:
            inputEncriptado += inputUsuario.substring(i, i + 1);
        }
      }
      mensajeCaracteres.style.visibility = "hidden";
      botonCopiar.style.visibility = "visible";
      document.getElementById("seccion-resultado").innerHTML =
        `<textarea class="mensaje-final">` + inputEncriptado + `</textarea>`;
    } else {
      mensajeCaracteres.style.visibility = "visible";
      setTimeout(() => {
        mensajeCaracteres.style.visibility = "hidden";
      }, 3000);
    }
  }
}

function desencriptarTexto() {
  let inputUsuario = document.querySelectorAll("#input-usuario")[0].value;
  let caracteresEspeciales = inputUsuario.search(/[^a-zñ ]+/g);
  let inputDesencriptado = "";

  if (inputUsuario == "") {
    location.reload();
  } else {
    if (caracteresEspeciales == -1) {
      for (i = 0; i <= inputUsuario.length; i++) {
        if (inputUsuario.substring(i, i + 2) == "ai") {
          inputDesencriptado += "a";
          i = i + 1;
        } else if (inputUsuario.substring(i, i + 5) == "enter") {
          inputDesencriptado += "e";
          i = i + 4;
        } else if (inputUsuario.substring(i, i + 4) == "imes") {
          inputDesencriptado += "i";
          i = i + 3;
        } else if (inputUsuario.substring(i, i + 4) == "ober") {
          inputDesencriptado += "o";
          i = i + 3;
        } else if (inputUsuario.substring(i, i + 4) == "ufat") {
          inputDesencriptado += "u";
          i = i + 3;
        } else {
          inputDesencriptado += inputUsuario.substring(i, i + 1);
        }
      }
      botonCopiar.style.visibility = "visible";
      document.getElementById("seccion-resultado").innerHTML =
        `<textarea class="mensaje-final">` + inputDesencriptado + `</textarea>`;
    } else {
      mensajeCaracteres.style.visibility = "visible";
      setTimeout(() => {
        mensajeCaracteres.style.visibility = "hidden";
      }, 3000);
    }
  }
}

function copiarTexto() {
  let copiar = document.querySelectorAll(".mensaje-final")[0];
  navigator.clipboard.writeText(copiar.value);
  botonCopiar.innerText = "Copiado!";
  setTimeout(() => {
    botonCopiar.innerText = "Copiar";
  }, 1000);
}
