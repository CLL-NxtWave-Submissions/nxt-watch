import styled from 'styled-components'

export const NxtWatchHeader = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 1rem;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
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
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  cursor: pointer;
  border: none;
  outline: none;
  background: inherit;
`

export const UserProfileImg = styled.img`
  height: 3rem;
  width: 3rem;
`

export const LogoutBtn = styled(HeaderActionItemButton)`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#4f46e5')};
  border: 0.1rem solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#4f46e5')};
`
