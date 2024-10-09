const express = require('express');
const app = new express();


require('dotenv').config()
const PORT = process.env.PORT

const courseRoutes = require('./routes/courseRoutes')
app.use('/course',courseRoutes)
require('./db/connection');

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})