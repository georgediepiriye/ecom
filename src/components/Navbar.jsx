import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
   height: 20px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    display: flex;
    align-items: center;

`

const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 14;
    margin-left: 24px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <SearchIcon style={{color:"gray", fontSize: 16}}/>
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