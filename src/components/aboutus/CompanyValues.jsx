import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 50px 200px;
    @media screen and (max-width: 768px) {
        padding: 20px 20px;
  }
`
const Wrapper = styled.div`
    display: flex;
    justify-content:space-around ;
    align-items:center ;
    flex-direction: ${({start})=> start ? 'row-reverse' : 'row'};
    @media screen and (max-width: 768px) {

    flex-direction:column-reverse;
    padding: 20px 0px;

  }
    
`
const Infobox = styled.div`
@media screen and (max-width: 768px) {
       padding-top: 30px;
  }
    
`
const ImageContainer = styled.div`



    
`
const Image = styled.img`
    @media screen and (max-width: 768px) {
    height: 200px;
  }
`

const InfoSection = ({title,para,img,imgStart}) => {
  return (
    <Container>
        <Wrapper start={imgStart}>
            <Infobox>
                <h1>{title}</h1>
                <p>{para}</p>
            </Infobox>
            <ImageContainer><Image src={img} alt="" height='400' /></ImageContainer>
        </Wrapper>
        
    </Container>
  )
}

export default InfoSection