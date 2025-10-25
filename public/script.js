const form = document.getElementById("comentarioForm");
const listaComentarios = document.getElementById("listaComentarios");

// Cargar comentarios al iniciar
async function cargarComentarios() {
  const res = await fetch("/comentarios");
  const data = await res.json();
  listaComentarios.innerHTML = ""; /*limpiar la lista antes de cargar*/
  data.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.nombre}: ${c.mensaje}`;
    listaComentarios.appendChild(li);
  });
}

// Enviar comentario
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value; /*obtener el valor del campo nombre*/
  const mensaje = document.getElementById("mensaje").value; /*obtener el valor del campo mensaje*/

  await fetch("/comentarios", { /*enviar los datos al servidor*/
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, mensaje })
  });

  form.reset();
  cargarComentarios();
});

// Inicializar
cargarComentarios();
