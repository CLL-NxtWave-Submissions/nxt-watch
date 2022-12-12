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
          height: '2rem',
          width: '2rem',
          color: `${finalColor}`,
        },
      }}
    >
      {originalReactIcon}
    </IconContext.Provider>
  )
}

export default StyledReactIcon
