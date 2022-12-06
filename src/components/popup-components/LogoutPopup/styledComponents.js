import styled from 'styled-components'

export const LogoutPopupBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000080;
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
`

export const LogoutPopupButton = styled.button`
    border: ${props =>
      props.isOutlineButton
        ? `0.1rem solid ${props.isDarkTheme ? '#f9f9f9' : '#606060'}`
        : 'none'};
    border-radius: 0.2rem;
    background-color: ${props =>
      props.isOutlineButton ? 'inherit' : '#4f46e5'};
    color: ${props =>
      props.isOutlineButton
        ? `${props.isDarkTheme ? '#f8fafc' : '#909090'}`
        : '#ffffff'}
    cursor: pointer;
`
