import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
    color:#fff;
    border: none;
    border-radius: 10px;
    padding: 20px;
    height: 55px;
    width: ${({ width }) => width};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity: 0.7;
    }
`