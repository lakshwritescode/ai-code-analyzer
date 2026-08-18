//require('dotenv').config()
import "dotenv/config";
import app from "./src/app.js";
//const app = require('./src/app');

app.listen(3000 , () => {

    console.log(' Sirji Server is running on http://localhost:3000 ')
})