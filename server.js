import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { getAllRecipes } from "./controller.js";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.get('/recipes', getAllRecipes);

server.listen(process.env.PORT, () => console.log(`server on ${process.env.PORT}`));