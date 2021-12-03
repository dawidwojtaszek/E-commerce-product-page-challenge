import styled from "styled-components";
import { motion } from "framer-motion";

const Gallery = styled.div`
    display: flex;
    flex-direction: column;
    width: 450px;
    @media (max-width:500px){
        width:100%;
    }
`
const PrimeryPhotoBox = styled.div`
    width:450px;
    height: 450px;
    border-radius: 15px;
    margin-bottom: 30px;
    cursor: pointer;
    background-color: #fff;
    position: relative;
    @media (max-width: 500px){
        width:100%;
        height: auto;
        border-radius: 0;
        margin:0;
    }
`
const MobileNavBox = styled.div`
    position:absolute;
    top: 45%;
    left:10px;
    right:10px;
    height: 40px;
    width:calc(100% -10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
`
const MobileNavBtn = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border:none;
    background-color:#fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -webkit-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -moz-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);

`


const DesktopBox = styled.div`
    display:block;
    @media (max-width:500px){
        display:none;
    }
`
const MobileBox = styled.div`
    display: none;
    @media (max-width:500px){
        display:block;
    }
`
const PrimeryPhoto = styled(motion.img)`
    width: 450px;
    height: 450px;
    border-radius:15px;
    @media (max-width: 500px){
        width:100%;
        height:auto;
        border-radius: 0;
    }
`

const ThumbnailsBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 450px;
    @media (max-width:500px){
        display:none;
    }
    
`
const Thumbnail = styled.div`
    cursor: pointer;
    width: 88px;
    height: 88px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`
const CurrentThumbnail = styled(Thumbnail)`
    border: 3px solid #ff7d1b;
`

const ThumbnailImg = styled.img`
    width: 90px;
    height: 90px;
      &:hover{
        opacity: 0.7;

    }
`
const CurrentThumbnailImg = styled(ThumbnailImg)`
    opacity: 0.4;
`
const LightBox = styled(motion.div)`
    position: fixed;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.blackOpacity};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
`
const NavBtn = styled.button`
    width: 56px;
    height: 56px;
    border-radius: 100%;
    border:none;
    background-color:#fff;
    cursor: pointer;
    position: absolute;
    top:197px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: ${({ right }) => right};
    left: ${({ left }) => left};
    box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -webkit-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    -moz-box-shadow: 10px 10px 21px 0px rgba(115,113,113,0.44);
    & :hover{
       img {
           filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
       }
    }
`
const CloseBtnBox = styled.div`
    display:flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom:20px;
`
const CloseBtn = styled.button`
    cursor: pointer;
    padding:5px;
    background:none;
    border:none;
`
const CloseIcon = styled.img`
    width:22px;
    height:23px;
    &:hover{
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
`


Gallery.PrimeryPhotoBox = PrimeryPhotoBox;
Gallery.PrimeryPhoto = PrimeryPhoto;
Gallery.MobileBox = MobileBox;
Gallery.DesktopBox = DesktopBox;
Gallery.ThumbnailsBox = ThumbnailsBox;
Gallery.Thumbnail = Thumbnail;
Gallery.CurrentThumbnail = CurrentThumbnail;
Gallery.CurrentThumbnailImg = CurrentThumbnailImg;
Gallery.ThumbnailImg = ThumbnailImg;
Gallery.LightBox = LightBox;
Gallery.NavBtn = NavBtn;
Gallery.CloseBtnBox = CloseBtnBox;
Gallery.CloseBtn = CloseBtn;
Gallery.CloseIcon = CloseIcon;
Gallery.MobileNavBox = MobileNavBox;
Gallery.MobileNavBtn = MobileNavBtn;

export default Gallery;