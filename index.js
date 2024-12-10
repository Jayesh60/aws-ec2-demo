const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(5000, () => {
    console.log("Express server running on port 5000");
});