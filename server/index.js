import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser'
import {config} from 'dotenv';

import mongoose from 'mongoose';

import productRouter from './routes/productsRouter.js';
import commentsRouter from './routes/commentsRouter.js';
import jwtRouter from './routes/jwtRouter.js'
import errorMiddleware from './middlewares/errorMiddleware.js'

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
app.use(cookieParser())


app.use('/product', productRouter)
app.use('/comment', commentsRouter)
app.use('/jwt', jwtRouter)

app.use(errorMiddleware)

const start = async () => {
    await mongoose.connect(process.env.URL_DB)
    app.listen(PORT, () => console.log(`Server started on PORT - ${PORT} ...`))
}

start()