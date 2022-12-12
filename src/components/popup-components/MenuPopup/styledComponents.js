import styled from 'styled-components'

export const MenuPopupBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  width: 100vw;
  height: 100vh;
`

export const MenuPopupCloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 15vh;
  padding: 2rem;
`

export const MenuPopupCloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
`

export const MenuPopupContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100%;
`
