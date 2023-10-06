import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

// ** Third Party Components
import { Divider, CardText, Dropdown, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem, NavItem, Button, Card } from 'reactstrap'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Styles
import '@styles/base/core/menu/menu-types/horizontal-menu.scss'
import { Link as LinkIcon, User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, ShoppingBag, GitHub, Briefcase, Grid, Calendar, Layers, File, Share2, LogOut } from 'react-feather'
import { getCategories, getProducts } from '../../../../views/apps/ecommerce/store/actions'
import { FormattedMessage } from 'react-intl'


const CategoryDropdown = (props) => {
  const { category, index } = props

  const submenu = true
  const [openDropdown, setOpenDropdown] = useState([])

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = id => {
    const arr = openDropdown
    arr.push(id)
    setOpenDropdown([...arr])
  }

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = id => {
    const arr = openDropdown
    arr.splice(arr.indexOf(id), 1)
    setOpenDropdown([...arr])
  }

  return (
    <Dropdown
      tag='li'
      className={classnames({
        'dropdown-submenu': submenu === true,
        'sidebar-group-active active': false,
        'position-relative': true
      })}
      isOpen={openDropdown.includes(category.uid)}
      toggle={() => { }}
      onMouseEnter={() => onMouseEnter(category.uid)}
      onMouseLeave={() => onMouseLeave(category.uid)}
    >
      <DropdownToggle
        to={`/store/c/${category.abs_slug}`}
        tag={Link}
        style={{ height: '40px', width: 'auto' }}
        className={classnames('dropdown-toggle d-flex align-items-center', {
          'dropdown-item': submenu === true,
          'nav-link': submenu === false,
          'position-relative': true
        })}
      >
        <FormattedMessage id={category.name}></FormattedMessage>
      </DropdownToggle>
      <div className="dropdown-menu"
        style={{
          position: 'fixed',
          top: `${index * 40}px`,
          left: '180px',
          right: '-540px',
          maxWidth: '800px',
          maxHeight: '600px',
          minWidth: '800px',
          minHeight: '100px'
        }}
      >

        <div className='d-flex flex-wrap'>


          {category.children.map(child => {
            return (
              <DropdownItem key={child.uid} tag={Link} to={`/store/c/${child.abs_slug}`} className='d-flex flex-wrap' style={{ background: 'none', width: '169px', margin: '10px' }}>

                <Card style={{ height: '82px', width: '169px', display: 'flex' }}>
                  <img className="card-img-top" src={child.cover_url["small-default"]} alt="Card image cap" style={{ height: '82px', width: '169px', display: 'flex' }} />
                  <CardText className='text-wrap text-center' style={{ width: '169px', fontWeight: 'bold' }} >{child.name}</CardText>
                </Card>
              </DropdownItem>
            )
          })}
        </div>
        <div style={{ padding: '0px 10px 0px 10px' }}>
          <div className="dropdown-divider d-flex flex-wrap"></div>
          <Link to={`/store/c/${category.abs_slug}`}>
            <Button color="primary" className='btn-lg btn-block text-wrap text-center' style={{ padding: 'auto' }}>View all products from {category.name}</Button>
          </Link>
        </div>
      </div>
    </Dropdown>
  )
}

const MegaMenu = props => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  const [isDropdownOpened, setOpenDropdown] = useState(false)

  // ** On mouse enter push the ID to openDropdown array
  const onMouseEnter = () => {
    setOpenDropdown(true)
  }

  // ** On mouse leave remove the ID to openDropdown array
  const onMouseLeave = () => {
    setOpenDropdown(false)
  }

  useEffect(() => {
    if (!(store.categories.data instanceof Array)) {
      dispatch(getCategories())
    }
  }, [])

  if (!(store.categories.data instanceof Array)) {
    return null
  }

  return (
    <Fragment>
      <div className='navbar-header d-xl-block d-none l-0'>
        <ul className='nav navbar-nav'>
          <NavItem>
            <Link to='/' className='navbar-brand'>
              <span className='brand-logo'>
                <img src={themeConfig.app.appLogoImage} alt='logo' />
              </span>
              <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
            </Link>
          </NavItem>
        </ul>
      </div>
      <Button.Ripple color="none"> Newsfeed </Button.Ripple>
      <Dropdown
        isOpen={isDropdownOpened}
        toggle={onMouseEnter}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <DropdownToggle to='/store' tag={Link}>

          <Button.Ripple color="primary"> Petshop </Button.Ripple>

        </DropdownToggle>

        <DropdownMenu style={{ top: '40px', height: '300px', width: 'auto' }}>

          {store.categories.data.map((category, index) => {
            return (

              <CategoryDropdown key={category.uid} category={category} index={index} />

            )
          })}

        </DropdownMenu>

      </Dropdown>
    </Fragment>
  )
}

export default MegaMenu
