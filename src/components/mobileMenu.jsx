import React from "react";
import Menu from "../style/mobileMenu";
import CloseIcon from '../images/icon-close.svg';
import { useContext } from "react";
import { MenuContext } from "../context/menuContext";
import { useRef } from "react";
const MobileMenu = () => {
    const [showMenu, toggleMenu] = useContext(MenuContext);
    const menuRef = useRef();
    const closeMenu = (element) => {
        if (menuRef.current === element.target) {
            toggleMenu(!showMenu);
        }
    }
    return (
        <Menu animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ type: 'tween', duration: 0.1 }} ref={menuRef} onClick={closeMenu}>
            <Menu.Box animate={{ x: 0 }} initial={{ x: '-100%' }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.2 }}>
                <Menu.BtnBox>
                    <Menu.CloseBtn onClick={() => toggleMenu(!showMenu)} aria-label="Close menu">
                        <img src={CloseIcon} alt="close" />
                    </Menu.CloseBtn>
                </Menu.BtnBox>
                <Menu.Nav>
                    <Menu.NavLink href="#">
                        Collections
                    </Menu.NavLink>
                    <Menu.NavLink href="#">
                        Men
                    </Menu.NavLink>
                    <Menu.NavLink href="#">
                        Women
                    </Menu.NavLink>
                    <Menu.NavLink href="#">
                        About
                    </Menu.NavLink>
                    <Menu.NavLink href="#">
                        Contact
                    </Menu.NavLink>
                </Menu.Nav>
            </Menu.Box>
        </Menu >
    )
}

export default MobileMenu;