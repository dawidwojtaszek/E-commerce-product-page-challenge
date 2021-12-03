import styled from "styled-components";

const Wrap = styled.header`
    max-width: ${({ theme }) => theme.size.container};
    margin:auto;
    height: 110px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrayishBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:900px){
        height: 70px;
    }
`
const LeftSide = styled.div`
    display: flex;
    justify-content: space-between;
    height: 20px;
    align-items: center;
`
const Hamburger = styled.div`
    width: 17px;
    height: 16px;
    margin: 0 15px;
    display: none;
    cursor: pointer;
    @media (max-width: 900px){
        display: block;
    }
`
const Logo = styled.img`
    height: 20px;
    width: auto;
    margin-right: 25px;
`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-left: 35px;
    @media (max-width:900px){
        display: none;
    }
`
const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 110px;
`
const NavListElement = styled.li`
    margin-right: 35px;
    display: flex;
    align-items: center;
    height: 110px;
        &:hover{
        border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
        height: 106px;
        margin-top: 4px;
    }
`
const NavLink = styled.a`
    color:${({ theme }) => theme.colors.darkGrayishBlue};
    padding: 50% 0;
    text-decoration: none;
    font-size: 1rem;
`

const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const AvatarBox = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.orange};
    margin:2px 5px 2px 40px;
    transform: height width 0.2;
    cursor: pointer;
    &:hover{
    height: 54px;
    width: 54px;
    margin:0 0 0 36px; 
    }
    @media (max-width:900px){
        width: 25px;
        height: 25px;
        margin: 0 25px 0 25px;
        background-color: white;

        &:hover{
            margin:0 25px 0 25px;
            width: 25px;
            height: 25px;
        }
    }
`
const Avatar = styled.img`
    height: 50px;
    width: 50px;
    @media (max-width:900px){
        height: 25px;
        width: 25px;
    }
`

Wrap.LeftSide = LeftSide;
Wrap.Hamburger = Hamburger;
Wrap.Logo = Logo;
Wrap.Nav = Nav;
Wrap.NavList = NavList;
Wrap.NavListElement = NavListElement;
Wrap.NavLink = NavLink;
Wrap.RightSide = RightSide;
Wrap.AvatarBox = AvatarBox;
Wrap.Avatar = Avatar;
export default Wrap