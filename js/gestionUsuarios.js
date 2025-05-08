let usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || {
  moises: {
    nombre: "Moisés",
    correo: "moises@ejemplo.com",
    contrasena: "12345",
  },
  user: {
    nombre: "Usuario",
    correo: "usuario@user.com",
    contrasena: "12345",
  },
};

const CLAVEUSUARIO = "usuarioActivo";
const CLAVEUSUARIOLS = "usuariosRegistrados";

document.addEventListener("DOMContentLoaded", () => {
  iniciarNav();
  gestionarForm();
});



function iniciarNav() {
  const usuarioActivo = JSON.parse(localStorage.getItem(CLAVEUSUARIO));
  const btnIniciar = document.getElementById("nav-iniciar-sesion");
  const btnRegistro = document.getElementById("nav-registrarse");
  const btnMisEventos = document.getElementById("nav-mis-eventos");
  const btnCerrar = document.getElementById("nav-cerrar-sesion");

  if (usuarioActivo) {
    btnIniciar.style.display = "none";
    btnRegistro.style.display = "none";
    btnMisEventos.style.display = "";
    btnCerrar.style.display = "";
    btnMisEventos.textContent = `Eventos de ${usuarioActivo.nombre}`;
    btnCerrar.addEventListener("click", cerrarSesion);
  } else {
    btnIniciar.style.display = "";
    btnRegistro.style.display = "";
    btnMisEventos.style.display = "none";
    btnCerrar.style.display = "none";
  }
}

function gestionarForm() {
  const formLogin = document.getElementById("form-login");

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      autenticarUsuario();
    });
  }

}

function autenticarUsuario() {
  const email = document.getElementById("login-email").value.trim();
  const contrasena = document.getElementById("login-contrasena").value;

  const claveUsuario = Object.keys(usuariosRegistrados).find(
    (key) => usuariosRegistrados[key].correo === email
  );
  
  // verificar si existe
  if (!claveUsuario) {
    alert("El usuario no existe");
    return;
  }

  // verificar contraseña
  if (usuariosRegistrados[claveUsuario].contrasena !== contrasena) {
    alert("Contraseña incorrecta");
    return;
  }

  localStorage.setItem(
    CLAVEUSUARIO,
    JSON.stringify({
      usuario: claveUsuario,
      nombre: usuariosRegistrados[claveUsuario].nombre,
    })
  );


  window.location.href = "mis-eventos.html";
}

function cerrarSesion() {
  localStorage.removeItem(CLAVEUSUARIO);


  window.location.href = "../index.html";
}
