// Formulario FAQ
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();

// Temas
const botaoTema = document.getElementById('botao-tema');
botaoTema.addEventListener('click', tema)
function tema() {
  let bodyCor = document.body;
  let estilos = window.getComputedStyle(bodyCor);
  let estilo = estilos.getPropertyValue("background-color")
  const claroTema = "rgb(244, 239, 223)"
  if (estilo === claroTema) {
    document.getElementById('botao-tema').style.backgroundColor = "#294669";
    document.getElementById('sun-tema').style.color = "#FFFFFF";
    bodyCor.style.backgroundColor = "#294669";
  } else {
    document.getElementById('botao-tema').style.backgroundColor = "#F4EFDF";
    document.getElementById('sun-tema').style.color = "#000000";
    bodyCor.style.backgroundColor = "#F4EFDF";
  }
}
