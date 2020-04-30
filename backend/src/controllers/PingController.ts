import {Request, Response} from 'express';

class Ping {
  index(req: Request, res: Response) {
    res.send('pong');
  }
}

export = new Ping();
