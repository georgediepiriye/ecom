import styled from "styled-components"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {sliderItems} from "../data"
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 50px;
    position: relative;
    overflow: hidden;
    ${mobile({
       display: "none"
   })}
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
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.sliderIndex * -100}vw);
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

    const [sliderIndex, setsliderIndex] = useState(0)
    const handleClick = (direction)=>{
        if(direction==="left"){
            setsliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 2)
        }else{
            setsliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }
    }
    return (
        <Container>
           <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowBackIosOutlinedIcon/>
           </Arrow>
           <Wrapper sliderIndex={sliderIndex}>
               {sliderItems.map((item)=>{
                return    <Slide key={item.id}>
                    <ImageContainer>
                       <Image src={item.img}/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

               })}
              
             
           </Wrapper>
           <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowForwardIosOutlinedIcon/>
           </Arrow>
        </Container>
    )
}

export default Slider
