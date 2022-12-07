import {
  NavLinksMenuContainer,
  NavLinksMenuItem,
  NavLink,
  NavLinksMenuItemName,
} from './styledComponents'

const navLinksData = [
  {
    id: 'home',
    url: '/',
    name: 'Home',
  },
  {
    id: 'trending',
    url: '/trending',
    name: 'Trending',
  },
  {
    id: 'gaming',
    url: '/gaming',
    name: 'Gaming',
  },
  {
    id: 'saved-videos',
    url: '/saved-videos',
    name: 'Saved Videos',
  },
]

const NavLinksMenuItem = (props) => {
    const {itemData, itemReactIcon} = props
    const {id, url, name} = itemData

    const 

    return (
            <NavLinksMenuItem>
                {itemReactIcon}
                <NavLinksMenuItemName>{name}</NavLinksMenuItemName>
            </NavLinksMenuItem>
    )

}

const NavLinksMenu = (props) => {
    const {selectedLink, selectHandler} = props

    const onNavLinkSelect = (navLinkId) => 
}