import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height: 85vh;
    display:flex; 
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Info = styled.div`
    height: 100%;
    width: 50%;
    justify-content: space-around;
    padding:60px;
    div{
        margin-top: 100px;
        margin-left: 100px;
    }
    div span{
        font-size: 30px;
    }
`;

export const Imagem = styled.div`
    height: 100%;
    width: 50%;
    img{
        height: 100%;
        width: 100%;
    }
`;