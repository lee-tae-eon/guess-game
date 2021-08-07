import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListen = () =>
  console.log(`✅ server Running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListen);

const io = socketIO(server);

io.on("connection", (socket) => {
  socket.on("helloguys", () => console.log("Client: Hello"));
});
