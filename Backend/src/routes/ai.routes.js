//const express = require('express');
import express from "express";
//const aiController = require("../controller/ai.controller.js");
import { getReview } from "../controller/ai.controller.js";
const router = express.Router();

router.post("/get-review", getReview);



export default router;