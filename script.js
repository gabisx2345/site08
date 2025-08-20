document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    })

    const aumentaFonteBotao = document.getElementById('diminuir-fonte');
    const diminuiFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoAtualFonte = 2;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 1.3;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 2.2;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
})
