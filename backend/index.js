import express from "express";
import { home } from "./controllers/user.controllers.js";

const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to the Cash Point API");
});

app.get("/dev",(req,res)=>{
    res.send("Developmemt mode ")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
