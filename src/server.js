const proffys = [
  {
    name: "Diego Fernandes",
    avatar:
      "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "111223456789",
    bio:
      "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: "0",
    time_from: [720],
    time_to: [1400],
  },
];
const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
// funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

const express = require("express");
const server = express();

//configurar nunjucks
const nunjucks = require("nunjucks");
const { query } = require("express");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar arquivos estaticos
server
  .use(express.static("public"))

  .get("/", (req, res) => {
    return res.render("index.html");
  })
  .get("/study", (req, res) => {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays });
  })

  .get("/give-classes", (req, res) => {
    const dados = req.query;
    const isNotEmpty = Object.keys(dados).length > 0;
    //se tiver dados
    if (isNotEmpty) {
      dados.subject = getSubject(dados.subject);
      // adicionar a lista proffys
      proffys.push(dados);
      return res.redirect("/study");
    }
    // Se não, mostra a pagina

    return res.render("give-classes.html", { subjects, weekdays });
  })
  .listen(5500);
