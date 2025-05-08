// habiltiar boton
document.addEventListener('DOMContentLoaded', () => {

    activarBotonConsent('aceptarpolitica', 'form-registro');

    activarBotonConsent('aceptarpolitica', 'form-contacto');
  });
  
  function activarBotonConsent(idCheckbox, idFormulario) {
    const checkbox = document.getElementById(idCheckbox);

    const formulario = document.getElementById(idFormulario);

    if (!checkbox || !formulario) return;
      const boton = formulario.querySelector('button[type="submit"]');
      checkbox.addEventListener('change', () => {
        boton.disabled = !checkbox.checked;
    });
  }
  