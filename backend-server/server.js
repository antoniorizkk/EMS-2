const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const cors = require('cors')

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
app.use("/api/employees", require("./routes/employeeRoutes"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});