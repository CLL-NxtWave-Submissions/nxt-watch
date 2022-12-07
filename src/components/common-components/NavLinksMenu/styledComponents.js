import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLinksMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`

export const NavLinksMenuItem = styled.li`
  background-color: ${props =>
    props.isDarkTheme
      ? `${props.isSelected ? '#313131' : 'inherit'}`
      : `${props.isSelected ? '#ebebeb' : 'inherit'}`};
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinksMenuItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: inherit;
  cursor: pointer;
`

export const NavLinksMenuItemName = styled.label`
  color: ${props =>
    props.isDarkTheme
      ? `${props.isSelected ? '#ffffff' : '#ebebeb'}`
      : `${props.isSelected ? '#000000' : '#606060'}`};
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: ${props => (props.isSelected ? '550' : '400')};
`
