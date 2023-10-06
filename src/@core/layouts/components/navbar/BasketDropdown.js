import { Fragment, useState, useEffect } from "react"
import { ShoppingCart, X } from "react-feather"
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Media,
  Button
} from "reactstrap"
import {
  getCartItems,
  deleteCartItem,
  updateCartItem,
  getWishlistItems,
  deleteItemFromWishlist
} from "@src/views/apps/ecommerce/store/actions"
import { useDispatch, useSelector } from "react-redux"
import PerfectScrollbar from "react-perfect-scrollbar"
import { Link } from "react-router-dom"
import NumberInput from "@components/number-input"
import "./BasketDropdown.scss"

const BasketDropdown = () => {
  const [active, setActive] = useState("1")

  const [dropdownOpen, setDropdownOpen] = useState(false)

  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)
  const [userType, setUserType] = useState(null)

  const [quantity, setQuantity] = useState(null)
  const [pId, setPid] = useState()

  useEffect(() => {
    dispatch(getCartItems())
    dispatch(getWishlistItems())
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
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

  // ** Function to toggle Dropdown
  const toggle = () => setDropdownOpen((prevState) => !prevState)

  const toggleOption = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  // ** Handle Delete Cart Item
  const handleDeleteCartItem = (item_uid) => {
    dispatch(deleteCartItem(store.cart.uid, item_uid))
  }

  // ** Handle Update Cart Item
  const handleUpdateCartItem = (item_uid, quantity) => {
    dispatch(updateCartItem(store.cart.uid, item_uid, quantity))
  }

  useEffect(() => {
    if (quantity !== null) {
     return handleUpdateCartItem(pId, quantity)
    }

  }, [quantity])
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

  // ** Cart Items
  const renderCartItems = () => {
    let total = 0
    return (
      <Fragment>
        <PerfectScrollbar
          options={{
            wheelPropagation: false
          }}
          className="scrollable-container media-list"
        >
          {store.cart.items instanceof Array && store.cart.items.length > 0 ? (
            <>
              {store.cart.items.map((item) => {
                total += Number(item.product.price)

                return (
                  <Media key={item.product.uid} className="align-items-center">
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
                        onClick={() => handleDeleteCartItem(item.uid)}
                      />
                      <div className="media-heading">
                        <h6 className="cart-item-title">
                          <Link
                            className="text-body"
                            to={`/store/p/${item.product.slug}`}
                            onClick={() => handleDropdownItemClick(item.product.slug)}
                          >
                            {item.product.name}
                          </Link>
                        </h6>
                        <small className="cart-item-by">
                          by {"item.brand"}
                        </small>
                      </div>
                      <div className="cart-item-qty">
                        <NumberInput
                          min={1}
                          max={10}
                          size="sm"
                          className="p-0"
                          value={item.quantity}
                          style={{ width: "7rem", height: "2.15rem" }}
                          onChange={(e) => {
                            setQuantity(e)
                            setPid(item.uid)
                          }}
                         // onClick={() => handleUpdateCartItem(item.uid, quantity)}
                        />
                      </div>
                      <h5 className="cart-item-price">{item.product.price}</h5>
                    </Media>
                  </Media>
                )
              })}
            </>
          ) : (
            <p className="m-0 p-1 text-center">Your cart is empty</p>
          )}
        </PerfectScrollbar>
        <li className="dropdown-menu-footer">
          <div className="d-flex justify-content-between mb-1">
            <h6 className="font-weight-bolder mb-0">Total:</h6>
            <h6 className="text-primary font-weight-bolder mb-0">{total}</h6>
          </div>
          <Button.Ripple
            tag={Link}
            to="/store/cart"
            color="primary"
            block
            onClick={toggle}
          >
            Checkout
          </Button.Ripple>
        </li>
      </Fragment>
    )
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
                                <Link className="text-body" to={`/`}>
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
                to="/store/cart"
                color="primary"
                block
                onClick={toggle}
              >
                Checkout
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
                              <Link className="text-body" to={`/`}>
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
                to="/store/cart"
                color="primary"
                block
                onClick={toggle}
              >
                Checkout
              </Button.Ripple>
            </li>
          </Fragment>
        )
      }
    }
  }

  // ** Empty Wishlist Items
  const renderEmptyWishlistItems = () => {
    return (
      <Fragment>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <p className="m-0 p-1 text-center"> Your Wishlist is empty </p>
        </PerfectScrollbar>
        <li className="dropdown-menu-footer">
          <div className="d-flex justify-content-between mb-1">
            <h6 className="font-weight-bolder mb-0">Subtotal:</h6>
            <h6 className="text-primary font-weight-bolder mb-0">0</h6>
          </div>
          <Button.Ripple
            tag={Link}
            to="/store/cart"
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

  return (
    <Fragment>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        tag="li"
        className="dropdown-cart nav-item mr-25"
      >
        <DropdownToggle tag="a" className="nav-link position-relative">
          <ShoppingCart className="ficon" />
          {store.cart.items instanceof Array && store.cart.items.length > 0 ? (
            <Badge pill color="primary" className="badge-up">
              {store.cart.items.length}
            </Badge>
          ) : null}
        </DropdownToggle>
        <DropdownMenu
          right
          tag="ul"
          className="dropdown-menu-media dropdown-cart mt-0"
        >
          <li className="dropdown-menu-header">
            <DropdownItem
              tag="div"
              className="d-flex"
              header
              style={{
                justifyContent: "space-between",
                alignItems: "baseline"
              }}
            >
              <Nav
                id="cartLink"
                tabs
                style={{ alignItems: "center", marginBottom: 0 }}
              >
                <NavItem
                  style={{
                    marginRight: "25px",
                    backgroundColor: active === "1" && "#7367f0",
                    padding: active === "1" && "7px 10px 7px 10px",
                    borderRadius: active === "1" && "5px"
                  }}
                >
                  <NavLink
                    active={active === "1"}
                    onClick={() => {
                      toggleOption("1")
                    }}
                    style={{ color: active === "1" && "white" }}
                  >
                    Cart
                  </NavLink>
                </NavItem>
              
                <NavItem
                  style={{
                    marginRight: "25px",
                    backgroundColor: active === "2" && "#7367f0",
                    padding: active === "2" && "7px 10px 7px 10px",
                    borderRadius: active === "2" && "5px"
                  }}
                >
                  <NavLink
                    active={active === "2"}
                    onClick={() => {
                      toggleOption("2")
                    }}
                    style={{ color: active === "2" && "white" }}
                  >
                    Orders
                  </NavLink>
                </NavItem>
              </Nav>

              <Badge
                color="light-primary"
                pill
                style={{ height: "25px", width: "88px", paddingTop: "6px" }}
              >
                {active === "1" &&
                  `${store.cart.items instanceof Array ? store.cart.items.length : 0} Items`}

                {active === "2" && "13 items"}
              </Badge>
            </DropdownItem>
          </li>
          <TabContent activeTab={active}>
            <TabPane tabId="1">{renderCartItems()}</TabPane>
            <TabPane tabId="2">
              <p>
                Gingerbread cake cheesecake lollipop topping bonbon chocolate
                sesame snaps. Dessert macaroon bonbon carrot cake biscuit.
                Lollipop lemon drops cake gingerbread liquorice. Sweet gummies
                dragée. Donut bear claw pie halvah oat cake cotton candy sweet
                roll. Cotton candy sweet roll donut ice cream.
              </p>
              <p>
                Halvah bonbon topping halvah ice cream cake candy. Wafer gummi
                bears chocolate cake topping powder. Sweet marzipan cheesecake
                jelly-o powder wafer lemon drops lollipop cotton candy.
              </p>
            </TabPane>
          </TabContent>
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  )
}

export default BasketDropdown
