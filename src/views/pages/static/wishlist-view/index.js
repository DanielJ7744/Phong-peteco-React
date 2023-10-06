import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  CardHeader,
  CardFooter,
  CardText,
  Badge
} from "reactstrap"
import { Lock, Star, ShoppingCart, X, Share2 } from "react-feather"
import cardImg from "@src/assets/images/elements/apple-watch.png"
import Select from "react-select"
import Rating from "react-rating"

import "@styles/base/pages/app-ecommerce.scss"
import './wishlist-view.scss'


const WishlistView = () => {
  const [openEdit, setOpenEdit] = useState(false)
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ]
  return (
    <Fragment>
      <Card>
        <CardHeader id="wishlist-products-id">
          <div className="wishlist-view-hg">
            <Lock className="wishlist-view-icon1" size={33} color="#ea5455" />

            <span className="wishlist-view-h" style={{ color: "#7367f0" }}>
              Wish list: dfsdsd
            </span>
          </div>

          <div>
            <Button.Ripple color="light" onClick={() => setOpenEdit(!openEdit)}>
              Edit List
            </Button.Ripple>
          </div>
        </CardHeader>
        {openEdit && (
          <Row
            className="justify-content-center"
            style={{ paddingLeft: "2%", paddingRight: "2%", marginTop: "10px" }}
          >
            <Col xs="12" sm="6" md="7" lg="9" xl="9">
              <FormGroup>
                <Label for="basicInput"> Wishlist Name</Label>
                <Input type="email" id="basicInput" placeholder="" />
                <Button.Ripple
                  id="edit-list-btn"
                  color="light"
                  style={{
                    border: "0px solid white",
                    marginTop: "10px"
                  }}
                >
                  Cancel
                </Button.Ripple>
              </FormGroup>
            </Col>
            <Col xs="12" sm="6" md="5" lg="3" xl="3">
              <FormGroup>
                <Label for="basicInput">Visibility</Label>
                <Select options={options} defaultValue="Private" />

                <div className="cancelBtn" id="edit-list-btn">
                  <Button.Ripple
                    color="primary"
                    style={{
                      marginTop: "10px"
                    }}
                  >
                    Save Wishlist
                  </Button.Ripple>
                </div>
              </FormGroup>
            </Col>
            <Col
              xs="12"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button.Ripple
                id="hidden-edit-list-btn"
                color="light"
                style={{
                  border: "0px solid white",
                  marginTop: "10px"
                }}
              >
                Cancel
              </Button.Ripple>
              <div className="cancelBtn" id="hidden-edit-list-btn">
                <Button.Ripple
                  color="primary"
                  style={{
                    marginTop: "10px"
                  }}
                >
                  Save Wishlist
                </Button.Ripple>
              </div>
            </Col>
          </Row>
        )}
        <CardBody style={{ marginTop: "15px" }}>
          <Row>
            <Col sm="9" xs="12" lg="5" xl="3" md="5">
              <Card className="ecommerce-card" id="myCard">
                <div className="item-img text-center mx-auto">
                  <Link to="/">
                    <img
                      className="img-fluid card-img-top"
                      style={{ marginTop: "12px" }}
                      src={cardImg}
                      alt={cardImg}
                    />
                  </Link>
                </div>
                <CardBody>
                  <div className="item-wrapper" style={{ textAlign: "center" }}>
                    <div className="item-rating">
                      <ul className="unstyled-list list-inline">
                        <li>
                          <Rating
                            emptySymbol={
                              <Star size={24} fill="white" stroke="#ff9f43" />
                            }
                            fullSymbol={
                              <Star size={24} fill="#ff9f43" stroke="#ff9f43" />
                            }
                            initialRating={4}
                            readonly={true}
                          />
                        </li>
                        <li>
                          <span style={{ marginLeft: "10px" }}>4 Reviews</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h6 className="item-name" style={{ textAlign: "center" }}>
                    <Link className="text-body" to="/">
                      Product Name
                    </Link>
                    <CardText tag="span" className="item-company"></CardText>
                  </h6>
                </CardBody>
                <div className="item-options text-center">
                  <div className="item-wrapper">
                    <div className="item-cost">
                      <h4 className="item-price">3434 RON</h4>
                      <CardText className="shipping">
                        <Badge color="light-success">Free Shipping</Badge>
                      </CardText>
                    </div>
                  </div>
                  <Button
                    style={{ width: "50%" }}
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
        </CardBody>

        <CardFooter
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "0px solid white"
          }}
        >
          <Button.Ripple color="light">Back</Button.Ripple>
          <Button className="btn-cart" color="light">
            <Share2 size={20} style={{ marginRight: "10px" }} />
            <span className="text-truncate">Share with friends</span>
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  )
}

export default WishlistView
