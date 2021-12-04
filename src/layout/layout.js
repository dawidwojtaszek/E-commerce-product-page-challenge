import React from "react";
import Header from "../components/header";
import { Container } from '../style/layout';
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";
import GlobalStyle from "../style/global";
import { Helmet } from "react-helmet";
import { MenuProvider } from "../context/menuContext";
import { CartProvider } from "../context/cartContext";

const Layout = ({ children, title }) => {


    return (

        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <description>Solution to the FrontEnd Mentor chalange</description>
                <link rel="preconnect" href={"https://fonts.googleapis.com"} />
                <link rel="preconnect" href={"https://fonts.gstatic.com"} crossorigin />
                <link href={"https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"} rel="stylesheet" />
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