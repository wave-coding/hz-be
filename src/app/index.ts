import express, { Request, Response } from 'express';

import mongoose from 'mongoose';

import {
  env,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from '../utils';

export const app = async (): Promise<void> => {

  const port = env.PORT;

  const url = env.URL;

  const app = express();

  app.use(express.json());

  // Error Handling Middleware Function
  app.use((err: Error, _req: Request, res: Response) => {
    res.status(500).json({ message: err.message });
  });

  const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true };

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
