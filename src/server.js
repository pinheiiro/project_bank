const express = require("express");
const route = require("./routes/route");
const app = express();

const PORT = 3004;

app.use(express.json());

app.use(route);

app.listen(PORT, () => {
    console.log("Server Running 🚀 !");
});