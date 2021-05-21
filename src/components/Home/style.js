import styled from 'styled-components';

export const Container = styled.div`
    height: 85vh;
    display:flex; 
    align-items: center;
    justify-content: center;
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
