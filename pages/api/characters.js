import { default as demonSlayer } from './demon-slayer.json' assert { type: 'json' };
export default function handler(req, res) {
  res.status(200).json(demonSlayer);
}
