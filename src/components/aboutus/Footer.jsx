import React from 'react'
import styled from 'styled-components'
import SocialIcon from './SocialIcon'

const Container = styled.div`
    padding: 40px 100px;
    background-color: ${({theme}) => theme.footer};
    color: ${({theme}) => theme.text};
    @media screen and (max-width: 768px) {
        padding: 0px 0px;
  }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around ;
    align-items:center ;
    list-style: none;
    @media screen and (max-width: 768px) {
        flex-direction: column;
  }
`
const ListItem = styled.div`
        li{
            padding: 4px 0px;
            cursor: pointer;

            &:hover{
                color: grey
            }
        }
`
const MailingBox = styled.div`
    display: flex;
    position: relative;
    align-items: center;
`

const FooterInput = styled.input`
    padding: 4px 50px 4px 20px;
    display: flex;
   
`
const SocialIconsContainer = styled.div`
    padding-top: 10px;
    @media screen and (max-width: 768px) {
     padding: 20px 0px;
  }
`
const FooterInputIcon = styled.img`
cursor: pointer;
position: absolute;
   top: 10;
  right: 20px;
 
`
const LogoHeading = styled.h2`
      @media screen and (max-width: 768px) {
        font-size: 50px;
        
  }
`
const List = styled.div`

    gap: 120px;
  display: flex;
      @media screen and (max-width: 768px) {
      display: flex;
      gap: 20px;
      margin: 10px;
  }
`
const List2 = styled.div`
     @media screen and (max-width: 768px) {
     font-size: larger;
     font-weight: 500;
  }
`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <div>
             
                   <LogoHeading>Upsilon</LogoHeading> 
               
                <div>
                    <p className='text-secondary'>Top instructors from around the world <br /> teach millions of students.</p>
                </div>
                <div>
                    <p className='fw-bold'>Subscribe Newsletter</p>
                    <MailingBox>
                    <FooterInput className='input' type="text" placeholder='Your email here' />
                    <FooterInputIcon src="./assets/icons/send.png" height='25' alt="" />
                    </MailingBox>
                </div>
            </div>
           <List>
           <ListItem>
                <li>Teach Here</li>
                <li>Be part</li>
                <li>Business</li>
                <li>Blogs</li>
                <li>Help Center</li>
            </ListItem>
            <ListItem>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Download App</li>
                <li>Register</li>
                <li>Term & Policy</li>
            </ListItem>
           </List>
            <div>
               <List2>
               <ListItem>
                    <li>Reach us at</li>
                    <li>+91 8888888888</li>
                    <li>upsilon175@gmail.com</li>
                    <li>Follow us on :</li>
                </ListItem>
               </List2>
                <SocialIconsContainer>
                    <SocialIcon />
                </SocialIconsContainer>
                {/* <Icons>
                    <img src="./assets/icons/instagram.png" height='20' alt="" />
                    <img src="./assets/icons/facebook.png" height='20' alt="" />
                    <img src="./assets/icons/youtube.png" height='20' alt="" />
                    <img src="./assets/icons/linkedin.png" height='20' alt="" />
                </Icons> */}
            </div>
        </Wrapper>
    </Container>
  )
}

export default Footer