import { Nav, NavItem, NavLink } from 'reactstrap'
import { User, Lock, Info, Link, Bell, ShoppingBag, GitHub, Briefcase, Grid, Calendar, Layers, File, Share2 } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav className='nav-left' pills vertical>
      <NavItem>
        <NavLink active={activeTab === '/account/details'} onClick={() => toggleTab('/account/details')}>
          <User size={18} className='mr-1' />
          <span className='font-weight-bold'>MyAccount</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/account/store'} onClick={() => toggleTab('/account/store')}>
          <ShoppingBag size={18} className='mr-1' />
          <span className='font-weight-bold'>Orders</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/pets'} onClick={() => toggleTab('/pets')}>
          <GitHub size={18} className='mr-1' />
          <span className='font-weight-bold'>My Pets</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/providers'} onClick={() => toggleTab('/providers')}>
          <Briefcase size={18} className='mr-1' />
          <span className='font-weight-bold'>My Companies</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/my-groups'} onClick={() => toggleTab('/my-groups')}>
          <Grid size={18} className='mr-1' />
          <span className='font-weight-bold'>My Groups</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink 
          active={activeTab === '/my-events'} 
          onClick={() => toggleTab('/my-events')}
          >
          <Calendar size={18} className='mr-1' />
          <span className='font-weight-bold'>My Events</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/wallet'} onClick={() => toggleTab('/wallet')}>
          <Layers size={18} className='mr-1' />
          <span className='font-weight-bold'>Wallet</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/account/documents'} onClick={() => toggleTab('/account/documents')}>
          <File size={18} className='mr-1' />
          <span className='font-weight-bold'>Documents</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '/account/connected_accounts'} onClick={() => toggleTab('/account/connected_accounts')}>
          <Share2 size={18} className='mr-1' />
          <span className='font-weight-bold'>Connected Accounts</span>
        </NavLink>
      </NavItem>
   
    </Nav>
  )
}

export default Tabs
