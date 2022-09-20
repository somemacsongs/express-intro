import express from "express";
import data from "../data.js";

const movieRouter = express.Router();

movieRouter.post("/create-movie", (req,res) => {
    data.push(req.body)
    return res.json(data);
})

movieRouter.get("/:name", (req, res)=>{
    const {name} = req.params.name;
    const getMovie = data.filter((current)=>current.name===name);
    return res.json(getMovie);
})

movieRouter.delete("/:name", (req, res)=>{
    const {name} = req.params.name;
    const selectedMovie = {"name": name};
    const index = data.indexOf(selectedMovie);
    data.splice(index,1)
    return res.json(data);
})


export {movieRouter};