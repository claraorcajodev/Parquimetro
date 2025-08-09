class Parquimetro {
  constructor() {
    this.valorPago = 0;
    this.troco = 0;
    this.tempoEstacionamento = 0;
  }

  lerValorDoCampo() {
    const input = document.getElementById("valorEstacionamento");
    if (!input) throw new Error("Campo não encontrado");

    const raw = (input.value || "").trim();
    if (raw === "") throw new Error("Informe um valor"); // vazio

    const normalizado = raw.replace(/\./g, "").replace(",", ".");
    const valor = Number(normalizado);

    if (!Number.isFinite(valor)) throw new Error("Valor inválido");
    if (valor < 1) throw new Error("Valor insuficiente");

    return valor;
  }

  calcularTempoETroco(valor) {
    // zera estado a cada cálculo
    this.valorPago = valor;
    this.troco = 0;
    this.tempoEstacionamento = 0;

    const precos = [
      { preco: 1.00, tempo: 30 },
      { preco: 1.75, tempo: 60 },
      { preco: 3.00, tempo: 120 }, 
    ];

    // escolhe o maior preço que não ultrapassa o valor pago
    let escolhido = precos[0];
    for (const p of precos) {
      if (valor >= p.preco) escolhido = p;
    }

    this.tempoEstacionamento = escolhido.tempo;
    this.troco = +(valor - escolhido.preco).toFixed(2); // corrige float
  }

  exibirResultado(msgErro) {
    const out = document.getElementById("resposta");
    if (!out) return;

    if (msgErro) {
      out.textContent = msgErro;
      return; // mantém o valor no input pra pessoa corrigir
    }

    out.textContent =
      `Tempo de estacionamento: ${this.tempoEstacionamento} minutos — Troco: R$ ${this.troco.toFixed(2)}`;
    document.getElementById("valorEstacionamento").value = "";
  }

  pagar() {
    try {
      const valor = this.lerValorDoCampo();
      this.calcularTempoETroco(valor);
      this.exibirResultado();
    } catch (e) {
      this.exibirResultado(e.message || "Erro inesperado");
    }
  }
}

// garante que o botão existe antes de registrar o evento (mesmo com defer)
document.addEventListener("DOMContentLoaded", () => {
  const park = new Parquimetro();
  const btn = document.getElementById("btnPagar");
  if (!btn) {
    console.error("Botão #btnPagar não encontrado");
    return;
  }
  btn.addEventListener("click", () => park.pagar());
});
