const express = require("express");
const analyticsRoutes = require("./routes/analytics");

const app = express();

app.use(express.json());

app.use("/api/dashboard", analyticsRoutes);

app.listen(4000, () => {
    console.log("Servidor iniciado");
});