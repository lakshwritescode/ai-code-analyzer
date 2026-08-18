//const express = require('express');
import express from "express"
//const aiRoutes = require("./routes/ai.routes");
import aiRoutes from "./routes/ai.routes.js"
import cors from "cors"
const app = express();

app.get( '/' ,(req , res ) =>
{
    res.send("helloworld");
})
app.use(cors())
app.use(express.json());
app.use("/ai", aiRoutes);

export default app;