const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Welcome to pdf download!<br /><br /> click to download <a href='/api/download/pdf'>/api/download/pdf</a>"
  );
});

app.get("/api/download/pdf", (req, res) => {
  const filePath = path.join(__dirname, "files", "sample-download.pdf");
  res.setHeader("Content-Length", 0);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=sample_download.pdf"
  );
  res.sendFile(filePath);
});

app.listen(5000, console.log(`running in ${5000}`));
