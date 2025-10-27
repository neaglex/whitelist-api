export default function handler(req, res) {
  const { token, placeId, universeId } = req.query;

  const TOKEN_SECRETO = "MEU_TOKEN_SECRETO"; // altere para seu token

  if (token !== TOKEN_SECRETO) {
    return res.status(401).json({ error: "Token inválido" });
  }

  return res.status(200).json({
    status: "OK",
    message: "Acesso autorizado",
    placeId,
    universeId,
  });
}
