import styled from 'styled-components';


export const Container = styled.div`
    display:flex; 
    align-items: center;
    justify-content: space-around;
    padding: 12px;
    flex-direction: column;

`;

export const ResultDetails = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    width:55vw;
    padding: 40px 8px 8px 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20px;
   
    div{
        height: 80%;
        width: 200px;
       
       img{
           height: 100%;
           width: 100%;
       }
    }

    @media screen and (max-width:700px){
        width:75vw;

        div{
            flex-direction: column;
            align-items: center;

            .imagem{
                width: 185px;
                margin-bottom: 10px;
            }
        }
    }
`;
