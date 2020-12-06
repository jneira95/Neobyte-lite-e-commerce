import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ProductModel from './models/productModel';
import UserModel from './models/userModel';
import productsRouter from './routes/productRouter';
import usersRouter from './routes/userRouter';
import startServer from './server';

const app = express();
const productRouter = productsRouter(ProductModel);
const userRouter = usersRouter(UserModel);

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/product', productRouter);
app.use('/user', userRouter);

startServer(app);
