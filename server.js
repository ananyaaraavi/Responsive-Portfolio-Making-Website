//setting up node server

const express = require('express')    //express obj
const app = express    //app variable
const port = process.env.PORT || 5000
app.listen (port,()=>{
    console.log('Server running on port 3000')
 }  
)