import styled from 'styled-components'

const Element = styled.div`
    width:90%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 8px;
`
const Info = styled.div`
    width:215px;
    height: 50px;
    padding: 0.2rem;
    display: flex;
    flex-direction: column;
`
const Total = styled.div`
    display: flex;
    justify-content: flex-start;
    gap:0.5rem;
`
const Text = styled.span`
    font-size: .9rem;
    color:${({ theme }) => theme.colors.darkGrayishBlue};
`
const Price = styled.span`
    font-size: .9rem;
    font-weight: 700;
`
const RemoveBox = styled.div`
    width: 15px;
    height: 15px;
    cursor: pointer;
`
const RemoveIcon = styled.img`
    width: 15px;
    height: 15px;
`

Element.Img = Img;
Element.Info = Info;
Element.Total = Total;
Element.Text = Text;
Element.Price = Price;
Element.RemoveBox = RemoveBox;
Element.RemoveIcon = RemoveIcon;

export default Element