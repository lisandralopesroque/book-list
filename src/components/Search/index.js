import React, { useState } from 'react';
import { Container, Searching, Result, ResultDetails, Buttons } from './style.js';
import icone from '../../assets/search.png';
import api from '../../services/api';
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Search(props) {

  const imagemDefault = 'https://camo.githubusercontent.com/b7b7dca15c743879821e7cfc14e8034ecee3588e221de0a6f436423e304d95f5/68747470733a2f2f7a7562652e696f2f66696c65732f706f722d756d612d626f612d63617573612f33363664616462316461323032353338616531333332396261333464393030362d696d6167652e706e67';

  const [livro1, setLivro1] = useState(0);
  const [livro2, setLivro2] = useState(1);
  const [livro3, setLivro3] = useState(2);

  const[favorite, setFavorite] = useState(0);
 
  const [numbDetalhe, setNumbDetalhe] = useState(-1);

  const [livroPesquisado, setLivroPesquisado] = useState({ livro: '' });
  const [informacoes, setInformacoes] = useState('');

  const [displayDiv, setDisplayDiv] = useState({
    div1: true,
    div2: true,
    div3: true,
    detalhe: true,
  });

  function handleNextPosition() {
    if (livro1 >= 0) {
      setLivro1(livro1 + 3)
      if (livro1 === informacoes.length - 1) {
        setDisplayDiv({ div2: true, div3: true })
      } else {
        setLivro2(livro2 + 3)
        if (livro2 === informacoes.length - 1) {
          setDisplayDiv({ div3: true })
        } else {
          setLivro3(livro3 + 3)
        }
      }
    }
  }
  function handleReturnPosition() {
    if (livro1 >= 0) {
      setLivro1(livro1 - 3)
      setLivro2(livro2 - 3)
      setLivro3(livro3 - 3)
    }
  }

  function handleDetalhes(posicaoLivro) {
    setDisplayDiv({ detalhe: false });
    setNumbDetalhe(posicaoLivro);
  }

  function handleCloseDetails() {
    if (!displayDiv.detalhe) {
      setDisplayDiv({
        detalhe: true
      })
      setFavorite(0)
    }
  }

  function handleFavorite(){
    if(favorite === 0){
      setFavorite(1)
      props.addFavorites(informacoes[numbDetalhe].volumeInfo)
    }else{
      setFavorite(0)
    }
  }

  const getInformacoes = (e) => {
    e.preventDefault();
    api.get('books/v1/volumes?q=' + livroPesquisado)
      .then(response => {
        setInformacoes(response.data.items);
        setDisplayDiv({ div1: false, div2: false, div3: false, detalhe: true })
      });
  }

  const handleLivro = (e) => {
    const book = e.target.value;
    setLivroPesquisado(book);
  }



  return (

    <Container>
      <Searching>
        <input type="text" onChange={(e) => { handleLivro(e) }} placeholder="Busque pelo nome do livro" />
        <button onClick={getInformacoes}><img src={icone} alt="img" /></button>
      </Searching >
      <ResultDetails style={{ display: displayDiv.detalhe ? 'none' : 'flex' }}>
        <button className='buttonFavorite' onClick={handleFavorite}>{favorite === 0 ? <AiOutlineHeart/> : <AiFillHeart/>}</button>
        <button onClick={handleCloseDetails}><IoMdCloseCircleOutline /></button>
        {numbDetalhe >= 0
          ? <div style={{ display: 'flex', width: '100%', height: '100%', overflow: 'auto' }}>
            <div className='imagem' style={{ width: '250px', height: '250px' }}><img src={informacoes[numbDetalhe].volumeInfo.hasOwnProperty('imageLinks') ? informacoes[numbDetalhe].volumeInfo.imageLinks.smallThumbnail : imagemDefault}></img></div>
            <div style={{ width: '100%', height: '100px', marginLeft: '10px' }}>
              <p><b>Titulo:</b> {informacoes[numbDetalhe].volumeInfo.title} </p>
              <p><b>Descrição:</b> {informacoes[numbDetalhe].volumeInfo.description}</p>
              <p><b>Data de publicação:</b> {informacoes[numbDetalhe].volumeInfo.publishedDate}</p>
            </div>
          </div>
          : null
        }

      </ResultDetails>
      <Result style={{ display: displayDiv.detalhe ? 'flex' : 'none' }}>
        <div style={{ display: displayDiv.div1 ? 'none' : 'block' }}>
          {livro1 <= informacoes.length - 1
            ? <div style={{ height: '100%' }}>
              <img src={displayDiv.div1 ? imagemDefault : informacoes[livro1].volumeInfo.hasOwnProperty('imageLinks') ? informacoes[livro1].volumeInfo.imageLinks.smallThumbnail : imagemDefault}></img>
              <span>{displayDiv.div1 ? '' : informacoes[livro1].hasOwnProperty('volumeInfo') ? informacoes[livro1].volumeInfo.title : ''}</span>
              <p className="detalhesImagem">
                <span>Detalhes</span>
                <button onClick={() => handleDetalhes(livro1)}><AiFillPlusCircle /></button>
              </p>
            </div>
            : null
          }
        </div>
        <div style={{ display: displayDiv.div2 ? 'none' : 'block' }}>
          {livro2 <= informacoes.length - 1
            ? <div style={{ height: '100%' }}>
              <img src={displayDiv.div2 ? imagemDefault : informacoes[livro2].volumeInfo.hasOwnProperty('imageLinks') ? informacoes[livro2].volumeInfo.imageLinks.smallThumbnail : imagemDefault}></img>
              <span>{displayDiv.div2 ? '' : informacoes[livro2].hasOwnProperty('volumeInfo') ? informacoes[livro2].volumeInfo.title : ''}</span>
              <p className="detalhesImagem">
                <span>Detalhes</span>
                <button onClick={() => handleDetalhes(livro2)}><AiFillPlusCircle /></button>
              </p>
            </div>
            : null
          }
        </div>
        <div style={{ display: displayDiv.div3 ? 'none' : 'block' }}>
          {livro3 <= informacoes.length - 1
            ? <div style={{ height: '100%' }}>
              <img src={displayDiv.div3 ? imagemDefault : informacoes[livro3].volumeInfo.hasOwnProperty('imageLinks') ? informacoes[livro3].volumeInfo.imageLinks.smallThumbnail : imagemDefault}></img>
              <span>{displayDiv.div3 ? '' : informacoes[livro3].hasOwnProperty('volumeInfo') ? informacoes[livro3].volumeInfo.title : ''}</span>
              <p className="detalhesImagem">
                <span>Detalhes</span>
                <button onClick={() => handleDetalhes(livro3)}><AiFillPlusCircle /></button>
              </p>
            </div>
            : null
          }
        </div>
      </Result>
      <Buttons style={{ display: informacoes !== '' && displayDiv.detalhe ? 'flex' : 'none' }}>
        <button onClick={handleReturnPosition} disabled={livro1 === 0 ? true : false}>Anterior</button>
        <button onClick={handleNextPosition} disabled={(livro1 === informacoes.length - 1 || livro2 === informacoes.length - 1 || livro3 === informacoes.length - 1) ? true : false}>Próximo</button>
      </Buttons>

    </Container>
  );
}
export default Search;