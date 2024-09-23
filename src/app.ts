import express from "express";
import { data } from "./data";

const app = express();
const port = 3000;

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
