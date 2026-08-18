//const aiService = require("../services/ai.service");
import aiService from "../services/ai.service.js";
export const getReview = async (req,res) =>{
    const code = req.body.code;

    if(!code)
    {
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);

    res.send(response);

}