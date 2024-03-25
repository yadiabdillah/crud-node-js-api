require('dotenv').config();
const PORT = process.env.PORT

const express = require('express');


const userRouter = require("./routes/users.js");


const app = express();

app.use(express.json());

app.use('/users',userRouter);


app.listen(PORT,()=>{
    console.log('server jalan');
})
