import type { AWS } from '@serverless/typescript';

const functions: AWS['functions'] = {
  setUrl: {
    handler: 'src/functions/setUrl/index.handler',
    events: [
      {
        httpApi: {
          path: '/',
          method: 'POST',
        },
      },
    ],
  },
};

export default functions;
