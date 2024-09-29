// Variáveis de controle
let totalPrice = 115.52;
const couponDiscount = 10; // Valor de desconto do cupom
let couponApplied = false;

//Função para salvar o endereço
document.getElementById('shipping-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletar os valores inseridos
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;

    // Exibir o resumo da entrega
    const shippingSummary = `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Endereço:</strong> ${address}, ${city}, ${state}, ${zip}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
    `;
    

    // Esconder o formulário e mostrar o resumo
    document.getElementById('shipping-form').style.display = 'none';
    document.getElementById('order-summary').style.display = 'block';
});

// Função para aplicar o cupom
document.getElementById('apply-coupon').addEventListener('click', function(event) {
    event.preventDefault();
    if (!couponApplied) {
        totalPrice -= couponDiscount; // Subtrai o valor do desconto
        couponApplied = true;
        alert('Cupom aplicado com sucesso!');
        updateTotalPrice(); // Atualiza o total
    } else {
        alert('O cupom já foi aplicado.');
    }
});

// Função para selecionar o método de pagamento
document.getElementById('select-payment').addEventListener('click', function(event) {
    event.preventDefault();
    const paymentMethod = prompt('Selecione o método de pagamento:\n1. Cartão de Crédito\n2. Boleto\n3. Pix');
    if (paymentMethod == 1) {
        alert('Cartão de Crédito selecionado.');
    } else if (paymentMethod == 2) {
        alert('Boleto selecionado.');
    } else if (paymentMethod == 3) {
        alert('Pix selecionado.');
    } else {
        alert('Método de pagamento inválido.');
    }
});

// Função para finalizar o pedido
document.getElementById('submit-order').addEventListener('click', function() {
    alert('Pedido realizado com sucesso! Total: R$' + totalPrice.toFixed(2));
});

// Função para atualizar o preço total no HTML
function updateTotalPrice() {
    document.getElementById('total-price').innerHTML = `
        <p>Total do Pedido:</p>
        <p>R$${totalPrice.toFixed(2)}</p>
    `;
}
``
