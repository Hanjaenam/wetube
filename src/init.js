import "@babel/polyfill"
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000;

console.log(process.env.PORT, PORT)

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(4000, handleListening);
