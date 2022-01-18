import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styled from 'styled-components';


const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.2);
    opacity: 0;
    transition: all 0.5s ease;
    cursor: pointer;
    

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${Info}{
    opacity: 1;
    }
`


const Image = styled.img`
    height: 75%;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5 ease;
    z-index: 3;
    &:hover{
        background-color: #e9f5f5;
        transform:scale(1.1)

    }
`


const Product = ({item}) => {
    return (
       <Container>
        
           <Image src={item.img}/>
           <Info>
               <Icon>
                   <ShoppingCartOutlinedIcon/>
               </Icon>
               <Icon>
                   <SearchOutlinedIcon/>
               </Icon>
               <Icon>
                   <FavoriteBorderOutlinedIcon/>
               </Icon>
           </Info>

       </Container>
    )
}

export default Product
