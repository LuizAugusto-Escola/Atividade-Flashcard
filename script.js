function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)


    container.appendChild(cartao)

}

criaCartao(

    'Segunda Guerra Mundial',

    'NOME, TURMA E NÚMERO',

    'Luiz Augusto da Costa Fonseca 2ºC Nº32'

)

criaCartao(

    'GM II',

    'Qual foi o estopim para o início da Segunda Guerra Mundial?',

    'A invasão da Polônia pela Alemanha, em 1º de setembro de 1939, foi o evento que desencadeou a Segunda Guerra Mundial. Isso levou o Reino Unido e a França a declararem guerra à Alemanha.'

)

criaCartao(

    'GM II',

    'Quem eram as principais potências do Eixo durante a guerra?',

    'As principais potências do Eixo eram a Alemanha, a Itália e o Japão. Esses países formaram uma aliança militar contra as potências aliadas, como o Reino Unido, a União Soviética e os Estados Unidos.'

)

criaCartao(

    'GM II',

    'O que foi a Batalha de Stalingrado e por que foi decisiva?',

    'A Batalha de Stalingrado (1942-1943) foi uma das mais intensas da Segunda Guerra Mundial, com um confronto decisivo entre as forças alemãs e soviéticas. A vitória soviética foi crucial, marcando o início da ofensiva que acabaria levando à queda de Berlim.'

)
criaCartao(

    'GM II',

    'Quando e como os Estados Unidos entraram na Segunda Guerra Mundial?',

    'Os Estados Unidos entraram na guerra após o ataque surpresa japonês a Pearl Harbor, no Havai, em 7 de dezembro de 1941. Esse ataque levou os EUA a declarar guerra ao Japão, e, em seguida, à Alemanha e à Itália.'

)
criaCartao(

    'GM II',

    'O que foi o Dia D e qual sua importância?',

    'O Dia D, em 6 de junho de 1944, foi o desembarque das forças aliadas na Normandia, França, para começar a libertação da Europa Ocidental. Esse evento crucial enfraqueceu os nazistas e acelerou o fim da guerra na Europa.'

)