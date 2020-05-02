import { Request, Response } from 'express';
import ongModel from '../models/Ong';

class OngController {

  async store(req: Request, res: Response) {
    const data = req.body;

    const id = await ongModel.create(data);

    res.json({ id });
  }

  async index(req: Request, res: Response) {

    const ongs = await ongModel.index();
    res.json(ongs);
  }

}

export = new OngController();
