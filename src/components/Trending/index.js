import GenericRoutedComponent from '../common-components/GenericRoutedComponent'

const trendingAPIUrl = 'https://apis.ccbp.in/videos/trending'

const Trending = () => (
  <GenericRoutedComponent baseAPIUrl={trendingAPIUrl} routeName="Trending" />
)

export default Trending
