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
  {
    name: "Mayk Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "111223456789",
    bio:
      "Um instrutor focado em ajudar as pessoas a começar a programar para a web - #html #css #javascript #sql #react #nodejs #fullstack.",
    subject: "Matemática",
    cost: "20",
    weekday: "0",
    time_from: [720],
    time_to: [1400],
  },
  {
    name: "Mayk Brito",
    avatar:
      "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "111223456789",
    bio:
      "Um instrutor focado em ajudar as pessoas a começar a programar para a web - #html #css #javascript #sql #react #nodejs #fullstack.",
    subject: "Matemática",
    cost: "20",
    weekday: "0",
    time_from: [720],
    time_to: [1400],
  },
];

const express = require("express");
const server = express();

//configurar nunjucks
const nunjucks = require("nunjucks");
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
    cost filters = req.query
    return res.render("study.html", { proffys , filters});
  })
  .get("/give-classes", (req, res) => {
    return res.render("give-classes.html");
  })
  .listen(5500);
