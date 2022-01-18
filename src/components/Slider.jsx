import styled from "styled-components"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 50px;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fdf4f4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction ==="left" && "10px"};
    right: ${props=> props.direction ==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
`
const Slide = styled.div`
    display: flex;
    width: 100vw;
    height:100vh;
    align-items: center;
`
const ImageContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100%;
    justify-content: center;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Image = styled.img`
    height: 80%;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    return (
        <Container>
           <Arrow direction="left">
              <ArrowBackIosOutlinedIcon/>
           </Arrow>
           <Wrapper>
               <Slide>
                   <ImageContainer>
                      <Image src="https://images.unsplash.com/photo-1626249466753-8b4d83c439c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   </ImageContainer>
                   <InfoContainer>
                       <Title>SUMMER SALE</Title>
                       <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                       <Button>SHOP NOW</Button>
                   </InfoContainer>
               </Slide>
               <Slide>
                   <ImageContainer>
                      <Image src="https://images.unsplash.com/photo-1631415323509-7e870d79cabc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   </ImageContainer>
                   <InfoContainer>
                       <Title>SUMMER SALE</Title>
                       <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                       <Button>SHOP NOW</Button>
                   </InfoContainer>
               </Slide>
               <Slide>
                   <ImageContainer>
                      <Image src="https://images.unsplash.com/photo-1624494077091-be8afe852839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
                   </ImageContainer>
                   <InfoContainer>
                       <Title>SUMMER SALE</Title>
                       <Desc>DON'T COMPROMISE ON STYLE! GET 30% OFF FOR NEW ARRIVALS.</Desc>
                       <Button>SHOP NOW</Button>
                   </InfoContainer>
               </Slide>
           </Wrapper>
           <Arrow direction="right">
              <ArrowForwardIosOutlinedIcon/>
           </Arrow>
        </Container>
    )
}

export default Slider
