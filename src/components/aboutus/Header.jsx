import React , {useState} from 'react'
import styled from 'styled-components'
import Icons from '../../components/aboutus/Icons'

const Logo = styled.h2`
        padding: 0px 50px;
        @media screen and (max-width: 768px) {
        padding: 0px 0px;
        margin-left:10px ;
  }
`

const Container = styled.div`
/* border-bottom: 2px solid black; */
justify-content: unset;
    flex-wrap:unset ;
    padding: 20px 60px;
    display: flex ;
    align-items: center ;
    background-color: ${({theme}) => theme.header};
   color: ${({theme}) => theme.text};
   z-index: 1;
   @media screen and (max-width: 768px) {
        padding: 6px 8px;
        justify-content: space-between;
        flex-wrap: wrap;
  }
`
const Wrapper = styled.div`
    display: flex ;
    align-items: center ;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 768px) {
    display:block ;
    padding: 0px;
    
  }
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
    @media screen and (max-width: 768px) {
    
  padding:0px ;
  margin: 0px;
  }
`
const RightSideHeader = styled.div`,
a screen and (max-width: 768px) {
    
    padding:0px ;
   margin: 0px 0px;
    }
`


const Header = ({activeTheme , toggleTheme, theme}) => {
    const  isDesktop = window.screen.width >= 720
    const [menu, setMenu] = useState(true)
    const show = (menu && !isDesktop) ? "" : "show" ;
    // const [darkMode, setDarkMode] = useState(false);
    console.log({isDesktop});
  return (
    <Container >
        <Logo className='me-2'>Upsilon</Logo>
        
       {!isDesktop && <button  onClick={()=>setMenu((prevState)=>!prevState)} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H29M2 10.5H29M2 19H29" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
</span>
    </button>}
  <div className={"collapse navbar-collapse " + show} >
        <Wrapper>
            <div>
                
                <Icons iconSize={20} >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </Icons>
                <HeaderInput type="text" placeholder='Search a course' />
            </div>
            <RightSideHeader className='d-flex'>
                <ListItem>About us</ListItem>
                <ListItem>Signin</ListItem>
                <ListItem>
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={toggleTheme} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{activeTheme}</label>
</div>

</ListItem>
            </RightSideHeader>
        </Wrapper>
        </div>
      
    </Container>
  )
}

export default Header