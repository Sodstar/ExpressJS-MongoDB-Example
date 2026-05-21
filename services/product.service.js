const repo = require("../repositories/product.repository");

const createProduct = async (data, file) => {
  return await repo.create({
    name: data.name,
    price: data.price,
    category_id: data.category_id,
    image: file?.path, //cloudinary returns the URL of the uploaded image in the path property
  });
};

const getProduct = async (query) => {
  const { page = 1, limit = 10, minPrice, maxPrice, category } = query;
  const filter = {};
  if (minPrice) filter.price = { $gte: Number(minPrice) };
  if (maxPrice) filter.price = { ...filter.price, $lte: Number(maxPrice) };
  if (category) filter.category_id = category;

  return await repo.findWithPagination(filter, page, limit);
};

const getProductById = async (id) => {
  return await repo.findById(id);
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
};
