import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavLinksMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: inherit;
  padding-left: 0;
  list-style-type: none;
  width: 100%;
`

export const NavLinkItem = styled.li`
  background-color: ${props =>
    props.isDarkTheme
      ? `${props.isSelected ? '#424242' : 'inherit'}`
      : `${props.isSelected ? '#ebebeb' : 'inherit'}`};
  padding: 1rem;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  width: 100%;
`

export const NavLinkMenuItemNameContainer = styled.div`
  display: 'flex';
  width: 50%;
  padding: 0 0.5rem;
`

export const NavLinkIconContainer = styled(NavLinkMenuItemNameContainer)`
  justify-content: flex-end;
`

export const NavLinkMenuItemName = styled.label`
  color: ${props =>
    props.isDarkTheme
      ? `${props.isSelected ? '#ffffff' : '#ebebeb'}`
      : `${props.isSelected ? '#000000' : '#606060'}`};
  font-family: 'Roboto';
  font-size: 1.2rem;
  font-weight: ${props => (props.isSelected ? '550' : '400')};
`
