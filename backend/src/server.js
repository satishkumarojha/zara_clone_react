const app = require("./index");
require('dotenv').config()

const connectdb = require("./configs/db")
const PORT = process.env.port || 5000;
app.listen(PORT, async () => {
    try{
        await connectdb();
        console.log("listening on port "+PORT);
    }
    catch(err){
        console.log(err.message);
    }
});