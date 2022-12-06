import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NxtWatchHeader = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1rem 2rem;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};

  @media (min-width: 768px) {
    padding: 1rem 4rem;
  }
`

export const NxtWatchLogoLink = styled(Link)`
  text-decoration: none;
`

export const NxtWatchLogo = styled.img`
  height: 3rem;
  width: 10rem;
`

export const HeaderActionsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
`

export const HeaderActionItem = styled.li`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderActionItemButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: inherit;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};

  @media (min-width: 768px) {
    display: ${props => props.isMobileHeaderActionButton && 'none'};
  }
`

export const UserProfileImg = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: inline;
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const LogoutBtn = styled(HeaderActionItemButton)`
  display: none;

  @media (min-width: 768px) {
    display: inline;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    border: 0.1rem solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    border-radius: 0.2rem;
    padding: 0.35rem 1.25rem;
    font-family: 'Roboto';
    font-size: 1.1rem;
    font-weight: 600;
  }
`
