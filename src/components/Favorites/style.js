import styled from 'styled-components';


export const Container = styled.div`
    height: 85vh;
    display:flex; 
    align-items: center;
    justify-content: space-around;
    padding: 12px;

    @media screen and (max-width:700px){
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
  
    div{
        width: 56%;
    }
    div span{
        font-size: 30px;
    }

    @media screen and (max-width:700px){
        div{
            width:80%;
            height:90%;
        }
    }     
            
`;

export const Imagem = styled.div`
    height: 100%;
    img{
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width:700px){
        height:50%;
        width:80%;
        img{
            height: 80%;
            width: 85%;
        }
    }  
`;
