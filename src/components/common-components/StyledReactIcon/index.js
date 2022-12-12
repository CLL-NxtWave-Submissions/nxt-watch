import {IconContext} from 'react-icons'

// Component to style passed in react icon as a prop
const StyledReactIcon = props => {
  const {originalReactIcon, isSelected, isDarkTheme} = props
  const finalColor = isDarkTheme
    ? `${isSelected ? '#ff0000' : '#ebebeb'}`
    : `${isSelected ? '#ff0000' : '#606060'}`

  return (
    <IconContext.Provider
      value={{
        style: {
          height: '1.3rem',
          width: '1.5rem',
          color: `${finalColor}`,
        },
      }}
    >
      {originalReactIcon}
    </IconContext.Provider>
  )
}

export default StyledReactIcon
