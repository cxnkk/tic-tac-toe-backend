import express from "express";
import cors from "cors";
import { data } from "./data";

export const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
