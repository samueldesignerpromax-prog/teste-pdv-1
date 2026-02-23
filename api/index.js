export default function handler(req, res) {
  const produtos = [
    { id: 1, nome: "Arroz 5kg", preco: 25.90 },
    { id: 2, nome: "Feijão 1kg", preco: 8.50 },
    { id: 3, nome: "Refrigerante 2L", preco: 7.00 }
  ];

  if (req.method === "GET") {
    return res.status(200).json(produtos);
  }

  if (req.method === "POST") {
    const { total } = req.body;

    return res.status(200).json({
      mensagem: "Venda finalizada com sucesso!",
      total,
      pagamento: "QR Code gerado com sucesso (Fictício)"
    });
  }
}
