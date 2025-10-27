export default function handler(req, res) {
  const { token, placeId, universeId } = req.query;

  // Substitua "MEU_TOKEN_SECRETO" pelo que você quiser
  const TOKEN_SECRETO = "MEU_TOKEN_SECRETO";

  if (token !== TOKEN_SECRETO) {
    return res.status(401).json({ error: "Token inválido" });
  }

  // Exemplo de resposta simples (você pode mudar)
  return res.status(200).json({
    status: "OK",
    message: "Acesso autorizado",
    placeId,
    universeId,
  });
}
