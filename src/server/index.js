const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000 ;

app.use(express.static('dist'));

app.get('*',(req,res,next)=>{

    res.send(fs.readFileSync(path.resolve('./index.html'),{encoding:'utf8', flag:'r'}));
})

app.listen(PORT,()=>{
    console.log(`App Listening on port ${PORT}`);
})