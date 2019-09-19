import { resolve } from 'path';
import { config } from 'dotenv';

const path = resolve(__dirname, '.env');
const { error, parsed } = config({ path });

if (error) {
  throw error;
}

export default parsed;
