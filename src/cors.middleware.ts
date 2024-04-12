import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  private corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true, 
  };

  private corsMiddleware = cors(this.corsOptions);

  use(req: Request, res: Response, next: NextFunction) {
    this.corsMiddleware(req, res, next);
  }
}
