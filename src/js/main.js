// Pegando os elementos
const form = document.querySelector("#tip-form");
const resultArea = document.querySelector("#result-area");
const listaHistorico = document.querySelector("#lista-hitórico");
const botoesGorjeta = document.querySelectorAll(".tip-btn");
const inputPeople = document.querySelector("#people");
const btnMenos = document.querySelector("#btn-minus");
const btnMais = document.querySelector("#btn-plus");

let porcentagemAtual = 0.15;

// Botão de Aumentar
btnMais.addEventListener("click", () => {
    let valorAtual = Number(inputPeople.value);

    if (valorAtual < 100) {
        inputPeople.value = valorAtual + 1;
    } else {
        alert("Limite de 100 Pessoas atingido");
    }
}); // <--- O erro estava aqui! Precisava fechar o addEventListener

// Botão de Diminuir
btnMenos.addEventListener("click", () => {
    let valorAtual = Number(inputPeople.value);
    
    if (valorAtual > 1) { 
        inputPeople.value = valorAtual - 1;
    } else {
        alert("Pelo menos uma pessoa deve pagar");
    }
});

botoesGorjeta.forEach((botao) => {
    botao.addEventListener("click", (e) => {
        // 1. Remove de todos
        botoesGorjeta.forEach((btn) => {
            btn.classList.remove("active");
        });

        // 2. Adiciona no botão que o loop está percorrendo 
        botao.classList.add("active");

        // 3. Atualiza o valor
        porcentagemAtual = Number(botao.dataset.percent);
        
        console.log("Botão clicado:", botao.textContent, "Valor:", porcentagemAtual);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impedir recarregamento da pagina


  const bill = Number(document.querySelector("#bill").value);
  const people = Number(document.querySelector("#people").value);

  if (bill <= 0 || people <= 0) {
    alert("A conta ou o número de pessoas não pode ser zero.");
    return;
  }

  if (people < 1) {
    alert("Pelo menos uma pessoa deve pagar a conta");
    return;
  }

  // Calculo
  const totalTip = bill * porcentagemAtual;
  const totalBill = bill + totalTip;
  const perPerson = totalBill / people;

  const novoItem = document.createElement("li");

  novoItem.innerHTML = `
    <strong>Conta:</strong> R$ ${bill.toFixed(2)} |
    <strong>Total:</strong> R$ ${totalBill.toFixed(2)} |
    <strong>Por Pessoa:</strong> R$ ${perPerson.toFixed(2)} |
    `;

  // exibe resultado

document.querySelector("#summary-bill").innerHTML = `R$ ${bill.toFixed(2)}`;

document.querySelector("#summary-tip-percent").innerHTML = porcentagemAtual * 100;

document.querySelector("#summary-tip-value").innerHTML = `R$ ${totalTip.toFixed(2)}`;

document.querySelector("#summary-people").innerHTML = people;

  document.querySelector("#tip-amount").innerHTML = `R$ ${totalTip.toFixed(2)}`;
  document.querySelector("#total-bill").innerHTML =
    `R$ ${totalBill.toFixed(2)}`;
  document.querySelector("#total-per-person").innerHTML =
    `R$ ${perPerson.toFixed(2)}`;

  resultArea.classList.remove("hidden"); // mostra resultado
  listaHistorico.appendChild(novoItem);
});
