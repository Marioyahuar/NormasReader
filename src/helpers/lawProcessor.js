const fs = require("fs");
const pdf = require("pdf-parse");
const generator = require("./generator");
const lawProcessor = {};
//let dataBuffer = fs.readFileSync(`./pdf/ex8.pdf`);

async function procesarLaws(dataBuffer, page) {
  const DEFAULT_OPTIONS = {
    max: 5,
  };
  const data = await pdf(dataBuffer, DEFAULT_OPTIONS);
  const dataByPage = data.text.split("\n\n");
  let response = await generator.getLaws(dataByPage[page]);
  //console.log("PAGINA: ", i);
  console.log("LEYES: ", response);

  return response;
}
/*
async function getDataByPages(i) {
  const data = await pdf(dataBuffer[i]);
  const dataByPage = data.text.split("\n\n");
  console.log(dataByPage.length);
}
*/
lawProcessor.procesarLaws = procesarLaws;

module.exports = lawProcessor;
