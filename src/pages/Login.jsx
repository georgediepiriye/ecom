import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


const MainContainer = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
    


`

const Container = styled.div`
    margin-top: 50px;
    width: 100vw;
    height: 100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url("https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&auto=format&w=500&q=60")center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color:white;
    margin-bottom: 100px;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Title = styled.h1`
    font-weight: 400;
    font-size: 24px;
    text-align: center;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 5px 0px;
`

const Button = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    justify-self: center;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
    return (
       <MainContainer>
           <Announcement/>
           <Navbar/>
           <Container>
               <Wrapper>
                   <Title>SIGN IN</Title>
                   <Form>
                       <Input placeholder="username"/>
                       <Input placeholder="password"/>
                       <ButtonContainer>
                           <Button>LOGIN</Button>
                       </ButtonContainer>
                       <Link>Forgotten password?</Link>
                       <Link>Create a new account</Link>
                       
                   </Form>
               </Wrapper>
           </Container>
           <Newsletter/>
           <Footer/>
       </MainContainer> 
    )
}

export default Login
