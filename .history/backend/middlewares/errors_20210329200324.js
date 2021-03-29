const ErrorHandler = require('../utils/errorHandler')



module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
}