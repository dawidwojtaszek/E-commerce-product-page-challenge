import React, { useContext } from "react";
import Element from "../style/header/cartElement";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import RemoveIcon from '../images/icon-delete.svg';
import { CartContext } from "../context/cartContext";
const CartElement = () => {

    const [currentCart, setCart] = useContext(CartContext)

    //Query product photo
    const data = useStaticQuery(graphql`
        query photo {
            markdownRemark {
                frontmatter {
                thumbnail1 {
                    childImageSharp {
                    gatsbyImageData(
                        width: 50
                        height: 50
                        quality: 100
                        placeholder: DOMINANT_COLOR
                    )
                    }
                }
                }
            }
        }
    `);
    const thumbnail = getImage(data.markdownRemark.frontmatter.thumbnail1)

    return (
        <Element>
            <Element.Img as={GatsbyImage} image={thumbnail} alt="photo" />
            <Element.Info>
                <Element.Text>Fall Limited Edition Sneakers</Element.Text>
                <Element.Total>
                    <Element.Text>$125.00</Element.Text>
                    <Element.Text>x {currentCart}</Element.Text>
                    <Element.Price>${currentCart * 125}</Element.Price>
                </Element.Total>
            </Element.Info>
            <Element.RemoveBox onClick={() => setCart(0)}>
                <Element.RemoveIcon src={RemoveIcon} alt="remove" />
            </Element.RemoveBox>
        </Element>
    )
}

export default CartElement;

