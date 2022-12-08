import styled from 'styled-components'

export const MenuPopupBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`

export const MenuPopupCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 15vh;
  padding: 2rem;
`

export const MenuPopupCloseButton = styled.button`
  color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  border: none;
  outline: none;
  cursor: pointer;
`

export const MenuPopupContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`
