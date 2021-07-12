import express from "express";
import { join } from "path";
import soketIO from "soket.io";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListen = () =>
  console.log(`✅ server Running: http://localhost:4000`);

app.listen(PORT, handleListen);
