
// Pegando os elementos
const form = document.querySelector('#tip-form');
const resultArea = document.querySelector('#result-area');
const listaHistorico = document.querySelector('#lista-hitórico');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impedir recarregamento da pagina

    const bill = Number(document.querySelector('#bill').value);
    const serviceQual = Number(document.querySelector('#service-qual').value);
    const people = Number(document.querySelector('#people').value);

    if (bill <= 0 || people <= 0){
        alert("A conta ou o número de pessoas não pode ser zero.");
        return;
    }

    if (people < 1) {
        alert("Pelo menos uma pessoa deve pagar a conta");
        return;
    }

    // Calculo
    const totalTip = bill * serviceQual;
    const totalBill = bill + totalTip;
    const perPerson = totalBill / people;

    const novoItem = document.createElement('li');

    novoItem.innerHTML = `
    <strong>Conta:</strong> R$ ${bill.toFixed(2)} |
    <strong>Total:</strong> R$ ${totalBill.toFixed(2)} |
    <strong>Por Pessoa:</strong> R$ ${perPerson.toFixed(2)} |
    `;

    // exibe resultado

    document.querySelector('#tip-amount').innerHTML = `R$ ${totalTip.toFixed(2)}`;
    document.querySelector('#total-bill').innerHTML = `R$ ${totalBill.toFixed(2)}`;
    document.querySelector('#total-per-person').innerHTML = `R$ ${perPerson.toFixed(2)}`;

    resultArea.classList.remove('hidden'); // mostra resultado
    listaHistorico.appendChild(novoItem);
});