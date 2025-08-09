# Parquímetro — POO em JavaScript

Aplicação **interativa** que simula um parquímetro usando **Programação Orientada a Objetos (POO)** em JavaScript.  
O usuário informa um valor e o sistema calcula **tempo de permanência** e **troco**, com validações amigáveis.

## 🎯 Regras de preço/tempo

| Valor | Tempo |
|------:|:-----|
| **R$ 1,00** | **30 minutos** |
| **R$ 1,75** | **60 minutos** |
| **R$ 3,00** | **120 minutos (máximo)** |

> Qualquer valor **entre** estas faixas usa **o maior preço que não ultrapassa** o valor pago.  
> Ex.: `R$ 2,00 → 60 min` e **troco R$ 0,25**.  
> Abaixo de **R$ 1,00**: **“Valor insuficiente”**.

## 🧠 Como funciona (POO)

- `class Parquimetro`  
  - `lerValorDoCampo()` → lê e normaliza o input (aceita **ponto** e **vírgula**), valida vazio/NaN e `< 1`.  
  - `calcularTempoETroco(valor)` → aplica a tabela, escolhe o **maior preço ≤ valor** e calcula troco.  
  - `exibirResultado(msgErro)` → mostra ticket de resultado ou mensagem de erro.  
  - `pagar()` → orquestra tudo (ler → calcular → exibir).

> O estado (`valorPago`, `tempoEstacionamento`, `troco`) é **resetado a cada clique** pra evitar “troco fantasma”.

## 📁 Estrutura do projeto

parquimetro/
├─ index.html # Interface
├─ scripts.js # Lógica POO (atenção ao 's' no fim)
├─ styles.css # Estilos (tema clean)
└─ README.md # Este arquivo


## 🚀 Como rodar

1. Baixe/clon e abra a pasta no VS Code.
2. Clique duas vezes em `index.html` (ou use a extensão Live Server).
3. Digite valores como `1`, `1,75`, `2`, `3,20` e clique **Pagar**.

## ✅ Casos de teste rápidos

- `0.50` → **Valor insuficiente**  
- `1.00` → **30 min** — Troco `R$ 0,00`  
- `2.00` → **60 min** — Troco `R$ 0,25`  
- `3.00` → **120 min** — Troco `R$ 0,00`  
- `3.20` → **120 min** — Troco `R$ 0,20`

## 🛠️ Tecnologias

- HTML5 + CSS3
- JavaScript (ES6+) — **POO**

## 💡 Próximos passos (idéias)

- Botão “limpar”.
- Selecionar moeda/locale.
- Testes unitários da classe (Vitest/Jest).
