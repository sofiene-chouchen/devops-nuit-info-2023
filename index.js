const express = require("express");
const cors = require("cors");
var categorie = require("./routes/Categorie");
var job = require("./routes/Job");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/api/categorie", categorie);
app.use("/api/job", job);

app.listen(process.env.PORT, () => {
  console.log(`serveur run in port ${process.env.PORT}`);
});
