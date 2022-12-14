import GenericRoutedComponent from '../common-components/GenericRoutedComponent'

const homeAPIBaseUrl = 'https://apis.ccbp.in/videos/all?search='

const Home = () => (
  <GenericRoutedComponent baseAPIUrl={homeAPIBaseUrl} routeName="Home" />
)

export default Home
