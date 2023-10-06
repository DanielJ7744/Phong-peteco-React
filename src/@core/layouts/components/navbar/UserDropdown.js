// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Link as LinkIcon, User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power, ShoppingBag, GitHub, Briefcase, Grid, Calendar, Layers, File, Share2, LogOut } from 'react-feather'


const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  // Get UserName
  const userName = userData ? userData.profile.name : ''
  // Get availability
  const userActiveProfile = userData ? userData.profile.active_profile : ''
  // Get avatar
  const userAvatar = userData ? userData.profile.avatar_url.original : ''

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{userName}</span>
          <span className='user-status'>{userActiveProfile === 'Y' ? "available" : "offline"}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status={userActiveProfile === 'Y' ? "online" : "offline"} />
      </DropdownToggle>
      <DropdownMenu right>
      <DropdownItem tag={Link} to='/account/details'>
          <User size={14} className='mr-75' />
          <span className='align-middle'>My Account</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/account/store'>
          <ShoppingBag size={14} className='mr-75' />
          <span className='align-middle'>Orders</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pets'>
          <GitHub size={14} className='mr-75' />
          <span className='align-middle'>My Pets</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/providers'>
          <Briefcase size={14} className='mr-75' />
          <span className='align-middle'>My Companies</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <Grid size={14} className='mr-75' />
          <span className='align-middle'>My Groups</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <Calendar size={14} className='mr-75' />
          <span className='align-middle'>My events</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <Layers size={14} className='mr-75' />
          <span className='align-middle'>Wallet</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <File size={14} className='mr-75' />
          <span className='align-middle'>Documents</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <Share2 size={14} className='mr-75' />
          <span className='align-middle'>Social Accounts</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/profile'>
          <LinkIcon size={14} className='mr-75' />
          <span className='align-middle'>Affiliate</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <LogOut size={14} className='mr-75' />
          <span className='align-middle'>Log Out</span>
        </DropdownItem>
      

      <DropdownItem divider />
        <DropdownItem tag={Link} to='/pages/profile'>
          <User size={14} className='mr-75' />
          <span className='align-middle'>Profile</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/email'>
          <Mail size={14} className='mr-75' />
          <span className='align-middle'>Inbox</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/todo'>
          <CheckSquare size={14} className='mr-75' />
          <span className='align-middle'>Tasks</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/apps/chat'>
          <MessageSquare size={14} className='mr-75' />
          <span className='align-middle'>Chats</span>
        </DropdownItem>
       
        <DropdownItem tag={Link} to='/pages/account-settings'>
          <Settings size={14} className='mr-75' />
          <span className='align-middle'>Settings</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/pricing'>
          <CreditCard size={14} className='mr-75' />
          <span className='align-middle'>Pricing</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/pages/faq'>
          <HelpCircle size={14} className='mr-75' />
          <span className='align-middle'>FAQ</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
