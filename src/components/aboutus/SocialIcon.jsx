import React from 'react'
import styled from 'styled-components'
import data from './socialicondata'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Card = styled.div`
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  url(${props => props.background});
    
    /* background-color: lavender; */
    height: 20px;
    width: 20px;
    padding: 5px;
`
const CardContainer = styled.div`
border-radius: 3px;
display: grid;
place-items:center ;
background-color: ${props => props.color};
    height: 30px;
    width: 30px;
`

const SocialIcon = () => {
  return (
    <Container>
        {data.map((ele)=>{
            return <CardContainer key={ele.id} color={ele.bg}><a href={ele.link}><Card  background={ele.img} ></Card></a></CardContainer>
        })}
    </Container>
  )
}

export default SocialIcon