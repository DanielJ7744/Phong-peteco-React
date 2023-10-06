// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import FavoriteDropdown from './FavoriteDropdown'
import { isGuest, isUserLoggedIn } from '../../../../auth/utils'
import { Link } from 'react-router-dom'
import {ReactComponent as FacebookSvg} from '@src/assets/images/svg/facebook.svg'
import {ReactComponent as GoogleSvg} from '@src/assets/images/svg/google-c.svg'

// ** Third Party Components
import { Sun, Moon } from 'react-feather'
import { NavItem, NavLink, Button } from 'reactstrap'
import BasketDropdown from './BasketDropdown'
import WishlistButtonComponent from './WishlistButton'
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  const isLoggedIn = (isUserLoggedIn() !== null)
  const hasGuest = (isGuest() !== null)

  return (
    <ul className='nav navbar-nav align-items-center ml-auto'>
      <IntlDropdown />
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          {/* <ThemeToggler /> */}
        </NavLink>
      </NavItem>
      <NavbarSearch />
      {(isLoggedIn || hasGuest) && (
        <>
          <BasketDropdown />
          <FavoriteDropdown />
        </>
      )}
      {isLoggedIn ? (
        <>
          <NotificationDropdown />
          <UserDropdown />
        </>
      ) : (<>
      <Link to='/login'><Button.Ripple className='ml-2 border'> Login</Button.Ripple></Link>
      <Link to='/register'><Button.Ripple color='primary' className='ml-2 border'> Register</Button.Ripple></Link>
      <Link to='/' className='ml-2' style={{ height: '42px', width: '42px'}} > <FacebookSvg  /> </Link>
      <Link to='/' className='ml-2' style={{ height: '42px', width: '42px'}} > <GoogleSvg  /> </Link>
      </>)}
 
    </ul>

  )
}
export default NavbarUser
