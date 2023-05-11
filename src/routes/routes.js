const express = require("express");
const router = express.Router();
const routesCtrl = require("../controllers/routes.controller");
const multer = require("multer");

const upload = multer({ dest: "./src/pdf/" });

router.get("/", routesCtrl.renderLobby);

router.post("/upload", upload.single("pdfFile"), routesCtrl.upload);

router.get("/process/:pages", routesCtrl.process);

module.exports = router;
