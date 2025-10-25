const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Render asigna el puerto automaticamente
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Array para guardar comentarios temporalmente
let comentarios = [];

// Ruta para obtener comentarios
app.get("/comentarios", (req, res) => {
  res.json(comentarios);
});

// Ruta para agregar comentarios
app.post("/comentarios", (req, res) => {
  const { nombre, mensaje } = req.body;
  if (nombre && mensaje) {
    comentarios.push({ nombre, mensaje });
  }
  res.json(comentarios);
});

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
