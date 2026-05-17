require('dotenv').config()
const express = require('express')
const { default: helmet } = require("helmet");
const userRoutes = require('./routes/user.routes');
const connectDB = require('./config/db');

const limiter = require('./middlewares/rateLimit.middleware');
const httpLogger = require("./utils/httpLogger");

const app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(httpLogger);

connectDB();

const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.route');
const categoryRoute = require('./routes/category.route');
const productRoute = require('./routes/product.route');

const globalErrorHandler = require('./middlewares/error.middleware');

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/categories', categoryRoute);
app.use('/products', productRoute);

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})