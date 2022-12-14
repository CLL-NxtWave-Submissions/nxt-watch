import styled from 'styled-components'

export const LeftNavBarBgContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
    height: 85vh;
    width: 30vw;
  }
`
