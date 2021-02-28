require('dotenv').config();
const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes/routes');



const server = express();

server.use(cors());

server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use(morgan('dev'));

server.get('/',(req,res)=>{
    res.send('Seja bem vindo ao Ecommerce!')
})

server.use('/api/ecommerce',routes);


server.listen(process.env.PORTA,()=>{
    console.log(`Aplicação sendo executado em http://localhost:${process.env.PORTA}`)
})