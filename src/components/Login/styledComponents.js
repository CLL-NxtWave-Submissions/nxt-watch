import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  height: 100%;
  min-height: 100vh;
`
export const LoginFormContainer = styled.form`
  border-radius: 0.6rem;
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '0 0 0.5rem 0.5rem #f4f4f4'};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 450px) {
    width: 95%;
  }

  @media (min-width: 500px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 2.5rem;
  }

  @media (min-width: 892px) {
    width: 48%;
  }

  @media (min-width: 992px) {
    width: 45%;
  }

  @media (min-width: 1192px) {
    width: 40%;
  }

  @media (min-width: 1245px) {
    width: 35%;
  }
`

export const BrandLogo = styled.img`
  height: 3.5rem;
  width: 12rem;
  margin-bottom: 3.5rem;
`

export const LoginFormInputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`

export const LoginFormInputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#94a3b8')};
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`

export const LoginFormInput = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid #e2e8f0;
  padding: 0.75rem 1.25rem;
  color: #94a3b8;
  font-size: 1.2rem;
  font-family: 'Roboto';
  margin: 0;
`

export const ShowPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 0;
  margin-top: 0.35rem;
`

export const ShowPasswordInput = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid #616e7c;
  margin: 0;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`

export const ShowPasswordInputLabel = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 1.2rem;
  font-family: 'Roboto';
`

export const LoginErrorMsg = styled.p`
  font-size: 1rem;
  font-family: 'Roboto';
  color: #ff0000;
  align-self: flex-start;
`

export const LoginFormSubmitButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 0.6rem;
  padding: 0.8rem;
  align-self: stretch;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 550;
  margin-top: 2.5rem;
`
