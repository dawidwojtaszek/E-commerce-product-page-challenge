import styled from "styled-components";
import { motion } from "framer-motion";

export const CartBox = styled.div`
    position:relative;
`

export const CartIconBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;


`
export const CartIcon = styled.img`
    width: 22px;
    height: 20px;
`
export const CartCounter = styled.div`
    height: 15px;
    width: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.orange};
    color:white;
    position:absolute;
    top:-8px;
    right: -8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: .7rem;
`
export const Cart = styled(motion.div)`
    width: 360px;
    height: 250px;
    border-radius: 15px;
    position: absolute;
    top:50px;
    right: -180px;
    background-color: #fff;
    box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -webkit-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -moz-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    z-index: 100;
    @media (max-width: 1320px){
        right: -75px;
    }
    @media (max-width: 500px){
        width: 95vw;
        top:55px;
        right: calc(-75px + 2.5vw );
    }
`
export const CartTitle = styled.div`
    padding: 25px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrayishBlue};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.veryDarkBlue};
`
export const EmptyCart = styled.div`
    width: 100%;
    height: 178px;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    font-weight: 700;
    display:flex;
    align-items: center;
    justify-content: center;
`
export const CartElementBox = styled.div`
    width: 100%;
    height: 178px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`