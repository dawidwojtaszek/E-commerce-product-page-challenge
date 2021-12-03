import React, { useRef, useState, useContext } from "react";
import Gallery from "../style/productSection/productGallery";
import { GatsbyImage } from "gatsby-plugin-image";
import NextBtn from '../images/icon-next.svg';
import PrevBtn from '../images/icon-previous.svg';
import { LightBoxContext } from "../context/lightBoxContext";
import IconClose from '../images/icon-close.svg';



const LightBoxComponent = ({ thumbnails, images, currentPhoto }) => {



    // Lightbox state
    const [currentImg, setCurrentImg] = useState(currentPhoto);

    //Toggle LightBox Context
    const [showLightBox, toggleLightBox] = useContext(LightBoxContext);

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

    // Creat Ref
    const lightboxRef = useRef();

    const closeLightBox = (e) => {
        if (lightboxRef.current === e.target) {
            toggleLightBox(!showLightBox)
        }
        e.preventDefault()
    }

    return (
        <Gallery.LightBox animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opactiy: 0 }} ref={lightboxRef} onClick={closeLightBox}>
            <Gallery>

                <Gallery.CloseBtnBox>
                    <Gallery.CloseBtn onClick={() => toggleLightBox(!showLightBox)}>
                        <Gallery.CloseIcon src={IconClose} alt="close" />
                    </Gallery.CloseBtn>
                </Gallery.CloseBtnBox>

                <Gallery.PrimeryPhotoBox>
                    <Gallery.PrimeryPhoto as={GatsbyImage} image={images[currentImg]} alt='photo' />
                    <Gallery.NavBtn left="-28px" onClick={handlePrevBtn}>
                        <img src={PrevBtn} alt='next' />
                    </Gallery.NavBtn>
                    <Gallery.NavBtn right="-28px" onClick={handleNextBtn}>
                        <img src={NextBtn} alt='next' />
                    </Gallery.NavBtn>
                </Gallery.PrimeryPhotoBox>

                <Gallery.ThumbnailsBox>
                    {
                        thumbnails.map((item, index) => index === currentImg ? (
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
        </Gallery.LightBox>
    )
};

export default LightBoxComponent;