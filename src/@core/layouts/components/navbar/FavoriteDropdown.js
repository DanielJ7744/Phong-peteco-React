// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// ** Custom Components
import NumberInput from '@components/number-input'

// ** Third Party Components
import { Heart, ShoppingCart, X } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Media, Badge, Button } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, deleteCartItem, getProduct, getWishlistItems, deleteItemFromWishlist } from '@src/views/apps/ecommerce/store/actions'

const WishlistDropdown = () => {
  const history = useHistory()
  // ** State
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [userType, setUserType] = useState(null)
  const [guestWishlistId, setGuestWishlistId] = useState()

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce)

  // ** ComponentDidMount
  useEffect(() => {
    dispatch(getWishlistItems())
  }, [])

  // ** Function to toggle Dropdown
  const toggle = () => setDropdownOpen(prevState => !prevState)

  // ** Function to call on Dropdown Item Click
  const handleDropdownItemClick = id => {
    dispatch(getProduct(id))
    toggle()
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
      const data = JSON.parse(localStorage.getItem("guestData"))
      setGuestWishlistId(data.wishlist.uid)
    } else {
      setUserType(true)

    }
  }, [])

  
  const handleDeleteWishlistFromDropdown = (wishlist_uid, deleteItemId) => {
    if (userType === true) {
      return dispatch(deleteItemFromWishlist(wishlist_uid, deleteItemId))
    }

    if (userType === false) {
      return dispatch(deleteItemFromWishlist(wishlist_uid, deleteItemId))
    }
  }

  const handleWishlistTotalItems = () => {
    if (userType === true) {
      if (store.wishlist.length !== 0) {
        if (
          store.wishlist.data.length !== 0 ||
          store.wishlistList.data !== undefined
        ) {
          return store.wishlist.data[0].items.length
        } else {
          return 0
        }
      }
    }
    if (userType === false) {
      if (store.wishlist.data) {
        if (
          store.wishlist.data.items.length !== 0 ||
          store.wishlist.data.items !== undefined
        ) {
          return store.wishlist.data.items.length
        } else {
          return 0
        }
      }
    }
  }

    // ** Wishlist Items
    const renderWishlistItems = () => {
      if (userType === true) {
        if (store.wishlist.length !== 0) {
          let total = 0
          return (
            <Fragment>
              <PerfectScrollbar
                options={{
                  wheelPropagation: false
                }}
                className="scrollable-container media-list"
              >
                {store.wishlist.data.length !== 0 ||
                store.wishlist.data !== undefined ? (
                  <>
                    {store.wishlist.data.map((items) => {
                      return items.items.map((item) => {
                        total += Number(item.product.price)
                        return (
                          <Media
                            key={item.product.uid}
                            className="align-items-center"
                          >
                            <img
                              className="d-block rounded mr-1"
                              src={item.product.cover["cart-default"]}
                              alt={item.product.name}
                              width="62"
                            />
                            <Media body>
                              <X
                                size={14}
                                className="cart-item-remove"
                                onClick={() => handleDeleteWishlistFromDropdown(item.wishlist_uid, item.uid)}
                              />
                              <div className="media-heading" style={{ width: '13rem' }}>
                                <h6 className="cart-item-title">
                                  <Link className="text-body" to={`/account/store/wishlists`}>
                                    {item.product.name}
                                  </Link>
                                </h6>
                              </div>
                              <h5 className="cart-item-price">
                                {item.product.price}
                              </h5>
                            </Media>
                          </Media>
                        )
                      })
                    })}
                  </>
                ) : (
                  <p className="m-0 p-1 text-center"></p>
                )}
              </PerfectScrollbar>
              <li className="dropdown-menu-footer">
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="font-weight-bolder mb-0">Total:</h6>
                  <h6 className="text-primary font-weight-bolder mb-0">
                    {total}
                  </h6>
                </div>
                <Button.Ripple
                  tag={Link}
                  to={`/account/store/wishlists`}
                  color="primary"
                  block
                  onClick={toggle}
                >
                  Go to Wishlist
                </Button.Ripple>
              </li>
            </Fragment>
          )
        }
      }
  
      if (userType === false) {
        if (store.wishlist.length !== 0) {
          let total = 0
          return (
            <Fragment>
              <PerfectScrollbar
                options={{
                  wheelPropagation: false
                }}
                className="scrollable-container media-list"
              >
                {store.wishlist.data.length !== 0 ||
                store.wishlist.data !== undefined ? (
                  <>
                    {store.wishlist.data.items.map((item) => {
                      total += Number(item.product.price)
                      return (
                        <Media
                          key={item.product.uid}
                          className="align-items-center"
                        >
                          <img
                            className="d-block rounded mr-1"
                            src={item.product.cover["cart-default"]}
                            alt={item.product.name}
                            width="62"
                          />
                          <Media body>
                            <X
                              size={14}
                              className="cart-item-remove"
                              onClick={() => handleDeleteWishlistFromDropdown(item.wishlist_uid, item.uid)}
                            />
                            <div className="media-heading">
                              <h6 className="cart-item-title">
                                <Link className="text-body" to={`/account/store/wishlists/${guestWishlistId}/view`}>
                                  {item.product.name}
                                </Link>
                              </h6>
                            </div>
                            <h5 className="cart-item-price">
                              {item.product.price}
                            </h5>
                          </Media>
                        </Media>
                      )
                    })}
                  </>
                ) : (
                  <p className="m-0 p-1 text-center"></p>
                )}
              </PerfectScrollbar>
              <li className="dropdown-menu-footer">
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="font-weight-bolder mb-0">Total:</h6>
                  <h6 className="text-primary font-weight-bolder mb-0">
                    {total}
                  </h6>
                </div>
                <Button.Ripple
                  tag={Link}
                  to={`/account/store/wishlists/${guestWishlistId}/view`}
                  color="primary"
                  block
                  onClick={toggle}
                >
                  Go to Wishlist
                </Button.Ripple>
              </li>
            </Fragment>
          )
        }
      }
    }
  
    // ** Empty Wishlist Items
    const renderEmptyWishlistItems = () => {
      if (userType === true) {
        return (
          <Fragment>
            <PerfectScrollbar options={{ wheelPropagation: false }}>
              <p className="m-0 p-1 text-center" style={{ cursor: 'pointer' }} onClick={() => history.push(`/account/store/wishlists`)}> Your Wishlist is empty </p>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <div className="d-flex justify-content-between mb-1">
                <h6 className="font-weight-bolder mb-0">Subtotal:</h6>
                <h6 className="text-primary font-weight-bolder mb-0">0</h6>
              </div>
              <Button.Ripple
                tag={Link}
                to="/account/store/wishlists"
                color="primary"
                block
                onClick={toggle}
              >
                Your Wishlist
              </Button.Ripple>
            </li>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
            <PerfectScrollbar options={{ wheelPropagation: false }}>
              <p className="m-0 p-1 text-center" style={{ cursor: 'pointer' }} onClick={() => history.push(`/account/store/wishlists/${guestWishlistId}/view`)}> Your Wishlist is empty </p>
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              <div className="d-flex justify-content-between mb-1">
                <h6 className="font-weight-bolder mb-0">Subtotal:</h6>
                <h6 className="text-primary font-weight-bolder mb-0">0</h6>
              </div>
              <Button.Ripple
                tag={Link}
                to={`/account/store/wishlists/${guestWishlistId}/view`}
                color="primary"
                block
                onClick={toggle}
              >
                Your Wishlist
              </Button.Ripple>
            </li>
          </Fragment>
        )
      }
    }
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} tag='li' className='dropdown-cart nav-item mr-25'>
      <DropdownToggle tag='a' className='nav-link position-relative'>
        <Heart className='ficon' />
        {handleWishlistTotalItems() === 0 ? null : (
          <Badge pill color='primary' className='badge-up'>
          {handleWishlistTotalItems()}
        </Badge>
        ) }
          
      </DropdownToggle>
      <DropdownMenu right tag='ul' className='dropdown-menu-media dropdown-cart mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem tag='div' className='d-flex' header>
            <h4 className='notification-title mb-0 mr-auto'>My Wishlist</h4>
            <Badge color='light-primary' pill>
              {handleWishlistTotalItems()} Items
            </Badge>
          </DropdownItem>
        </li>
       {handleWishlistTotalItems() !== 0 ? renderWishlistItems() : renderEmptyWishlistItems()}

      </DropdownMenu>
    </Dropdown>
  )
}

export default WishlistDropdown
