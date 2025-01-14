const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');

connectDb();
const app = express();
app.use(cors())

const port = process.env.PORT || 5556;

app.use(express.json());
app.use("/api/entries",require("./routes/entryRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`sever running on port ${port}`);
});