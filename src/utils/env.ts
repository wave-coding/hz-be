import { cleanEnv, num } from 'envalid';

import dotenv from 'dotenv';

dotenv.config();

interface Env {
  PORT: number;
}

export const env: Env = cleanEnv(process.env, {
  PORT: num({ default: 3000 }),
});
