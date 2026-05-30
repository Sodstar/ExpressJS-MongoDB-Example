require('dotenv').config()
const express = require('express')
const { default: helmet } = require("helmet");
const userRoutes = require('./routes/user.routes');
const connectDB = require('./config/db');
const { checkRedisHealth } = require('./utils/redis');

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
const dashboardRoute = require('./routes/dashboard.route');
const cartRoute = require('./routes/cart.route');
const orderRoute = require('./routes/order.route');

const globalErrorHandler = require('./middlewares/error.middleware');

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/categories', categoryRoute);
app.use('/products', productRoute);
app.use('/dashboard', dashboardRoute);
app.use('/cart', cartRoute);
app.use('/orders', orderRoute);
app.use(globalErrorHandler);

// Start server with health checks
const startServer = async () => {
  try {
    // Check Redis health
    const redisHealth = await checkRedisHealth();
    console.log('\n📊 Redis Health Check:');
    console.log(`   Status: ${redisHealth.status}`);
    console.log(`   Message: ${redisHealth.message}`);
    console.log(`   Timestamp: ${redisHealth.timestamp}\n`);

    if (redisHealth.status === 'unhealthy') {
      console.warn('⚠️  Warning: Redis is unhealthy, but server will start anyway\n');
    }

    app.listen(port, () => {
      console.log(`✓ Example app listening on port ${port}`)
    });
  } catch (error) {
    console.error('Error during server startup:', error);
    process.exit(1);
  }
};

startServer();