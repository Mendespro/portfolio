const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projetos = [
  { id: 1, titulo: "Projeto 1", descricao: "Descrição do projeto 1", link: "#" },
  { id: 2, titulo: "Projeto 2", descricao: "Descrição do projeto 2", link: "#" },
];

app.get("/api/projetos", (req, res) => {
  res.json(projetos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
