import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Container = styled.div``
const Wrapper = styled.div`
    margin: 30px;
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 400;
    text-align: center;

`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const TopTexts = styled.div`
    
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color:${props=>props.type === "filled"  && "white"};
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`

const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const ProductDetails= styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor= styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};

`
const ProductSize = styled.span``


const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

const ProductAmountContainer= styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
 
`
const ProductAmount= styled.span`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice= styled.span`
    font-size: 30px;
    font-weight: 400;
`


const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 400;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==='total'  && '500'};
    font-size: ${props=>props.type==='total'  && '24px'};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    font-weight: 600;
    color: white;
`

const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/859267/1.jpg?1795"/>
                                <Details>
                                    <ProductName><b>Product: </b>Men's Tracksuit Set Jogger Sweatpants Sports Suit Black </ProductName>
                                    <ProductId><b>ID: </b>232231134</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size: </b>34</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <RemoveOutlinedIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <AddOutlinedIcon/>

                                </ProductAmountContainer>
                                <ProductPrice>₦5,000</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/859267/1.jpg?1795"/>
                                <Details>
                                    <ProductName><b>Product: </b>Men's Tracksuit Set Jogger Sweatpants Sports Suit Black </ProductName>
                                    <ProductId><b>ID: </b>232231134</ProductId>
                                    <ProductColor color='black'/>
                                    <ProductSize><b>Size: </b>34</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <RemoveOutlinedIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <AddOutlinedIcon/>

                                </ProductAmountContainer>
                                <ProductPrice>₦5,000</ProductPrice>
                            </PriceDetails>
                        </Product>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₦55,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Delivery</SummaryItemText>
                            <SummaryItemPrice>₦5,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Delivery discount</SummaryItemText>
                            <SummaryItemPrice>₦-2,000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem  type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₦75,000</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>

            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Cart
