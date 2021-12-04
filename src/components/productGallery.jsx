import React from "react";
import Gallery from "../style/productSection/productGallery";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LightBoxComponent from './lightbox';
import { AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import { LightBoxContext } from "../context/lightBoxContext";
import NextIcon from '../images/icon-next.svg';
import PrevIcon from '../images/icon-previous.svg';
const ProductGallery = ({ product }) => {

    // Create arrays from product images
    let imgArr = [];
    let thumbnailArr = [];
    imgArr[0] = getImage(product.img1);
    imgArr[1] = getImage(product.img2);
    imgArr[2] = getImage(product.img3);
    imgArr[3] = getImage(product.img4);
    thumbnailArr[0] = getImage(product.thumbnail1);
    thumbnailArr[1] = getImage(product.thumbnail2);
    thumbnailArr[2] = getImage(product.thumbnail3);
    thumbnailArr[3] = getImage(product.thumbnail4);



    // State for current featured image
    const [currentImg, setCurrentImg] = useState(0);

    // Lightbox context to toggle lightbox
    const [showLighBox, toggleLightBox] = useContext(LightBoxContext);

    // NEXT Button function
    const handleNextBtn = (e) => {
        if (currentImg === 3) {
            setCurrentImg(0)
        } else {
            setCurrentImg(currentImg + 1);
        }
        e.preventDefault();
    }

    // PREVIOUS Button function
    const handlePrevBtn = (e) => {
        if (currentImg === 0) {
            setCurrentImg(3)
        } else {
            setCurrentImg(currentImg - 1);
        }
        e.preventDefault();
    }
    return (
        <div>
            <AnimatePresence>
                {
                    showLighBox ? (<LightBoxComponent thumbnails={thumbnailArr} images={imgArr} currentPhoto={currentImg} />) : ('')
                }
            </AnimatePresence>
            <Gallery>
                <Gallery.DesktopBox>
                    <Gallery.PrimeryPhotoBox onClick={() => toggleLightBox(!showLighBox)}>
                        <Gallery.PrimeryPhoto as={GatsbyImage} image={imgArr[currentImg]} alt="photo" />
                    </Gallery.PrimeryPhotoBox>
                </Gallery.DesktopBox>
                <Gallery.MobileBox>
                    <Gallery.PrimeryPhotoBox>
                        <Gallery.MobileNavBox>
                            <Gallery.MobileNavBtn onClick={handlePrevBtn} aria-label="Previus Photo">
                                <img src={PrevIcon} alt="previous" />
                            </Gallery.MobileNavBtn>
                            <Gallery.MobileNavBtn onClick={handleNextBtn} aria-label="Next Photo">
                                <img src={NextIcon} alt="next" />
                            </Gallery.MobileNavBtn>
                        </Gallery.MobileNavBox>
                        <Gallery.PrimeryPhoto as={GatsbyImage} image={imgArr[currentImg]} alt="photo" />
                    </Gallery.PrimeryPhotoBox>
                </Gallery.MobileBox>

                <Gallery.ThumbnailsBox>
                    {
                        thumbnailArr.map((item, index) => index === currentImg ? (
                            <Gallery.CurrentThumbnail onClick={() => setCurrentImg(index)} key={index}>
                                <Gallery.CurrentThumbnailImg as={GatsbyImage} image={item} alt="thumbnail" />
                            </Gallery.CurrentThumbnail>
                        ) : (
                            <Gallery.Thumbnail onClick={() => setCurrentImg(index)} key={index}>
                                <Gallery.ThumbnailImg as={GatsbyImage} image={item} alt="thumbnail" />
                            </Gallery.Thumbnail>
                        ))
                    }
                </Gallery.ThumbnailsBox>
            </Gallery>
        </div>
    )
}

export default ProductGallery;