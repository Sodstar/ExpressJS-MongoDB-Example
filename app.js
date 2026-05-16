require('dotenv').config()
const express = require('express')
const { default: helmet } = require("helmet");
const userRoutes = require('./routes/user.routes');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use(helmet());

connectDB();

const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.route');
const globalErrorHandler = require('./middlewares/error.middleware');
app.use('/users', userRoute);
app.use('/auth', authRoute);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})