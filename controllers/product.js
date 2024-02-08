const getProducts = async (request, response) => {
  try {
    response.status(200).json({
      message: "product list",
    });
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
  const { name } = request.body;
  try {
    response.status(201).json({
      message: `create product ${name}`,
    });
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
