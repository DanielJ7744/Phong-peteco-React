import { Fragment, useState, useEffect } from "react"
import classnames from "classnames"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  FormGroup,
  Label,
  CardText,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroup,
  CustomInput,
  InputGroupAddon,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap"
import {
  Lock,
  Plus,
  Heart,
  Star,
  Share2,
  X,
  ShoppingCart,
  Unlock,
  AlertCircle
} from "react-feather"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  getWishlistItems,
  deleteWishlistList,
  getWishlistListItem,
  deleteItemFromWishlist,
  addToCart
} from "../store/actions"
import Rating from "react-rating"

import "./wishlists.scss"

const RenderWishlistList = () => {
  const history = useHistory()
  const [basicModal, setBasicModal] = useState(false)
  const [active, setActive] = useState()

  const [openEdit, setOpenEdit] = useState(false)
  const [loadMore, setLoadMore] = useState(false)

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  const [removeWishlist, setRemoveWishlist] = useState()
  const [userType, setUserType] = useState()

  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    if (data === null) {
      setUserType(false)
    } else {
      setUserType(true)
    }
  }, [])

  useEffect(() => {
    if (store.wishlist.length !== 0) {
      const id = store.wishlist.data[0].uid
      setActive(id)
      dispatch(getWishlistListItem(id))
      console.log(store)
    }
  }, [])

  /* Pagination Starts */

  const currentActivePage = store.wishlistList.meta && Number(store.wishlistList.meta.pagination.current_page)

  const getNextPageRoute = (pageNr) => {
    const nextRoute = `/account/store/wishlists/p${pageNr}`

    return nextRoute
  }

  // ** Render pages
  const renderPageItems = () => {
    const arrLength = store.wishlistList.meta && store.wishlistList.meta.pagination.total_pages
    const arr = store.wishlistList.meta && new Array(Math.trunc(arrLength)).fill()

    const paginationItems = [1]

    if (!paginationItems.includes(currentActivePage - 1) && currentActivePage - 1 > 0) {
      if (!paginationItems.includes(currentActivePage - 2)) {
        paginationItems.push("dots")
      }
      paginationItems.push(currentActivePage - 1)
    }

    if (!paginationItems.includes(currentActivePage)) {
      paginationItems.push(currentActivePage)
    }

    if (!paginationItems.includes(currentActivePage + 1) && currentActivePage + 1 < arrLength) {
      paginationItems.push(currentActivePage + 1)
    }

    if (!paginationItems.includes(arrLength)) {
      if (!paginationItems.includes(arrLength - 1)) {
        paginationItems.push("dots")
      }
      paginationItems.push(arrLength)
    }

    if (arrLength > 10) {
      return paginationItems.map((item, index) => {
        if (item === "dots") {
          return (
            <PaginationItem
              key={`empty-${index}`}
              active={false}
              onClick={() => {}}
            >
              <PaginationLink href="" onClick={(e) => e.preventDefault()}>
                ...
              </PaginationLink>
            </PaginationItem>
          )
        }

        return (
          <PaginationItem key={item} active={currentActivePage === item}>
            <PaginationLink href="" onClick={(e) => e.preventDefault()}>
              <Link
                className={classnames({
                  "product-active": currentActivePage === item
                })}
                to={getNextPageRoute(item)}
              >
                {item}
              </Link>
            </PaginationLink>
          </PaginationItem>
        )
      })
    }

    if (store.wishlistList.meta) {
      return arr.map((item, index) => {
        return (
          <PaginationItem key={index} active={currentActivePage === index + 1}>
            <PaginationLink
              href=""
              onClick={(e) => dispatch(getWishlistListItem(active, index + 1))}
            >
              <Link
                className={classnames({
                  "product-active": currentActivePage === index + 1
                })}
                to={getNextPageRoute(index + 1)}
              >
                {index + 1}
              </Link>
            </PaginationLink>
          </PaginationItem>
        )
      })
    }
  }

  /* Pagination Ends */

  useEffect(() => {
    dispatch(getWishlistItems())
  }, [])

  const handleDeleteWishlistList = () => {
    dispatch(deleteWishlistList(removeWishlist))
    setRemoveWishlist("")
    setBasicModal(false)
    if (store.wishlist.length !== 0) {
      const id = store.wishlist.data[0].uid
      setActive(id)
      dispatch(getWishlistListItem(id))
    }
  }

  const handleCartBtn = (product_slug, quantity) => {
    dispatch(addToCart(store.cart.uid, product_slug, quantity))
  }

  const removeWishlistItem = (wishlistUid, itemUid) => {
    dispatch(deleteItemFromWishlist(wishlistUid, itemUid))
  }

  const renderWishlistsTabs = () => {
    if (userType === true) {
      if (store.wishlist.data !== undefined) {
        return (
          <Nav id="wishlistLink" tabs justified>
            <>
              {store.wishlist.data.map((item, index) => {
                const checkMe = item.active === "Y" && true
                return (
                  <>
                    {index < 8 || loadMore === true ? (
                      <NavItem>
                        <NavLink
                          style={{ backgroundColor: active !== item.uid ? "#f8f8f8" : "transparent" }}
                          id="wishlist-text-link"
                          className="mys"
                          active={active === item.uid}
                          onClick={() => {
                            toggle(item.uid)
                            dispatch(getWishlistListItem(item.uid))
                            setOpenEdit(false)
                            history.push('/account/store/wishlists')
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "end"
                            }}
                          >
                            {item.private === "Y" ? (
                              <Lock
                                size={33}
                                color="#ea5455"
                                style={{ marginRight: "10px" }}
                              />
                            ) : (
                              <Unlock
                                size={33}
                                color="#28c76f"
                                style={{ marginRight: "10px" }}
                              />
                            )}

                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center"
                                }}
                              >
                                {active === item.uid && (
                                  <Star size={17} color="#6e6b7b" />
                                )}
                                {item.name}
                              </div>
                              <p id="wishlist-total-items">
                                Total items: {item.total_products} products
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      </NavItem>
                    ) : (
                      ""
                    )}
                  </>
                )
              })}
            </>
          </Nav>
        )
      }
    }
  }

  const renderWishlistListItem = () => {
    if (userType === true) {
      if (store.wishlistList.length !== 0) {
        if (store.wishlistList.data.length !== 0) {
          return store.wishlistList.data.map((item) => {
            const isInStock = item.product.out_of_stock === "N"
            const InStock = isInStock ? "In Stock" : "Out of Stock"
            return (
              <Col sm="7" xs="10" lg="4" xl="3" md="5">
                <Card className="ecommerce-card" id="wishlistList-card">
                  <div className="item-img text-center mx-auto">
                    <Link to="/">
                      <img
                        className="img-fluid card-img-top"
                        style={{
                          width: "200px",
                          height: "190px",
                          marginTop: "12px"
                        }}
                        src={item.product.cover.original}
                        alt={item.product.cover.original}
                      />
                    </Link>
                  </div>
                  <CardBody style={{ paddingBottom: "10px" }}>
                    <div
                      className="item-wrapper"
                      style={{ textAlign: "center", marginBottom: "3px" }}
                    >
                      <div className="item-rating">
                        <ul className="unstyled-list list-inline">
                          <li>
                            <Rating
                              emptySymbol={
                                <Star size={27} fill="white" stroke="#ff9f43" />
                              }
                              fullSymbol={
                                <Star
                                  size={27}
                                  fill="#ff9f43"
                                  stroke="#ff9f43"
                                />
                              }
                              initialRating={item.product.rating}
                              readonly={true}
                            />
                          </li>
                          <li>
                            <span
                              style={{ marginLeft: "10px", color: "#7367f0" }}
                            >
                              {" "}
                              {item.product.total_reviews} Reviews
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h6 className="item-name" style={{ textAlign: "center" }}>
                      <Link className="text-body" to="/">
                        {item.product.name}
                      </Link>
                      <CardText tag="span" className="item-company"></CardText>
                    </h6>
                  </CardBody>
                  <div className="item-options text-center">
                    <div className="item-wrapper">
                      <div className="item-cost">
                        <p className="instock">{InStock}</p>
                        <h4 className="item-price" id="wishlist-item-price">
                          {item.product.price} RON
                        </h4>
                      </div>
                    </div>
                    <Button
                      style={{ width: "50%", color: "#5e5873" }}
                      className="btn-wishlist"
                      id="wishlistItems-remove-btn"
                      color="light"
                      onClick={() => removeWishlistItem(item.wishlist_uid, item.uid)}
                    >
                      <X size={14} className="mr-25" />

                      <span>Remove</span>
                    </Button>
                    <Button
                      id="wishlistItems-cart-btn"
                      style={{ width: "50%" }}
                      color="primary"
                      className="btn-cart move-cart"
                      onClick={() => handleCartBtn(item.product.slug, 1)}
                    >
                      <ShoppingCart className="mr-50" size={14} />
                      <span>Move to Cart</span>
                    </Button>
                  </div>
                </Card>
              </Col>
            )
          })
        } else {
          return (
            <Fragment>
              <Col xs="12">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingTop: "12.8px",
                    backgroundColor: "rgb(233 233 233)",
                    borderRadius: "6px"
                  }}
                >
                  <Heart
                    className="wishlist-view-icon1"
                    fill={"#ea5455"}
                    color={"#ea5455"}
                    size={20}
                    style={{ marginRight: "10px" }}
                  />
                  <p style={{ color: "#7367f0" }}>
                    My favorite items will be added here.
                  </p>
                </div>
              </Col>
              <Col xs="12">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px"
                  }}
                >
                  <Button.Ripple
                    onClick={() => history.push("/store")}
                    color="primary"
                  >
                    View Products
                  </Button.Ripple>
                </div>
              </Col>
            </Fragment>
          )
        }
      }
    }
  }

  const renderWishlistData = () => {
    if (userType === true) {
      if (store.wishlist.data !== undefined) {
        return store.wishlist.data.map((item) => {
          if (item.uid === active) {
            const listType = item.private === "Y" ? "Privata" : "Publica"
            return (
              <>
                <Row>
                  <Col xs="12">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                      }}
                    >
                      <div className="tabs-wishlist-titles">
                        <h3>
                          {item.name}{" "}
                          <span> ({item.total_products} products)</span>{" "}
                        </h3>
                      </div>
                      <div className="tabs-wishlist-btns">
                        <Button.Ripple
                          color="light"
                          style={{
                            color: "#6e6b7b",
                            marginRight: "15px",
                            paddingTop: "13.99px",
                            paddingBottom: "13.99px",
                            paddingLeft: "34px",
                            paddingRight: "34px"
                          }}
                          onClick={() => setOpenEdit(!openEdit)}
                        >
                          Edit
                        </Button.Ripple>
                        <Button
                          className="btn-cart"
                          color="light"
                          style={{ color: "#6e6b7b" }}
                        >
                          <Share2 size={20} style={{ marginRight: "10px" }} />
                          <span className="text-truncate">Share </span>
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <hr />
                {openEdit === true && (
                  <>
                    <Row style={{ marginBottom: "10px" }}>
                      <Col xs="12" sm="12" lg="12" xl="6" md="12">
                        <FormGroup>
                          <Label for="basicInput" className="event-name">
                            Wishlist Name
                          </Label>
                          <Input
                            type="email"
                            id="basicInput"
                            placeholder={item.name}
                            size="md"
                            defaultChecked={listType}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6" lg="6" xl="3" sm="12" xs="12">
                        <FormGroup>
                          <Label for="select-default"> Visibility </Label>
                          <Input
                            type="select"
                            name="select"
                            id="select-default"
                            size="md"
                          >
                            <option>Publica</option>
                            <option>Privata</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="6" lg="6" xl="3" sm="12" xs="12">
                        <FormGroup>
                          <Label for="select-default">
                            {" "}
                            Want next products to be added here?{" "}
                          </Label>
                          <InputGroup id="radio-in-wishlist" className="mb-1">
                            <InputGroupAddon addonType="prepend">
                              <CustomInput
                                type="radio"
                                id="exampleCustomRadio"
                                className="radio1-in-wishlist"
                                name="customRadio"
                                inline
                                defaultChecked
                              />
                            </InputGroupAddon>
                            <Input
                              type="select"
                              name="select"
                              id="select-default"
                              size="md"
                            >
                              <option>Yes</option>
                              <option>No</option>
                            </Input>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>

                    <div
                      className="button-group"
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <Button
                        className="cancel-wishlist-btn"
                        onClick={() => history.push("/account/store/wishlists")}
                        color="light"
                      >
                        Back
                      </Button>

                      <div>
                        <Button.Ripple
                          onClick={() => {
                            setRemoveWishlist(item.uid)
                            setBasicModal(true)
                          }}
                          className="btn-wishlist"
                          color="light"
                          style={{ color: "#6e6b7b", marginRight: "10px" }}
                        >
                          <X size={14} className="mr-25" />

                          <span>Remove</span>
                        </Button.Ripple>
                        <Button.Ripple color="primary">
                          Save Wishlist
                        </Button.Ripple>
                      </div>
                    </div>
                    <hr />
                  </>
                )}
              </>
            )
          }
        })
      }
    }
  }

  const renderPagination = () => {
    if (userType === true) {
      if (store.wishlistList.length !== 0) {
        if (store.wishlistList.data.length !== 0) {
        return (
          <Row
          className="justify-content-center"
          style={{ marginTop: "20px" }}
        >
          <Pagination className="d-flex justify-content-center">
            <PaginationItem disabled={currentActivePage === 1}>
              <PaginationLink
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <Link
                  to={getNextPageRoute(currentActivePage - 1)}
                >
                  {"<"}
                </Link>
              </PaginationLink>
            </PaginationItem>
            {renderPageItems()}
            <PaginationItem
              // className='next-item'
              disabled={currentActivePage === `${store.wishlistList.meta && store.wishlistList.meta.pagination.total_pages}`}
            >
              <PaginationLink
                href=""
                onClick={(e) => e.preventDefault()}
              >
                <Link
                  to={getNextPageRoute(currentActivePage + 1)}
                >
                  {">"}
                </Link>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Row>

        )
        } else {
          return ''
        }
      }
    }
  }
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="12" xlg="11">
          <Card className="card-transaction">
            <CardHeader>
              <div className="wishlist-title-div">
                <Heart className="wishlist-view-icon1" size={30} style={{}} />
                <span className="wishlists-heading">Wishlist</span>
              </div>
              <Button.Ripple
                color="primary"
                id="new-wishlist"
                onClick={() => history.push("/account/store/wishlists/create")}
              >
                <Plus size={14} />
                <span className="align-middle ml-25">New Wishlist</span>
              </Button.Ripple>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">{renderWishlistsTabs()}</Col>
                <Col
                  xs="12"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button.Ripple
                    color="light"
                    onClick={() => setLoadMore(!loadMore)}
                    style={{
                      color: "#6e6b7b",
                      marginRight: "15px",
                      paddingTop: "13.99px",
                      paddingBottom: "13.99px",
                      paddingLeft: "34px",
                      paddingRight: "34px"
                    }}
                  >
                    Load More
                  </Button.Ripple>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <TabContent className="py-50" activeTab={active}>
                    <TabPane tabId={active}>
                      {renderWishlistData()}
                      <Row>{renderWishlistListItem()}</Row>
                      {renderPagination()}
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
        <ModalBody style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "2rem"
            }}
          >
            <AlertCircle
              color="#ff9f43"
              size={55}
              style={{ marginBottom: "18px" }}
            />
            <h3>Are you sure?</h3>
            <p style={{ fontWeight: "300" }}>
              You will lose all items added to wishlist.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "12px"
            }}
          >
            <Button
              color="danger"
              outline
              onClick={() => {
                setRemoveWishlist("")
                setBasicModal(!basicModal)
              }}
              style={{ marginRight: "20px" }}
            >
              Cancel
            </Button>

            <Button color="primary" onClick={() => handleDeleteWishlistList()}>
              Yes, remove it!
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default RenderWishlistList
