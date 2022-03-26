import React from 'react'
import styled from 'styled-components'
import Card from '../components/aboutus/Card'
import CompanyValues from '../components/aboutus/CompanyValues'
import {story, values, culture} from '../components/aboutus/infosectiondata'


const Container = styled.div`
 background-color: ${({theme}) => theme.bg};
    color: ${({theme}) => theme.text};
   
    /* border: 2px solid red; */
` 


const AboutUs = ({activeTheme , toggleTheme}) => {

  
  return (
    <Container>
     <CompanyValues {...story} />
      <Card />
      <CompanyValues {...values} />
      <CompanyValues {...culture} />
    </Container>
  )
}

export default AboutUs
