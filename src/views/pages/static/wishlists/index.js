import { Fragment, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./wishlists.scss"
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
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
  InputGroupAddon
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
import cardImg from "@src/assets/images/elements/apple-watch.png"
import { Link } from "react-router-dom"
import Rating from "react-rating"

const Wishlists = () => {
  const [basicModal, setBasicModal] = useState(false)
  const [active, setActive] = useState("1")

  const [activeItems, setActiveItems] = useState()
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab)
    }
  }
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="11">
          <Card className="card-transaction">
            <CardHeader>
              <div className="wishlist-title-div">
                <Heart className="wishlist-view-icon1" size={30} style={{}} />
                <span className="wishlists-heading">Wishlist</span>
              </div>
              <Button.Ripple color="primary" id="new-wishlist">
                <Plus size={14} />
                <span className="align-middle ml-25">New Wishlist</span>
              </Button.Ripple>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <Nav id="wishlistLink" tabs justified>
                    <NavItem>
                      <NavLink
                        style={{
                          backgroundColor:
                            active !== "1" ? "#f8f8f8" : "transparent"
                        }}
                        id="wishlist-text-link"
                        active={active === "1"}
                        onClick={() => {
                          toggle("1")
                          setActiveItems("")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "end"
                          }}
                        >
                          <Lock
                            size={33}
                            color="#ea5455"
                            style={{ marginRight: "10px" }}
                          />

                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-start"
                              }}
                            >
                              <Star
                                color="#6e6b7b"
                                size={18}
                                style={{ marginBottom: "5px" }}
                              />
                              Default
                            </div>
                            <p id="wishlist-total-items">
                              Total items: 0 products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{
                          backgroundColor:
                            active !== "2" ? "#f8f8f8" : "transparent",
                          paddingRight: "10px"
                        }}
                        id="wishlist-text-link"
                        active={active === "2"}
                        onClick={() => {
                          toggle("2")
                          setActiveItems("2")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "end"
                          }}
                        >
                          <Unlock
                            size={33}
                            color="#28c76f"
                            style={{ marginRight: "10px" }}
                          />
                          <div>
                            Test-1
                            <p id="wishlist-total-items">
                              Total items: 43 products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{
                          backgroundColor:
                            active !== "3" ? "#f8f8f8" : "transparent"
                        }}
                        id="wishlist-text-link"
                        className="mys"
                        active={active === "3"}
                        onClick={() => {
                          toggle("3")
                          setActiveItems("3")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "end"
                          }}
                        >
                          <Lock
                            size={33}
                            color="#ea5455"
                            style={{ marginRight: "10px" }}
                          />
                          <div>
                            Test-3
                            <p id="wishlist-total-items">
                              Total items: 43 products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        id="wishlist-text-link"
                        style={{
                          backgroundColor:
                            active !== "4" ? "#f8f8f8" : "transparent"
                        }}
                        active={active === "4"}
                        onClick={() => {
                          toggle("4")
                          setActiveItems("4")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "end"
                          }}
                        >
                          <Lock
                            size={33}
                            color="#ea5455"
                            style={{ marginRight: "10px" }}
                          />
                          <div>
                            Test-4
                            <p id="wishlist-total-items">
                              Total items: 43 products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        id="wishlist-text-link"
                        style={{
                          backgroundColor:
                            active !== "5" ? "#f8f8f8" : "transparent"
                        }}
                        active={active === "5"}
                        onClick={() => {
                          toggle("5")
                          setActiveItems("5")
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "end"
                          }}
                        >
                          <Unlock
                            size={33}
                            color="#28c76f"
                            style={{ marginRight: "10px" }}
                          />
                          <div>
                            Test-5
                            <p id="wishlist-total-items">
                              Total items: 43 products
                            </p>
                          </div>
                        </div>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <TabContent className="py-50" activeTab={active}>
                    <TabPane tabId="1">
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
                                Default <span> (0 products)</span>{" "}
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
                              >
                                Edit
                              </Button.Ripple>
                              <Button
                                className="btn-cart"
                                color="light"
                                style={{ color: "#6e6b7b" }}
                              >
                                <Share2
                                  size={20}
                                  style={{ marginRight: "10px" }}
                                />
                                <span className="text-truncate">Share </span>
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col xs="12">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              backgroundColor: "#f8f8f8",
                              paddingTop: "10px",
                              borderRadius: "6px"
                            }}
                          >
                            <Heart
                              fill={"#ea5455"}
                              color="#ea5455"
                              size={20}
                              style={{ marginRight: "14px" }}
                            />
                            <p style={{ color: "#7367f0" }}>
                              {" "}
                              My favourite items will be added here{" "}
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row
                        className="justify-content-center"
                        style={{ marginTop: "2rem" }}
                      >
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <Button.Ripple color="primary">
                            View Products
                          </Button.Ripple>
                        </div>
                      </Row>
                    </TabPane>
                    <TabPane tabId={activeItems}>
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
                                Test-1 <span> (43 products)</span>{" "}
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
                              >
                                Edit
                              </Button.Ripple>
                              <Button
                                className="btn-cart"
                                color="light"
                                style={{ color: "#6e6b7b" }}
                              >
                                <Share2
                                  size={20}
                                  style={{ marginRight: "10px" }}
                                />
                                <span className="text-truncate">Share </span>
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <hr />

                      <Row style={{ marginBottom: "10px" }}>
                        <Col xs="12" sm="12" lg="12" xl="6" md="12">
                          <FormGroup>
                            <Label for="basicInput" className="event-name">
                              Wishlist Name
                            </Label>
                            <Input
                              type="email"
                              id="basicInput"
                              placeholder=""
                              size="md"
                              onChange={(e) => setWishlistName(e.target.value)}
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
                              onChange={(e) => setWishlistKind(e.target.value)}
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
                                onChange={(e) => setWishlistKind(e.target.value)}
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
                            className="btn-wishlist"
                            color="light"
                            style={{ marginRight: "10px" }}
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
                      <Row>
                        <Col sm="7" xs="10" lg="4" xl="3" md="5">
                          <Card
                            className="ecommerce-card"
                            id="wishlistList-card"
                          >
                            <div className="item-img text-center mx-auto">
                              <Link to="/">
                                <img
                                  className="img-fluid card-img-top"
                                  style={{
                                    width: "230px",
                                    height: "220px",
                                    marginTop: "12px"
                                  }}
                                  src="https://imgs.peteco.ro/images/products/3e/43/3e43bc522e43-original.jpg"
                                  alt={cardImg}
                                />
                              </Link>
                            </div>
                            <CardBody style={{ paddingBottom: "10px" }}>
                              <div
                                className="item-wrapper"
                                style={{
                                  textAlign: "center",
                                  marginBottom: "3px"
                                }}
                              >
                                <div className="item-rating">
                                  <ul className="unstyled-list list-inline">
                                    <li>
                                      <Rating
                                        emptySymbol={
                                          <Star
                                            size={27}
                                            fill="white"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        fullSymbol={
                                          <Star
                                            size={27}
                                            fill="#ff9f43"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        initialRating={4}
                                        readonly={true}
                                      />
                                    </li>
                                    <li>
                                      <span
                                        style={{
                                          marginLeft: "10px",
                                          color: "#7367f0"
                                        }}
                                      >
                                        {" "}
                                        4 Reviews
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h6
                                className="item-name"
                                style={{ textAlign: "center" }}
                              >
                                <Link className="text-body" to="/">
                                  dfdfdfdf
                                </Link>
                                <CardText
                                  tag="span"
                                  className="item-company"
                                ></CardText>
                              </h6>
                            </CardBody>
                            <div className="item-options text-center">
                              <div className="item-wrapper">
                                <div className="item-cost">
                                  <p className="instock">InStock</p>
                                  <h4
                                    className="item-price"
                                    id="wishlist-item-price"
                                  >
                                    343 RON
                                  </h4>
                                </div>
                              </div>
                              <Button
                              onClick={() => setBasicModal(!basicModal)}
                                style={{ width: "50%", color: "#5e5873" }}
                                className="btn-wishlist"
                                id="wishlistItems-remove-btn"
                                color="light"
                              >
                                <X size={14} className="mr-25" />

                                <span>Remove</span>
                              </Button>
                              <Button
                                id="wishlistItems-cart-btn"
                                style={{ width: "50%" }}
                                color="primary"
                                className="btn-cart move-cart"
                              >
                                <ShoppingCart className="mr-50" size={14} />
                                <span>View In Cart</span>
                              </Button>
                            </div>
                          </Card>
                        </Col>
                        <Col sm="7" xs="10" lg="4" xl="3" md="5">
                          <Card
                            className="ecommerce-card"
                            id="wishlistList-card"
                          >
                            <div className="item-img text-center mx-auto">
                              <Link to="/">
                                <img
                                  className="img-fluid card-img-top"
                                  style={{
                                    width: "230px",
                                    height: "220px",
                                    marginTop: "12px"
                                  }}
                                  src="https://imgs.peteco.ro/images/products/3e/43/3e43bc522e43-original.jpg"
                                  alt={cardImg}
                                />
                              </Link>
                            </div>
                            <CardBody style={{ paddingBottom: "10px" }}>
                              <div
                                className="item-wrapper"
                                style={{
                                  textAlign: "center",
                                  marginBottom: "3px"
                                }}
                              >
                                <div className="item-rating">
                                  <ul className="unstyled-list list-inline">
                                    <li>
                                      <Rating
                                        emptySymbol={
                                          <Star
                                            size={27}
                                            fill="white"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        fullSymbol={
                                          <Star
                                            size={27}
                                            fill="#ff9f43"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        initialRating={4}
                                        readonly={true}
                                      />
                                    </li>
                                    <li>
                                      <span
                                        style={{
                                          marginLeft: "10px",
                                          color: "#7367f0"
                                        }}
                                      >
                                        {" "}
                                        4 Reviews
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h6
                                className="item-name"
                                style={{ textAlign: "center" }}
                              >
                                <Link className="text-body" to="/">
                                  dfdfdfdf
                                </Link>
                                <CardText
                                  tag="span"
                                  className="item-company"
                                ></CardText>
                              </h6>
                            </CardBody>
                            <div className="item-options text-center">
                              <div className="item-wrapper">
                                <div className="item-cost">
                                  <p className="instock">InStock</p>
                                  <h4
                                    className="item-price"
                                    id="wishlist-item-price"
                                  >
                                    343 RON
                                  </h4>
                                </div>
                              </div>
                              <Button
                                onClick={() => setBasicModal(!basicModal)}
                                style={{ width: "50%", color: "#5e5873" }}
                                className="btn-wishlist"
                                id="wishlistItems-remove-btn"
                                color="light"
                              >
                                <X size={14} className="mr-25" />

                                <span>Remove</span>
                              </Button>
                              <Button
                                id="wishlistItems-cart-btn"
                                style={{ width: "50%" }}
                                color="primary"
                                className="btn-cart move-cart"
                              >
                                <ShoppingCart className="mr-50" size={14} />
                                <span>View In Cart</span>
                              </Button>
                            </div>
                          </Card>
                        </Col>
                        <Col sm="7" xs="10" lg="4" xl="3" md="5">
                          <Card
                            className="ecommerce-card"
                            id="wishlistList-card"
                          >
                            <div className="item-img text-center mx-auto">
                              <Link to="/">
                                <img
                                  className="img-fluid card-img-top"
                                  style={{
                                    width: "230px",
                                    height: "220px",
                                    marginTop: "12px"
                                  }}
                                  src="https://imgs.peteco.ro/images/products/3e/43/3e43bc522e43-original.jpg"
                                  alt={cardImg}
                                />
                              </Link>
                            </div>
                            <CardBody style={{ paddingBottom: "10px" }}>
                              <div
                                className="item-wrapper"
                                style={{
                                  textAlign: "center",
                                  marginBottom: "3px"
                                }}
                              >
                                <div className="item-rating">
                                  <ul className="unstyled-list list-inline">
                                    <li>
                                      <Rating
                                        emptySymbol={
                                          <Star
                                            size={27}
                                            fill="white"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        fullSymbol={
                                          <Star
                                            size={27}
                                            fill="#ff9f43"
                                            stroke="#ff9f43"
                                          />
                                        }
                                        initialRating={4}
                                        readonly={true}
                                      />
                                    </li>
                                    <li>
                                      <span
                                        style={{
                                          marginLeft: "10px",
                                          color: "#7367f0"
                                        }}
                                      >
                                        {" "}
                                        4 Reviews
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <h6
                                className="item-name"
                                style={{ textAlign: "center" }}
                              >
                                <Link className="text-body" to="/">
                                  dfdfdfdf
                                </Link>
                                <CardText
                                  tag="span"
                                  className="item-company"
                                ></CardText>
                              </h6>
                            </CardBody>
                            <div className="item-options text-center">
                              <div className="item-wrapper">
                                <div className="item-cost">
                                  <p className="instock">InStock</p>
                                  <h4
                                    className="item-price"
                                    id="wishlist-item-price"
                                  >
                                    343 RON
                                  </h4>
                                </div>
                              </div>
                              <Button
                                onClick={() => setBasicModal(!basicModal)}
                                style={{ width: "50%", color: "#5e5873" }}
                                className="btn-wishlist"
                                id="wishlistItems-remove-btn"
                                color="light"
                              >
                                <X size={14} className="mr-25" />

                                <span>Remove</span>
                              </Button>
                              <Button
                                id="wishlistItems-cart-btn"
                                style={{ width: "50%" }}
                                color="primary"
                                className="btn-cart move-cart"
                              >
                                <ShoppingCart className="mr-50" size={14} />
                                <span>View In Cart</span>
                              </Button>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
      
        <ModalBody style={{ marginBottom: '2rem' }}>
          
            <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
            <AlertCircle color='#ff9f43' size={55} />
            <h3>Are you sure?</h3>
            <p>You will lose all items added to wishlist.</p>
            </div>
           <div style={{ display: 'flex', justifyContent: 'center' }}> 
           <Button color='danger' outline onClick={() => setBasicModal(!basicModal)} style={{ marginRight: '20px' }}>
              Cancel
            </Button>

            <Button color="primary" onClick={() => setBasicModal(!basicModal)}>
              Yes, remove it!
            </Button>
           </div>
          </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default Wishlists
