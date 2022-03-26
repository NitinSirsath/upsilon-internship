import React from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  color:  ${({theme})=> theme.text};
  fill :  ${({theme})=> theme.text};
`

const Icons = ({children, iconSize}) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} >
        {children}
    </Icon>
  )
}

export default Icons