import React from 'react';
import { Container, Info, Imagem } from './style.js';
import imagemPrincipal from '../../assets/ilustration.png';

function Home() {

    return (

        <Container>
            <Info>
                <div>
                    <h1>BookList</h1>
                    <span>Pesquise os livros que tem interesse, saiba mais sobre eles e os adicione na sua lista de favoritos.</span>
                </div>
            </Info>
            <Imagem>
                <img src={imagemPrincipal}></img>
            </Imagem>
        </Container>
    );
}

export default Home;