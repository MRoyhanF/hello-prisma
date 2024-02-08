const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getProducts = async (request, response) => {
  try {
    const products = await prisma.product.findMany()
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ msg: error.message });
  }
};

const getProductById = async (request, response) => {
  try {
    response.status(200).json({
      message: `product by id ${request.params.id}`,
    });
  } catch (error) {
    response.status(404).json({ msg: error.message });
  }
};

const createProduct = async (request, response) => {
  const { title, content } = request.body;
  try {
    const products = prisma.product.create({
      data: {
        title,
        content
      }
    })
    response.status(201).json(products);
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

const updateProduct = async (request, response) => {
  const { name } = request.body;
  try {
    response.status(200).json({
      message: `update product by ${request.params.id}`,
    });
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

const deleteProduct = async (request, response) => {
  try {
    response.status(200).json({
      message: `delete product by id ${request.params.id}`,
    });
  } catch (error) {
    response.status(400).json({ msg: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
