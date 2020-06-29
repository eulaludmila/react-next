// import React from 'react';
import Menu from '../components/Menu'
import HeadNext from '../components/Head';
import '../css/styled.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)


function HomePage() {
    return (
        <>
            <HeadNext title="Home" />
            <Menu />
            <div id="caixa-conteudo">
                <div id="conteudo">
                    <h2>Serviços da Empresa</h2>
                    <p>Temos a solução que a sua empresa precisa!</p>

                    <div className="info-empresa">
                        <div className="info">
                            <div>
                                <FontAwesomeIcon icon="dolly"/>
                            </div>
                            <h3>Heading</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>
                            <button>View details {'>'}</button>
                        </div>
                        <div className="info">
                            <div>
                                <FontAwesomeIcon icon="project-diagram"/>
                            </div>
                            <h3>Heading</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>
                            <button>View details {'>'}</button>
                        </div>
                        <div className="info">
                            <div>
                                <FontAwesomeIcon icon="dolly-flatbed"/>
                            </div>
                            <h3>Heading</h3>
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. </p>
                            <button>View details {'>'}</button>
                        </div>
                       
                    </div>

                </div>
            </div>
        </>
    );
}

export default HomePage;