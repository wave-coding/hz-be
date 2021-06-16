import { cleanEnv, num } from 'envalid'

import dotenv from 'dotenv'

dotenv.config();

interface Env {
    PORT: number;
}


export function getEnv(): Env {
    const env: Env = cleanEnv(process.env, {
        PORT: num({ default: 3000 })
    })
    return env;
}

