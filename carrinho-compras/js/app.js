let totalGeral = 0;
limpar();

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor 
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular subtotal dos produtos 
    let subtotal = quantidade * valorUnitario;
    // verifica zero ou nulo e negativo
    if (quantidade == null || quantidade <= 0) {
        alert('Por favor insira uma quantidade.')
    } else {
        //adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`;
    }
    //atualizar o valor total
    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}
function limpar() { //limpa todos os campos
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = 0;
}

function botaoLimpar() {
    let botaoLimpar = document.getElementById('botao-form botao-limpar');
    limpar();
    alert('Você esvaziou o carrinho.')
    
}