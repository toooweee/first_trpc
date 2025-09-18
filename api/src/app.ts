import express from 'express';
import IController from './common/types/controller.interface';

class App {
  private app: express.Application;
  private readonly port: number;

  constructor(port: number, controllers: IController[]) {
    this.app = express();
    this.port = port;

    this.initializeRoutes(controllers);
  }

  private initializeRoutes = (controllers: IController[]) => {
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  };

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Server is listening at http://localhost:${this.port}`);
    });
  };
}

export default App;
