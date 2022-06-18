import express, { Request, Response, NextFunction } from 'express';

import mongoose from 'mongoose';

import mongoose from 'mongoose';

import {
  env,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from '@root/utils';

import { options } from '../utils';

import { options } from '../utils';

const userRouter = require('./user/user.route');

const homeRouter = require('./routes');

export const app = async (): Promise<void> => {

  const port = env.PORT;

  const url = env.URL;

  const app = express();

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  // User Router Api
  app.use('/api/user', userRouter);
  // Home Router
  app.use('/', homeRouter);



  // Error Handling Middleware Function
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });

  mongoose.set('useFindAndModify', false);

  mongoose.connect(url, options).then(() =>
    app.listen(port, () =>
      console.log(`Server running on Port: ${port} and database is ${url}`)
    )
  )
    .catch((error) => {
      throw error;
    })

  process.on('uncaughtException', uncaughtExceptionHandler);

  process.on('unhandledRejection', unhandledRejectionHandler);
};
