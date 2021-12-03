import styled from "styled-components";
import { motion } from "framer-motion";

const Menu = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.blackOpacity};
    position:fixed;
    z-index: 101;
`
const Box = styled(motion.div)`
    width: 250px;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`
const BtnBox = styled.div`
    display: flex;
    width: 100%;
    padding: 25px;
    justify-content: flex-start;
`
const CloseBtn = styled.button`
    height: 16px;
    width: 17px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
`
const NavLink = styled.a`
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-size: 1rem;
    text-decoration: none;
    font-weight: 700;
    margin: 15px 30px;
`

Menu.Box = Box;
Menu.BtnBox = BtnBox;
Menu.CloseBtn = CloseBtn;
Menu.Nav = Nav;
Menu.NavLink = NavLink;
export default Menu;