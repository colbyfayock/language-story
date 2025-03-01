import dotenv from 'dotenv';
import { ElevenLabsClient } from 'elevenlabs';

dotenv.config();

const apiKey = process.env.ELEVENLABS_API_KEY;
const isApiKeySet = typeof apiKey === 'string';

export const elevenlabs = isApiKeySet ? new ElevenLabsClient({ apiKey }) : undefined;