import styled from 'styled-components'

export const LogoutPopupBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
  height: 100vh;
  width: 100vw;
`

export const LogoutPopupContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const LogoutPopupMessage = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#00306e')};
  text-align: center;
  font-family: 'Roboto';
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
`

export const LogoutPopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const LogoutPopupButton = styled.button`
  border: ${props =>
    props.isOutlineButton
      ? `0.1rem solid ${props.isDarkTheme ? '#e2e8f0' : '#7e858e'}`
      : `0.1rem solid #3b82f6`};
  border-radius: 0.2rem;
  background-color: ${props => (props.isOutlineButton ? 'inherit' : '#3b82f6')};
  color: ${props =>
    props.isOutlineButton
      ? `${props.isDarkTheme ? '#e2e8f0' : '#909090'}`
      : '#ffffff'};
  cursor: pointer;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  font-family: 'Roboto';
  font-size: 1.3rem;
  font-weight: 500;
`
