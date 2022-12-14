import GenericRoutedComponent from '../common-components/GenericRoutedComponent'

const gamingAPIUrl = 'https://apis.ccbp.in/videos/gaming'

const Gaming = () => (
  <GenericRoutedComponent baseAPIUrl={gamingAPIUrl} routeName="Gaming" />
)

export default Gaming
