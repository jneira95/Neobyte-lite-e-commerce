import express, { Request, Response } from 'express';
import cors from 'cors';
import debug from 'debug';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('tiny'));
app.use(debug('app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.listen(8000, () => {
  debug(`Server is running on port ${port}`);
});
