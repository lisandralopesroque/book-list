import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    height: 85vh;
    display:flex; 
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const Searching = styled.div`
    height: 5vh;
    width: 40vw;
    display: flex;
    margin-top:50px;

    input{
        height: 5vh;
        width: 40vw;
        border-radius: 20px;
        border: 1px solid #111;
        outline: none;
        padding-left: 10px;
    }

    button{
        float:left;
        background-color:transparent;
        border: none;
        cursor:pointer;
        padding-left: 10px;

    }
`;

export const Result = styled.div`
    height: 50vh;
    width: 50vw;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div{
        height: 80%;
        width: 200px;
       
       img{
           height: 100%;
           width: 100%;
       }
    }

    .detalhesImagem{
        display: flex;
        align-items: center;

        button{
        background-color:transparent;
        border: none;
        cursor:pointer;
        display: flex;
        align-items: center;
        margin-left: 10px;

            svg{
                width:1.5em;
                height: 1.5em;
                color:#9600BC;
            }
        }
    }
`;

export const ResultDetails = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    position: absolute;
    width:55vw;
    height:50vh;
    margin-top: 120px;
    padding: 40px 8px 8px 8px;
    border: 1px solid #ccc;
    border-radius: 10px;
    
    .buttonFavorite{
        background-color:transparent;
        border: none;
        cursor:pointer;
        display: flex;
        align-items: center;
        position: absolute;
        top:10px;
        left: 15px;

            svg{
                width:1.9em;
                height: 1.9em;
                color:#9600BC;
            }
    }

    button{
        background-color:transparent;
        border: none;
        cursor:pointer;
        display: flex;
        align-items: center;
        position: absolute;
        top:10px;
        right: 15px;

            svg{
                width:1.9em;
                height: 1.9em;
                color:#9600BC;
            }
    }
    div{
        height: 80%;
        width: 200px;
       
       img{
           height: 100%;
           width: 100%;
       }
    }

`;

export const Buttons = styled.div`
    height: 5vh;
    width: 20vw;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    margin-bottom: 10px;

    button{
        width: 5vw;
        border-radius: 20px;
        background-color: transparent;
        cursor:pointer;
        border:1px solid #111;

        :hover{
            color: #fff;
            background-color: #9600BC;
        }

    }

    button[disabled]{
        border:1px solid #ccc;
        cursor: default;

        :hover{
            color: #ccc ;
            background-color: transparent;
        }
    }

`;