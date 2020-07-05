import express  from 'express';
import React from 'react';
import {renderToString } from 'react-dom/server';
import App from '../client/components/App';
import {renderer} from './helper/rendererHelper'

const app = express();

const PORT = process.env.PORT || 3000 ;

app.use(express.static('dist'));

app.get('*',(req,res,next)=>{
    const content = renderer(renderToString(<App/>));
    res.send(content);
})

app.listen(PORT,()=>{
    console.log(`App Listening on port ${PORT}`);
})