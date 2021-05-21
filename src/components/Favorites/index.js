import React from 'react';
import {Container, Info, Imagem} from './style.js';
import imagemConstrucao from '../../assets/building_websites_.png';

function Favorites() {

    return (

        <Container>
            <Info>
                <div>
                    <h1>Construindo...</h1>
                    <span>Essa página ainda está em construção, em breve você poderá ver os seus livros favoritos!</span>
                </div>
            </Info>
            <Imagem>
                <img src={imagemConstrucao}></img>
            </Imagem>
        </Container>
    );
}

export default Favorites;