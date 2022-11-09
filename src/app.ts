import express from "express";
import { Application } from "express";
import boot from "./boot";
import RouteService from './router/RouteService'
import startMiddlewares from './middlewares'

class App {
  private readonly app: Application;
  private readonly port: number;
  private readonly router: RouteService;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.router = new RouteService(this.app);
  }

  public start(): void {
    boot(this.app);
    this.router.run();
    startMiddlewares(this.app);
    this.app.listen(this.port, () => {
      console.log(`Server app is running on port: ${this.port}`);
    });
  }
}

export default App;
