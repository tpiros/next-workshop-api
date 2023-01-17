import { default as demonSlayer } from './demon-slayer.json' assert { type: 'json' };
export default function handler(req, res) {
  const id = +req.query.id;
  const [data] = demonSlayer.filter((ds) => ds.id === id);
  res.status(200).json(data);
}
