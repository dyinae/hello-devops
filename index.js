const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Ismét egy megváltozott üzenet!! Muadib");
});

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});

