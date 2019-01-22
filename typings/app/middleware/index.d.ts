// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/middleware/test';
import ExportTestC from '../../../app/middleware/testC';

declare module 'egg' {
  interface IMiddleware {
    test: typeof ExportTest;
    testC: typeof ExportTestC;
  }
}
