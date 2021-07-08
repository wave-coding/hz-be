import express, { Request, Response } from 'express';

import {
  env,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
} from './utils';

export const server = async (): Promise<void> => {
  const port = env.PORT;

  const app = express();

  app.use(express.json());

  // Error Handling Middleware Function
  app.use((err: Error, _req: Request, res: Response) => {
    res.status(500).json({ message: err.message });
  });

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });

  process.on('uncaughtException', uncaughtExceptionHandler);

  process.on('unhandledRejection', unhandledRejectionHandler);
};
