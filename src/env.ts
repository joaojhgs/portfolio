import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  // Only accessible on server side, but will have it's typings available on client side
  server: {},
  client: {},
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},
});
