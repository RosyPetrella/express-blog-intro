// Creiamo il progetto base con una rotta /
// che ritorna un testo semplice con scritto ”Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare
// titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
// Configuriamo gli asset statici sull’applicazione in modo che
// si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("public"));

const posts = [
  {
    title: "Ciambellone",
    content: "Ricetta Ciambellone",
    img: "/images/ciambellone.jpeg",
    tags: ["ciambella", "ricetta", "dolce"],
  },
  {
    title: "Cracker alla barbabietola",
    content: "Ricetta Cracker alla barbabietola",
    img: "/images/cracker_barbabietola.jpeg",
    tags: ["cracker", "snack", "salato"],
  },
  {
    title: "Pane fritto dolce",
    content: "Ricetta Pane fritto dolce",
    img: "/images/pane_fritto_dolce.jpeg",
    tags: ["pane", "fritto", "dolce"],
  },
  {
    title: "Pasta alla barbabietola",
    content: "Ricetta Pasta alla barbabietola",
    img: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "verdura", "salato"],
  },
  {
    title: "Torta Paesana",
    content: "Ricetta Torta Paesana",
    img: "/images/torta_paesana.jpeg",
    tags: ["torta", "paesana", "dolce"],
  },
];

app.listen(port, () => {
  console.log(`Server del mio blog`);
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  res.json(posts);
});
