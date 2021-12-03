import styled from "styled-components";

const Product = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    @media (max-width:900px){
        padding:1rem;
    }
`
const SubTitle = styled.h3`
    font-size: 1rem;
    color:${({ theme }) => theme.colors.orange};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 5px;
`
const Title = styled.h2`
    font-size: 2.3rem;
    font-weight: 700;
    margin: 5px 0 20px 0;

`
const Description = styled.p`
    font-size: 1rem;
    color:${({ theme }) => theme.colors.darkGrayishBlue};
    margin:20px 0 15px 0;
    @media (max-width:900px){
        margin:10px 0 15px 0;
    }
`
const PriceBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 170px;
    align-items: center;
    margin-bottom: 15px;
     @media (max-width:900px){
        margin-bottom: 0;
        
    }
`
const PriceInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0 30px 0;
    @media (max-width:900px){
        flex-direction:row;
        align-items: center;
        width: 100%;
        justify-content: space-between;
    }
`
const Price = styled.span`
    font-size: 2rem;
    font-weight: 700;
`
const Tag = styled.div`
    width: 50px;
    height: 25px;
    color:${({ theme }) => theme.colors.orange};
    background-color: ${({ theme }) => theme.colors.paleOrange};
    border-radius: 6px;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const OldPrice = styled.span`
    font-size: 1rem;
    color:${({ theme }) => theme.colors.grayishBlue};
    font-weight: 700;
    text-decoration: line-through;
    @media (max-width:900px){
        margin-right: 15px;
    }
`
const AddCartBox = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px){
        flex-direction: column;
        
    }
`
const QuantityBox = styled.div`
    height: 55px;
    width: 155px;
    background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 15px;
       @media (max-width: 900px){
        width: 100%;
        margin-bottom: 10px;
    }
`
const QuantityBtn = styled.button`
    cursor: pointer;
    background: none;
    border:none;
    padding: 0;
    display: flex;
    align-items: center;
    &:hover{
        opacity: 0.7;
    }
`
const Quantity = styled.span`
    font-size: 1rem;
    font-weight: 700;
`
const CartBtn = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.orange};
    font-weight: 700;
    color:#fff;
    border: none;
    border-radius: 10px;
    padding: 20px;
    height: 55px;
    width: 275px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        opacity: 0.7;
    }
    @media (max-width:900px){
        width:100%;
    }
`
const CartIcon = styled.img`
    height: 15px;
    width: auto;
    margin-right:15px;
`

Product.SubTitle = SubTitle;
Product.Title = Title;
Product.Description = Description;
Product.PriceBox = PriceBox;
Product.PriceInfo = PriceInfo;
Product.Price = Price;
Product.Tag = Tag;
Product.OldPrice = OldPrice;
Product.AddCartBox = AddCartBox;
Product.QuantityBox = QuantityBox;
Product.QuantityBtn = QuantityBtn;
Product.Quantity = Quantity;
Product.CartIcon = CartIcon;
Product.CartBtn = CartBtn;

export default Product;
