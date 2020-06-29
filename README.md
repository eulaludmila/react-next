# Introdução - NextJs com ReactJs

Criar projetos apenas com ReactJs existe uma certa desvantagem em relação ao SEO(Search Engine Optimization), pois aos buscadores entrarem em sua página não verão conteúdo algum, devido o ReactJs usar JSX. Logo, todo conteúdo é renderizado por javascript e não é visto no código-fonte, ocasionando essa desvantagem. <br/>
Na resolução do problema é usado o NextJS, onde ele renderiza o projeto no servidor e envia para o navegador, fazendo com o que os buscadores veja todo o conteúdo da página. Esse método é conhecido como Server Side Rendering, no qual o Node faz a renderização dos componentes antes de apresentar a resposra ao Cliente.

## Comandos para rodar o projeto

<ul>
    <li>npm install - instalar as dependências do projeto</li>
    <li>npm run dev - rodar o projeto next</li>
    <li>npm init - criar o package.json</li>
    <li>npm install next react react-dom - instalar o next no projeto</li>
</ul>

<p>Logo em seguida, colocar o seguite código no package.json</p>

` 
    "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
    },
`

<p>Para utilizar o css, tem que instalar uma biblioteca em que o next consiga entender o arquivo .css: npm install --save @zeit/next-css</p>
<p>Logo em seguida, criar um arquivo na raiz com o seguinte nome 'next.config.js' e colocar le o seguinte códgio:</p>

`
    const withCSS = require('@zeit/next-css')
    module.exports = withCSS({
    /* config options here */
    })
` 

<p>É importante lembrar quer, todas as página devem estar na pasta pages, pois o next faz as rotas</p>

<p>Para mudar o ícone da aplicação é preciso criar a pasta public (obrigatorio ter esse nome) e colocar o ícone desejado nessa pasta. O ícone deve ter o nome favicon e a extensão .ico</p>
