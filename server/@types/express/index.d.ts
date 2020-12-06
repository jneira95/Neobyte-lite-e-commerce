// /* eslint-disable no-unused-vars */
// import { Request } from 'express-serve-static-core';
// import { Request } from 'express';

declare module 'express-serve-static-core' {
  export interface Request {
    user: string | object;
  }
}

// export {};
// declare global{
//     namespace Express {
//         interface Request {
//             user: string | object
//         }
//     }
// }
