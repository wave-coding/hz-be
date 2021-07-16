import { cleanEnv, num, str } from 'envalid';

import dotenv from 'dotenv';

dotenv.config();

interface Env {
  PORT: number;
  URL: string;
}

export const env: Env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
  URL: str({ default: `mongodb://localhost:27017/wave_coding` })
});
