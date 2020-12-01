import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ProductModel from './models/productModel';
import productsRouter from './routes/productRouter';
import startServer from './server';

const app = express();
const productRouter = productsRouter(ProductModel);

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/product', productRouter);

startServer(app);
