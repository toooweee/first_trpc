import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import trpcRouter from './trpc';

class App {
  private app: express.Application;
  private readonly port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;

    this.initializeRoutes();
  }

  private initializeRoutes = () => {
    this.app.use(
      '/trpc',
      trpcExpress.createExpressMiddleware({
        router: trpcRouter,
      }),
    );
  };

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Server is listening at http://localhost:${this.port}`);
    });
  };
}

export default App;
