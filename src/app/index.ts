import express, { Request, Response, NextFunction } from 'express';

import mongoose from 'mongoose';

import {
  env,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from '../utils';

import { options } from '../utils';

import { router } from './user/user.route'

export const app = async (): Promise<void> => {

  const port = env.PORT;

  const url = env.URL;

  const app = express();

  app.use(express.json());

  app.use(express.urlencoded({ extended: true }));

  // Error Handling Middleware Function
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });

  app.use('/api/user', router);



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
