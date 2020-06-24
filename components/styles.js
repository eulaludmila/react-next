import styled from 'styled-components';


export const List = styled.ul`
    width:100%;
    /* max-width:400px; */
    height:60px;
    background-color: #FAFAFA;
    display:flex;
    justify-content:center;
    align-items:center;

    a{
        height:100%;
        color:#000;
        font-size:16px;
        display:flex;
        align-items:center;
        padding:0 15px;
        text-decoration:none;
    }
    
    a:hover{
        /* transition: 2s; */
        /* background-color:#; */
        background-color:#000;
        color:#FAFAFA;

    }
`;