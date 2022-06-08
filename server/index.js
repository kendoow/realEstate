import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import {config} from 'dotenv';

import mongoose from 'mongoose';

import productRouter from './routes/productsRouter.js';

config()
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))
app.use(fileUpload())
app.use(express.static('static'))


app.use('', productRouter)

const start = async () => {
    await mongoose.connect(process.env.URL_DB)
    app.listen(PORT, () => console.log(`Server started on PORT - ${PORT} ...`))
}

start()