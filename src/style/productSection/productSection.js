import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:90px;
    @media (max-width:900px){
        flex-direction: column;
        margin-top:0;
    }
    @media (max-width:500px){
        width: 100%;
        justify-content: center;
        align-items: center;
    }
`