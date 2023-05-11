const routesCtrl = {};
const lawProcessor = require("../helpers/lawProcessor");
const fs = require("fs");

routesCtrl.renderLobby = (req, res) => {
  res.render("index");
};

routesCtrl.upload = (req, res) => {
  req.session.filePath = req.file.path;
  res.send("PDF uploaded");
};

routesCtrl.process = async (req, res) => {
  const filePath = req.session.filePath;
  const { pages } = req.params;
  let dataBuffer = fs.readFileSync(filePath);
  const response = await lawProcessor.procesarLaws(dataBuffer, pages);
  console.log(response);
  res.send(response);
};

module.exports = routesCtrl;
