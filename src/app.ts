import express from "express";
import cors from "cors";
import { players } from "./data";

export const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(express.json());
app.use(cors(corsOptions));

app.put("/tictactoe", (req, res) => {
  const { userId } = req.body;

  let findPlayer = players.find((id) => {
    return id.userId === userId;
  });

  if (!findPlayer) {
    return res.sendStatus(404);
  }

  return res.send(findPlayer.playingSymbol).status(200);
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
