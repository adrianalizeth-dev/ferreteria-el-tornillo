'use strict';
const formulario = document.getElementById('formulario-contacto');
const nombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');
const resultado = document.getElementById('resultado');
function validar(campo, texto) {
  document.getElementById('error-' + campo.id).textContent = texto;
  campo.setAttribute('aria-invalid', texto ? 'true' : 'false');
}
formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  resultado.textContent = '';
  const errorNombre = Array.from(nombre.value.trim()).length < 2;
  const errorMensaje = mensaje.value.trim().length === 0;
  validar(nombre, errorNombre ? 'Completa tu nombre con al menos 2 caracteres.' : '');
  validar(mensaje, errorMensaje ? 'Escribe el producto o la consulta que tienes.' : '');
  if (errorNombre || errorMensaje) {
    (errorNombre ? nombre : mensaje).focus();
    return;
  }
  resultado.textContent = '¡Validación exitosa, ' + nombre.value.trim() + '! Esta es una demostración: tu mensaje no se ha enviado ni guardado.';
});
[nombre, mensaje].forEach(function (campo) {
  campo.addEventListener('input', function () {
    validar(campo, '');
    resultado.textContent = '';
  });
});
