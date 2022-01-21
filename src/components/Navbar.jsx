import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
   height: 20px;
   width: 100%;
   
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
       padding: "10px 0px",
       marginRight: "15px"
   })}
  

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
       display: "none"
   })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({
       marginLeft: "20px"
   })}
  
  

`
const SearchButton = styled.button`
    flex: 1;
   border: none;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    border: none;
    flex:8;
    padding: 10px 0px 10px 10px;
    ${mobile({
       width: "50px"
   })}
    

`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
      fontSize: "24px"
   })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({
       justifyContent: "center",
       flex:2
   })}
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14;
    margin-left: 24px;
    ${mobile({
       fontSize: "12px",
       marginLeft: "10px"
   })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <SearchButton>
                            <SearchIcon style={{color:"gray", fontSize: 16}}/>

                        </SearchButton>
                       
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TRENDS.ng</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                             <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>

                </Right>
                
            </Wrapper>
          
        </Container>
    )
}

export default Navbar