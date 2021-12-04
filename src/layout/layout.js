import React from "react";
import Header from "../components/header";
import { Container } from '../style/layout';
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import GlobalStyle from "../style/global";
import { Helmet } from "react-helmet";
import { MenuProvider } from "../context/menuContext";
import { CartProvider } from "../context/cartContext";
import '../style/font.css';
const Layout = ({ children, title }) => {


    return (

        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <description>Solution to the FrontEnd Mentor chalange</description>
            </Helmet>
            <>
                <CartProvider>
                    <MenuProvider>
                        <Header />

                        <Container>
                            {children}
                        </Container>
                    </MenuProvider>
                </CartProvider>
            </>

        </ThemeProvider>

    )
}

export default Layout;