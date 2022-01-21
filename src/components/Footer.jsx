import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlined from '@mui/icons-material/LocalPhoneOutlined';
import { mobile } from '../responsive';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Copywrite = styled.div`
    text-align: center;
    border: 1px solid lightgray;
    margin-bottom: 3px;
    font-weight: 600;
    font-size: 12px;
`

const Container = styled.div`
    display: flex;
    ${mobile({
       flexDirection: "column",
   })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
`



const Center = styled.div`
     flex: 1;
     padding: 20px;
     ${mobile({
       display: "none"
   })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    ${mobile({
       backgroundColor: "#f3eded"
   })}
    
`
const ContactItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment=styled.img`
    width: 50%;
`


const Footer = () => {
    return (

        <MainContainer>
            <Container>
            <Left>
                <Logo>TRENDS.ng</Logo>
                <Desc>
                    Trends.ng is the number one online fashion shop in Nigeria.
                    We are an online store where you can purchase all types of fashion wears and accessories, ranging from polos,designer wears,jackets
                    etc. What more? You can have them delivered directly to you.

                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <TwitterIcon/>

                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact Info</Title>
                <ContactItem><HomeOutlinedIcon style={{marginRight:"10px"}}/> 3rd Avenue A Close House 28, Festac Town,Lagos</ContactItem>
                <ContactItem><LocalPhoneOutlined style={{marginRight:"10px"}}/>+2348066738344</ContactItem>
                <ContactItem><EmailOutlinedIcon style={{marginRight:"10px"}}/>trendsng@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

            </Right>

            </Container>
            <Copywrite>©GD</Copywrite>
        </MainContainer>
       
    )
}

export default Footer
