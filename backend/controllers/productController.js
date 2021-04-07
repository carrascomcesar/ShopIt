const Product = require("../models/products");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

// Create New Review => /api/v1/review/
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  // Review Object
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  // Find Product
  const product = await Product.findById(productId);

  // Check if Product Is Reviewed
  const isReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (!isReviewed) {
    // If NOT Reviewed: Add Review
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  } else {
    // If Reviewed: Edit Review
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
    message: "Review created successfully",
    review,
  });
});

// DELETE product = > /api/v1/admin/product/:id/
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById((id = req.params.id));

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product has been deleted.",
  });
});

// UPDATE product = > /api/v1/admin/product/:id/
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById((id = req.params.id));

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

// Get SINGLE Product FROM Database => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById((id = req.params.id));

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Create new product = > /api/v1/admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product was successfully created.",
    product,
  });
});

// Get ALL Products in Database => /api/v1/products

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  // Default count Results per page
  const resultsPerPage = 5;

  // Products Count to be used in Frontend
  const productsCount = await Product.countDocuments();

  // Search & Filter Functions
  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);

  // Returned Products
  const products = await apiFeatures.query;

  // JSON success
  res.status(200).json({
    success: true,
    productsCount,
    products,
  });
});
