import express from "express";
import {movieRouter} from "./Routes/movie.routes.js"

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    return res.json("Voce deu get em http://localhost:4000/")
})

app.use("/movie", movieRouter);

app.listen(4000, ()=>{
    console.log("To rodando ok");
})