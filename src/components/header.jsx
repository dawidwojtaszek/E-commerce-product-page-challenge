import React from "react";
import Wrap from "../style/header";
import Logo from '../images/logo.svg'
import AvatarImg from '../images/image-avatar.png'
import CartIconComponent from "./cartIcon";
import HamburgerIcon from '../images/icon-menu.svg'
import MobileMenu from "./mobileMenu";
import { MenuContext } from "../context/menuContext";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

const Header = () => {
    const [showMenu, toggleMenu] = useContext(MenuContext);

    return (
        <div>
            <AnimatePresence>
                {showMenu ? (<MobileMenu />) : ('')}
            </AnimatePresence>

            <Wrap>
                <Wrap.LeftSide>
                    <Wrap.Hamburger onClick={() => toggleMenu(!showMenu)} aria-label="Menu">
                        <img src={HamburgerIcon} alt='menu' />
                    </Wrap.Hamburger>
                    <Wrap.Logo src={Logo} alt="logo" />
                    <Wrap.Nav>
                        <Wrap.NavList>
                            <Wrap.NavListElement>
                                <Wrap.NavLink href='#'>
                                    Collections
                                </Wrap.NavLink>
                            </Wrap.NavListElement>
                            <Wrap.NavListElement>
                                <Wrap.NavLink href='#'>
                                    Men
                                </Wrap.NavLink>
                            </Wrap.NavListElement>
                            <Wrap.NavListElement>
                                <Wrap.NavLink href='#'>
                                    Women
                                </Wrap.NavLink>
                            </Wrap.NavListElement>
                            <Wrap.NavListElement>
                                <Wrap.NavLink href='#'>
                                    About
                                </Wrap.NavLink>
                            </Wrap.NavListElement>
                            <Wrap.NavListElement>
                                <Wrap.NavLink href='#'>
                                    Contact
                                </Wrap.NavLink>
                            </Wrap.NavListElement>
                        </Wrap.NavList>
                    </Wrap.Nav>
                </Wrap.LeftSide>
                <Wrap.RightSide>
                    <CartIconComponent />
                    <Wrap.AvatarBox>
                        <Wrap.Avatar src={AvatarImg} />
                    </Wrap.AvatarBox>
                </Wrap.RightSide>
            </Wrap>
        </div>
    )
}

export default Header