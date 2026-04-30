const express = require('express')
const { default: helmet } = require("helmet");
const userRoutes = require('./routes/user.routes');
const connectDB = require('./config/db');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use(helmet());

connectDB();

const userRoute = require('./routes/user.routes');
app.use('/users', userRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})