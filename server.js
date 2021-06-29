const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors());
require('dotenv').config();

app.get('/', (req, res)=> { 
  res.send('Hello World') 
})

app.listen(process.env.PORT,()=>{
    console.log('starting at port 8000');
}); 