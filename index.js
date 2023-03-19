const express = require("express");
const { connect } = require("./src/config/connectDB");
const { initKnowledgeRoutes } = require("./src/controller/knowledgeController");
const cors = require("cors");
var morgan = require("morgan");

const port = 3001;

const app = express();

connect();

app.use(morgan("combined"));

app.use(
  cors({
    origin: "*",
  })
);

var server = require("http").createServer(app);

var io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  io.emit("connected", socket.id);

  socket.on("send", (e) => {
    io.emit("sended", { mes: e.mes, user: e.user });
  });

  socket.on("ping", () => {
    io.emit("pingC", "");
  });

  socket.on("pong", () => {
    io.emit("pongC", "");
  });

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

app.use(express.json());

initKnowledgeRoutes(app);

server.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
