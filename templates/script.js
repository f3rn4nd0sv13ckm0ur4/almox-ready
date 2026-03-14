function verificarLogin() {

    let usuarioCorreto = "admin";
    let senhaCorreta = "1234";

    let usuarioDigitado = document.getElementById("usuario").value;
    let senhaDigitada = document.getElementById("senha").value;

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login realizado com sucesso!");
        window.location.href ="estoque.html"
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function adicionar() {

    let codigo = document.getElementById("codigo1").value;
    let descricao = document.getElementById("descricao1").value;
    let qtd = parseInt(document.getElementById("qtd1").value);
    let preco = document.getElementById("preco1").value;

    console.log("Codigo1", codigo);
    console.log("descricao1", descricao);
    console.log("qtd1", qtd);
    console.log("preco1", preco);

    if (!codigo || !descricao || isNaN(qtd) || !preco) return;

    let status = "";
    let classe = "";

    let tabela = document.getElementById("tabela1");
    let linha = tabela.insertRow(1);
    linha.innerHTML = `
        <td>${codigo}</td>
        <td>${descricao}</td>
        <td>${qtd}</td>
        <td>R$${preco}</td>
        <td class="${classe}">${status}</td>
    `;
    document.getElementById("codigo1").value = "";
    document.getElementById("descricao1").value = "";
    document.getElementById("qtd1").value = "";
    document.getElementById("preco1").value = "";
}

function remover() {

    
    let codigo = document.getElementById("codigo1").value;
    console.log(codigo)

    if (!codigo) {
        alert("Digite o código do produto");
        return;
    }

    let tabela1 = document.getElementById("tabela1");

    for (let i = 1; i < tabela1.rows.length; i++) {

        let codigoTabela = tabela1.rows[i].cells[0].innerText;

        if (codigoTabela === codigo) {
            tabela1.deleteRow(i);
            alert("Produto removido!");
            return;
        }
    }

    alert("Produto não encontrado");
}