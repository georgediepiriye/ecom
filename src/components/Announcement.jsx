import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    ${mobile({
       fontSize: "12px"
   })}
    
`

const Announcement = () => {
    return (
      <Container>
          Super Deal! Free Delivery on Orders Over ₦100,000
      </Container>
    )
}

export default Announcement
