document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formulario');
  const input = document.getElementById('enlace');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const url = input.value.trim();

    if (!url || !url.includes('streamwish')) {
      resultado.innerHTML = '<p style="color: red;">❌ Ingresa un enlace válido de StreamWish.</p>';
      return;
    }

    const codificado = btoa(url); // codifica en Base64
    const enlaceFinal = `player.html?url=${codificado}`;

    resultado.innerHTML = `
      <p>✅ Enlace generado:</p>
      <input type="text" value="${enlaceFinal}" readonly style="width:100%; padding:5px;" />
      <p><a href="${enlaceFinal}" target="_blank">🔗 Abrir reproductor</a></p>
    `;
  });
});
