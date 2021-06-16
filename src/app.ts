import express, { Request, Response, NextFunction } from "express";

const port = 3000;

export const server = async () => {
  const app = express();

  app.use(express.json());

  // Error Handling Middleware Function
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });

  app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });
};
