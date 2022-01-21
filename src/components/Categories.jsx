import React from "react"
import styled from "styled-components"
import { categories } from "../data"
import { mobile } from "../responsive"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({
       flexDirection: "column",
       marginTop: "20px"
   })}
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item)=>{
              return <CategoryItem item={item} key={item.id}/>
            })}

        </Container>
    )
}

export default Categories
