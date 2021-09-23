const express = require("express");
const router = require("./routes/route");
const app = express();

const PORT = 3004;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log("Server Running 🚀 !");
});