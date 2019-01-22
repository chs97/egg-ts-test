import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.get('/', middleware.test, middleware.testC , controller.home.index);
};
