const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send("Hello World!!");
})

app.use('/api', userRoutes);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})