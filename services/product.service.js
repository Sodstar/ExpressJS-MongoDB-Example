const repo = require("../repositories/product.repository");
const { redis } = require("../utils/redis");
const createProduct = async (data, file) => {
  return await repo.create({
    name: data.name,
    price: data.price,
    category_id: data.category_id,
    image: file?.path, //cloudinary returns the URL of the uploaded image in the path property
  });
};

const getProduct = async (query) => {
  const cacheKey = `products:${JSON.stringify(query)}`;
  const cached = await redis.get(cacheKey);
  if (cached) {
    return JSON.parse(cached);
  }

  const { page = 1, limit = 10, minPrice, maxPrice, category } = query;
  const filter = {};
  if (minPrice) filter.price = { $gte: Number(minPrice) };
  if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
  if (category) filter.category_id = category;

  const products = await repo.findWithPagination(filter, page, limit);

  await redis.set(cacheKey, JSON.stringify(products), "EX", 3600); // Cache for 1 hour
  return products;
};

const getProductById = async (id) => {
  return await repo.findById(id);
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
};
