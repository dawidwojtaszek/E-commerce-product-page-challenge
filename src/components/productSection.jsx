import React from "react";
import ProductInfo from "./productInfo";
import ProductGallery from "./productGallery";
import { Section } from "../style/productSection/productSection";
import { graphql, useStaticQuery } from 'gatsby';
import { LightBoxProvider } from "../context/lightBoxContext";

const ProductSection = () => {

    const data = useStaticQuery(graphql`
        query product {
        allMarkdownRemark {
            nodes {
            frontmatter {
                id
                description
                name
                oldPrice
                price
                subtitle
                tag
                img1 {
                childImageSharp {
                    gatsbyImageData(height: 450, width: 450, placeholder: DOMINANT_COLOR, quality: 100)
                }
                }
                img2 {
                childImageSharp {
                    gatsbyImageData(height: 450, width: 450, placeholder: DOMINANT_COLOR, quality: 100)
                }
                }
                img3 {
                childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, width: 450, height: 450, quality: 100)
                }
                }
                img4 {
                childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, width: 450, height: 450, quality: 100)
                }
                }
                thumbnail1 {
                childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, height: 90, width: 90, quality: 100)
                }
                }
                thumbnail2 {
                childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, height: 90, width: 90, quality: 100)
                }
                }
                thumbnail3 {
                childImageSharp {
                    gatsbyImageData(height: 90, width: 90, placeholder: DOMINANT_COLOR, quality: 100)
                }
                }
                thumbnail4 {
                childImageSharp {
                    gatsbyImageData(width: 90, height: 90, placeholder: DOMINANT_COLOR, quality: 100)
                }
                }
            }
            }
        }
        }
    `)

    const product = data.allMarkdownRemark.nodes[0].frontmatter;
    return (
        <Section>
            <LightBoxProvider>
                <ProductGallery product={product} />
            </LightBoxProvider>
            <ProductInfo product={product} />
        </Section>
    )
}

export default ProductSection;