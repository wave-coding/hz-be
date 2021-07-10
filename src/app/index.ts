import express, { Request, Response } from 'express';

import mongoose from 'mongoose';

import {
  env,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from '../utils';

export const app = async (): Promise<void> => {
  const port = env.PORT;

  const app = express();

  app.use(express.json());

  // Error Handling Middleware Function
  app.use((err: Error, _req: Request, res: Response) => {
    res.status(500).json({ message: err.message });
  });

  const uri: string = `mongodb://localhost:27017/wave_coding`;

  const options = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true };

  mongoose.set('useFindAndModify', false);

  mongoose.connect(uri, options).then(() =>
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    )
  )
    .catch((error) => {
      throw error;
    })

  process.on('uncaughtException', uncaughtExceptionHandler);

  process.on('unhandledRejection', unhandledRejectionHandler);
};
