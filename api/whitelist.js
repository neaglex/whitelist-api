export default function handler(req, res) {
  const tokenSecret = process.env.TOKEN_SECRET;

  // token obrigatório
  if (req.query.token !== tokenSecret) {
    return res.status(403).json({ error: "Token inválido" });
  }

  const placeId = req.query.placeId;
  const universeId = req.query.universeId;

  if (!placeId || !universeId) {
    return res.status(400).json({ error: "Dados inválidos" });
  }

  console.log("Acesso registrado:", placeId, universeId);

  return res.status(200).json({ authorized: true });
}
