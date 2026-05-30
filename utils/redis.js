const Redis = require("ioredis");

const redis = new Redis();

// Redis health check function
const checkRedisHealth = async () => {
  try {
    const result = await redis.ping();
    if (result === "PONG") {
      return {
        status: "healthy",
        message: "Redis connection is active",
        timestamp: new Date().toISOString()
      };
    } else {
      return {
        status: "unhealthy",
        message: "Redis ping returned unexpected response",
        timestamp: new Date().toISOString()
      };
    }
  } catch (error) {
    return {
      status: "unhealthy",
      message: `Redis connection failed: ${error.message}`,
      timestamp: new Date().toISOString()
    };
  }
};

// Handle Redis connection events
redis.on('connect', () => {
  console.log('✓ Redis client connected');
});

redis.on('error', (err) => {
  console.error('✗ Redis error:', err.message);
});

module.exports = { redis, checkRedisHealth };