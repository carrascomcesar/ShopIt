const mongoose = require('mongoose')
const connectDatabase = () => {
    mongoose.connect('process.env.DB_LOCAL_URI', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
) => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
}