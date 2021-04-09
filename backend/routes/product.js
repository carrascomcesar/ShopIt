const express = require("express");
const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");

router.route("/products/").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizedRoles("admin"), newProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizedRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizedRoles("admin"), deleteProduct);

router.route("/review").put(isAuthenticatedUser, createProductReview);

module.exports = router;
