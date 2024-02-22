import express from 'express';
import todoApi from './routers/index.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const server = express();

server.use(bodyParser.json())
server.use(cors())

server.use('/api',todoApi)

server.listen(8000,()=>{
    console.log('Server is running at http://localhost:8000');
})