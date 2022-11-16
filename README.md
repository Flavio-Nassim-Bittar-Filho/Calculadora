<h1>Calculator</h1>
<img src='img/img1.png' height='400px'>
<h2>Sobre o Projeto</h2>
<p>
    Esse projeto é uma calculadora simples no qual efetua as 4 operações básicas.<br>
    <ul>
        <li>soma</li>
        <li>subtração</li>
        <li>multiplicação</li>
        <li>divisão</li>
    </ul>
    Além de ter um botão temático onde é possível trocar o tema da calculadora.
</p>

<h2>Como colaborar - Criando o seu TEMA !</h2>
<p>
    <ol>
        <li>
            Entre na pasta de temas, 'style/themes' e copie o tema 'default.css'
        </li><br>
        <li>
            No arquivo copiado, troque as classes 't0' de cada elemento por 'tn', onde 'n' é o número de temas existentes.<br>
            e salve o documento com o nome do tema que você desejar.
        </li><br>
        <li>
            Após criar seu tema, você precisa referenciar ele na pagina 'style/main.css'.<br> 
            Para isso você utiliza o comando @import url('themes/nome_tema.css');
        </li><br>
        <li>
            Para finalizar basta entrar no 'src/main.js' e colocar na lista de temas o seu tema !!!<br>
            A lista de temas é um array de arrays, onde o primeiro parâmetro é a classe e o segundo é o nome que você quer que apareça na calculadora ! 
            exemplo:['tn','nome_do_tema']
        </li>
    </ol>
</p>

<h2>Colaboradores !!!</h2>
<ul>
    <li>Flávio Nassim Bittar Filho</li>
    <li>Rafael Augusto De Paula Mora</li>
    <li>Rafael Abreu Fonseca</li>
    <li>MateusMMattos</li>
</ul>
