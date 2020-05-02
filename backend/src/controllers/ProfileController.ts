import { Request, Response } from 'express';
import profileModel from '../models/Profile';

class ProfileController {

  async index(req: Request, res: Response) {

    const ong_id = req.headers.authorization;

    const incidents = await profileModel.index(String(ong_id));

    return res.json(incidents);
  }

}

export = new ProfileController();
