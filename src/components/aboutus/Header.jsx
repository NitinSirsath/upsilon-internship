import React from 'react'
import styled from 'styled-components'
import Icons from '../../components/aboutus/Icons'

const Logo = styled.h2`
        padding: 0px 50px;
`

const Container = styled.div`
/* border-bottom: 2px solid black; */
    padding: 20px 60px;
    display: flex ;
    align-items: center ;
    background-color: ${({theme}) => theme.header};
   color: ${({theme}) => theme.text};
   z-index: 1;
`
const Wrapper = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between;
    width: 100%;
`
const ListItem = styled.div`
    list-style: none;
    margin:  0px 10px;
`
const HeaderInput = styled.input`
    margin: 0px 10px;
    border: none ;
    width: 235px;
    padding: 3px 10px;
    border-bottom: 2px solid ${({theme})=> theme.text};
    /* background-color: ${({theme}) => theme.bg}; */
    background-color: transparent;
    border-color: ${({theme}) => theme.text};
    color: ${({theme}) => theme.text};
    &:focus{
        border: none;
        outline: none;
        border-bottom: 2px solid ${({theme})=> theme.text};
    }
`

const Header = ({activeTheme , toggleTheme, theme}) => {
    // const [darkMode, setDarkMode] = useState(false);
  return (
    <Container >
        <Logo className='me-2'>Upsilon</Logo>
        <Wrapper>
            <div>
                {/* <img src={activeTheme === 'light' ? './assets/search.png' : './assets/searchlight.png'} height='20' alt="" /> */}
                <Icons iconSize={20} >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </Icons>
                <HeaderInput type="text" placeholder='Search a course' />
            </div>
            <div className='d-flex'>
                <ListItem>About us</ListItem>
                <ListItem>Signin</ListItem>
                <ListItem>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onClick={toggleTheme} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{activeTheme}</label>
</div>
</ListItem>
            </div>
        </Wrapper>
    </Container>
  )
}

export default Header