import React from 'react'
import data from './carddata'
import styled from 'styled-components'

const Container = styled.div`
    padding: 40px 0px;
`
const Heading = styled.div`
    text-align: center;
   padding: 30px 0px;
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
    flex-direction: column;
    gap:30px ;
    }
  }

`
const CardBox = styled.div`
    /* display: flex ;   */
    /* border: 2px solid black; */
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.46) 0px 1px 4px;
    border-radius: 5px ;
    margin: 0px 50px ;
    padding: 40px 50px;
    text-align:center;
    background-color: ${({theme}) => theme.card};
    transition: 0.4s;
    &:hover{
        /* padding: 45px 55px; */
        transition: 0.4s;
        background-color: #292727;
    }
    @media screen and (max-width: 768px) {
        margin:0px auto;
  }
`
const ImageContainer = styled.div`
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:  url(${props => props.background});
    height: 140px;
    width: 140px;
    margin: 0px auto;
`
const PersonPositionbox = styled.div`
    margin: 0px;
    padding: 0px;
    font-size: 12px;
    color:  #00A3FF;
`
const PersonPositionContainer = styled.div`
    margin-top:10px ;
`
const PersonNameBox = styled.h5`
    font-size: 17px;
`
const LinkedinContainer= styled.div`
cursor: pointer;
    display:grid ;
    place-items: center;
    position: absolute;
    padding: 12px 15px;
    background-color: #2F7BEA;
    top:0 ;
    right: 0;
    border-radius: 2px;
    &:hover{
        background-color:  #235eb8;
    }
`
const CardSocialIcon = styled.img`

    height:18px ;
    width:18px ;
`

const Card = () => {
  return (
    <Container>
        <Heading>
            <h1>Our Team</h1>
        </Heading>
        <CardContainer>
            {data.map((ele)=>{
                return <CardBox key={ele.id}>
                    <ImageContainer background={ele.img}></ImageContainer>
                    <PersonPositionContainer><PersonPositionbox>{ele.position}</PersonPositionbox></PersonPositionContainer>
                    <div><PersonNameBox>{ele.name}</PersonNameBox></div>
                    <LinkedinContainer className=''>
                        <a href="https://www.linkedin.com/in/rohit-bhagat-2833801b1/" target='_blank' rel="noopener noreferrer"><CardSocialIcon src="./assets/icons/linkedin.png"  alt="" /></a>
                    </LinkedinContainer>
                </CardBox>
            })}
        </CardContainer>
        
    </Container>
  )
}

export default Card