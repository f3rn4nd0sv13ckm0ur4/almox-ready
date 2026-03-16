//Pagina de login
function verificarLogin() {

    let usuarioCorreto = "admin";
    let senhaCorreta = "1234";

    let usuarioDigitado = document.getElementById("usuario").value;
    let senhaDigitada = document.getElementById("senha").value;

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login realizado com sucesso!");
        window.location.href ="/estoque"
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

//Pagina de adicionar
function adicionar() { 

    let codigo = document.getElementById("codigo1").value;
    let descricao = document.getElementById("descricao1").value;
    let qtd = parseInt(document.getElementById("qtd1").value);
    let preco = document.getElementById("preco1").value;
//verifica se as variaveis estão sendo lidas corretamente
    console.log("Codigo1", codigo);
    console.log("descricao1", descricao);
    console.log("qtd1", qtd);
    console.log("preco1", preco);

    if (!codigo || !descricao || isNaN(qtd) || !preco) return;
//define o status da tabela e a cor da celula
    let status = "";
    let classe = "";

    let tabela = document.getElementById("tabela1");
    let linha = tabela.insertRow(1);// insere uma nv linha na tabela
//insere o html na nv linha
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
//Pagina de remover
function remover() {

    
    let codigo = document.getElementById("codigo1").value;
    console.log(codigo)

    if (!codigo) {
        alert("Digite o código do produto");
        return;
    }

    let tabela1 = document.getElementById("tabela1");

    for (let i = 1; i < tabela1.rows.length; i++) {
//procura um produto com o msm codigo
        let codigoTabela = tabela1.rows[i].cells[0].innerText;
//pega o produto na tabela
        if (codigoTabela === codigo) {
            tabela1.deleteRow(i);
            alert("Produto removido!");
            return;
        }
    }

    alert("Produto não encontrado");
}
//Pagina do Roger
function aumentar(imagem) {
    imagem.style.transform = "scale(1.2)"; // Aumenta
}

function diminuir(imagem) {
    imagem.style.transform = "scale(1)"; // Volta ao normal
}

