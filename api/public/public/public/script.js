let total = 0;

fetch("/api")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("produtos");

    data.forEach(produto => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <p>${produto.nome} - R$ ${produto.preco}</p>
        <button onclick="adicionar(${produto.preco})">Adicionar</button>
      `;
      container.appendChild(div);
    });
  });

function adicionar(preco) {
  total += preco;
  document.getElementById("total").innerText = total.toFixed(2);
}

function finalizarVenda() {
  fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ total })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("resultado").innerHTML = `
      <h3>${data.mensagem}</h3>
      <p>Total Pago: R$ ${data.total}</p>
      <p>${data.pagamento}</p>
    `;
    total = 0;
    document.getElementById("total").innerText = "0.00";
  });
}
