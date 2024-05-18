const express = require("express");
const app = express();
const PORT = 3000;


// GETs für die HTML-Sites
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/home.html");
});
app.get("/kontakt", (req, res) => {
    res.sendFile(__dirname + "/kontakt.html");
});
app.get("/aboutUs", (req, res) => {
    res.sendFile(__dirname + "/aboutUs.html");
});
app.get("/impressum", (req, res) => {
    res.sendFile(__dirname + "/impressum.html");
});
app.get("/datenschutz", (req, res) => {
    res.sendFile(__dirname + "/datenschutz.html");
});



// Server aufrufen

/* app.listen(PORT, () => {
    console.log(`Der Server wurde gestartet auf Port: ${PORT}`);
  }); */

app.listen(PORT, (req, res) => {
    console.log(`Server gestartet, unter: http://localhost:${PORT}/home`);
  })  