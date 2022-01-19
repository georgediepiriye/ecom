import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf5f5;
    flex-direction: column;
`

const Title = styled.h1`
    font-style: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

`

const Input = styled.input`
    flex: 8;
    border: none;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    color: white;
    background-color: teal;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favourite products.</Desc>
            <InputContainer>  
                <Input placeholder='Your email'/>
                <Button>
                    <SendIcon/>
                </Button>

            </InputContainer>
        </Container>
    )
}

export default Newsletter