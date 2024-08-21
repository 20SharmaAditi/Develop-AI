const dotenv = require("dotenv");

dotenv.config();

require("../Connection/Connection");

const app = require("./app");

const port = process.env.PORT || 80;

app.listen(port , () => {

    console.log(`App is listening on Port ${port}`)

})