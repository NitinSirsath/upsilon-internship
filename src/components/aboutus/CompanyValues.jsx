import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 50px 200px;
`
const Wrapper = styled.div`
    display: flex;
    justify-content:space-around ;
    align-items:center ;
    flex-direction: ${({start})=> start ? 'row-reverse' : 'row'};
`
const Infobox = styled.div`
    
`
const ImageContainer = styled.div`
    
`
const Image = styled.img`
    
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