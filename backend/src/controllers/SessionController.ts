import { Request, Response } from 'express';
import sessionModel from '../models/Session';

class SessionController {

  async store(req: Request, res: Response) {

    const { id } = req.body;

    const ong = await sessionModel.create(id);

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found with this ID.' });
    }

    return res.json(ong);
  }

}

export = new SessionController();
