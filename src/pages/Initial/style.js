import styled from 'styled-components';

export const Header = styled.header`
    height:15vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;

    h1{
        color:#9600BC;
    }

    .linha{
        border: 1px solid #111;
        width: 90vw;
    }
`;

export const Menu = styled.div`

    ul{
        justify-content: space-between;
        list-style: none;
        display: flex;
        flex-direction:row;
        gap: 200px;
    }
    li a{
        text-decoration: none;
    }

     a:hover{
        color:#9600BC;
        cursor: pointer;
     }
    
` ;