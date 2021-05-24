import React, { useState } from 'react';
import { Container, ResultDetails } from './style.js';


function Favorites(props) {

    const imagemDefault = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

    const [listaFavoritos, setListaFavoritos] = useState(props.favoritos);
    const result = listaFavoritos.map((livro) => (
        <ResultDetails>
            <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'auto' }}>
                <div className='imagem' style={{ width: '250px', height: '250px' }}><img src={livro.hasOwnProperty('imageLinks') ? livro.imageLinks.smallThumbnail : imagemDefault}></img></div>
                <div style={{ width: '100%', height: '100px', marginLeft: '10px' }}>
                    <p><b>Titulo:</b> {livro.title} </p>
                    <p><b>Descrição:</b> {livro.description}</p>
                    <p><b>Data de publicação:</b> {livro.publishedDate}</p>
                </div>
            </div>
        </ResultDetails>
    ))


    return (

        <Container>
            {result}
           
        </Container>
    );
}



export default Favorites;