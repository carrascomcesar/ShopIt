const app = require('./app')
const dotenv = require('dotenv')

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);
})