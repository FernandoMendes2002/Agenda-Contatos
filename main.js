const form = document.getElementById('form-contato');
const Nome = [];
const Numero = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});
function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    Nome.push(inputNomeContato.value);
    Numero.push(parseFloat(inputNumeroContato.value));
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

