const express = require('express');
const cors = require('cors');
const app = new express();
app.use(cors())

require('dotenv').config()
const PORT = process.env.PORT

const courseRoutes = require('./routes/courseRoutes')
app.use('/course',courseRoutes)
require('./db/connection');

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})