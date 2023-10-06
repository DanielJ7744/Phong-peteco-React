import { Fragment } from "react"
import "./storep.scss"
import { Row, Col, Button, CardText, Progress, Card, CardBody } from "reactstrap"
import Rating from "react-rating"
import { Heart, Edit3, Star, ShoppingCart, Share2 } from "react-feather"
import NumberInput from "@components/number-input"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import Avatar from "@components/avatar"
import avatarImg from "@src/assets/images/portrait/small/avatar-s-20.jpg"
import { Link } from "react-router-dom"

const Storep = () => {
  const countryOptions = [
    { value: "Best", label: "Best" },
    { value: "Good", label: "Good" }
  ]

  return (
    <Fragment>
      <Card>
        <CardBody>
          <Row className="justify-content-start" style={{ paddingTop: "12px" }}>
            <Col xs="12">
              <h1 style={{ color: "#5e5873" }} className="product-card-heading">
                Silon Club C 10/32 Black collar
              </h1>
            </Col>
            <Col xs="12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-end"
                }}
              >
                <Rating
                  emptySymbol={<Star size={20} fill="white" stroke="#ff9f43" />}
                  fullSymbol={
                    <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  }
                  initialRating={5}
                />
                <span
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    color: "#7367f0",
                    fontWeight: "lighter"
                  }}
                >
                  3 Reviews{" "}
                </span>
              </div>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: "23px",
              paddingBottom: "35px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Col lg="3" xl="3" md="4" sm="12" xs="12">
              <div className="card-img">
                <img
                  className="product-img"
                  src="https://imgs.peteco.ro/images/products/bd/76/bd762ad8425e-large-default.jpg"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </Col>

            <Col lg="5" xl="5" md="5" sm="12" xs="12">
              <div className="card-info">
                <p className="mb-0 w-c-heading">
                  Simba Caine Miel - 1230 brute 1,21%, Silon Club C 10/32 Black
                  Collar This collar is at your disposal{" "}
                  <span className="readmore">Read More</span>
                </p>
                <p className="card-info-property">
                  Brand: <span> Ferplast </span>
                </p>
                <p className="card-info-property">
                  Sold by: <span> happy animal </span>
                </p>
                <p className="card-info-property">
                  Product code: <span> bec431c9f98e </span>
                </p>

                <Button
                  className="btn-cart"
                  id="share-btn"
                  color="secondary"
                  style={{
                    marginTop: "20px"
                  }}
                >
                  <Share2 size={20} style={{ marginRight: "10px" }} />
                  <span className="text-truncate">Share with friends</span>
                </Button>
              </div>
            </Col>

            <Col lg="4" xl="4" md="3" sm="12" xs="12">
              <div className="item-options text-center card-qtn">
                <div className="item-wrapper">
                  <div className="item-cost">
                    <p className="instock">In stock</p>

                    <h4 className="item-price first-item-price ">14 33 Lei</h4>
                    <div
                      className="item-quantity"
                      style={{ marginTop: "16px" }}
                    >
                      <NumberInput
                        value="1"
                        min={1}
                        max={10}
                        size="sm"
                        style={{ width: "7rem", height: "2.15rem" }}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  className="btn-cart"
                  color="primary"
                  style={{
                    marginTop: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "35px",
                    paddingRight: "35px"
                  }}
                >
                  <ShoppingCart size={20} style={{ marginRight: "10px" }} />
                  <span className="text-truncate">Add to Cart</span>
                </Button>

                <Button
                  className="btn-cart"
                  color="secondary"
                  id="share-btn"
                  style={{
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    marginTop: "8px"
                  }}
                >
                  <Heart size={20} style={{ marginRight: "10px" }} />
                  <span className="text-truncate">Add to Wishlist</span>
                </Button>
              </div>
            </Col>
          </Row>
          <hr />
          <Row
            className="justify-content-start"
            style={{ marginTop: "35px", marginBottom: "10px" }}
          >
            <Col xs="12">
              <h1 className="product-card-heading">Description</h1>
            </Col>
          </Row>
         
          <Row className="justify-content-start">
            <Col xs="12">
              <p className="des-para">
                {" "}
                Silon Club C 10/32 Black Collar This collar is at your disposal
                Simba Caine Miel - 1230 G Aceasta conserva delicioasa contine
                carne de miel apetisanta, preparata la cuptor, imbogatita cu
                vitaminele A si D3 si minerale. - Nutritiva si usor digerabila:
                continut ridicat in proteine si vitamine Simba Caine Miel - 1230
                G Aceasta conserva delicioasa contine carne de miel apetisanta,
                preparata la cuptor, imbogatita cu vitaminele A si D3 si
                minerale. - Nutritiva si usor digerabila: continut ridicat in
                proteine si vitamine
              </p>
            </Col>
          </Row>
          <hr />
 {/* Product Detail Section Ends */}

          <Row className="justify-content-start">
            <Col xs="12">
              <h1
                className="product-card-heading"
                style={{ marginTop: "15px" }}
              >
                Customer Reviews{" "}
                <span
                  style={{
                    fontSize: "16px",
                    marginLeft: "10px",
                    color: "rgb(206 206 206)"
                  }}
                >
                  (1 Reviews)
                </span>
              </h1>
            </Col>
          </Row>

          <Row style={{ paddingTop: "15px" }}>
            <Col xs="12" lg="4" xl="4" md="6" sm="12">
              <div className="product-ratings">
                <h6
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    marginBottom: "20px"
                  }}
                >
                  General evaluation of the product
                </h6>
                <Rating
                  emptySymbol={<Star size={33} fill="white" stroke="#ff9f43" />}
                  fullSymbol={
                    <Star size={33} fill="#ff9f43" stroke="#ff9f43" />
                  }
                  initialRating={5}
                />
                <h6
                  style={{
                    fontWeight: "500",
                    fontSize: "22px",
                    marginTop: "13px"
                  }}
                >
                  5.0 / 5
                </h6>
              </div>
            </Col>

            <Col xs="12" lg="4" xl="4" md="6" sm="12">
              <div className="rate-card">
                <div className="rating-bar">
                  <p className="total-stars" style={{ marginRight: "20px" }}>
                    5 stars
                  </p>
                  <Progress value="25" />

                  <span className="total-users-review">(10)</span>
                </div>

                <div className="rating-bar">
                  <p className="total-stars" style={{ marginRight: "20px" }}>
                    4 stars
                  </p>
                  <Progress value="13" />

                  <span className="total-users-review">(1)</span>
                </div>

                <div className="rating-bar">
                  <p className="total-stars" style={{ marginRight: "20px" }}>
                    3 stars
                  </p>
                  <Progress value="0" />

                  <span className="total-users-review">(0)</span>
                </div>

                <div className="rating-bar">
                  <p className="total-stars" style={{ marginRight: "20px" }}>
                    2 stars
                  </p>

                  <Progress value="0" />

                  <span className="total-users-review">(0)</span>
                </div>

                <div className="rating-bar">
                  <p className="total-stars" style={{ marginRight: "20px" }}>
                    1 stars
                  </p>

                  <Progress value="0" />

                  <span className="total-users-review">(0)</span>
                </div>
              </div>
            </Col>

            <Col
              xs="12"
              lg="4"
              xl="4"
              md="6"
              sm="12"
              style={{ marginBottom: "20px" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  backgroundColor: "#f8f8f8",
                  padding: "23px",
                  borderRadius: "5px"
                }}
              >
                <h4>Did you buy or use this product?</h4>
                <p style={{ fontWeight: "bold" }}>Rate this product</p>
                <Rating
                  emptySymbol={
                    <Star size={39} fill="#f8f8f8" stroke="#b0b0b0" />
                  }
                  fullSymbol={
                    <Star size={39} fill="#b0b0b0" stroke="#b0b0b0" />
                  }
                  initialRating={0}
                />
                <div>
                  <Button
                    style={{ marginTop: "20px" }}
                    color="primary"
                    className="btn-cart move-cart"

                    /*eslint-disable */
                  >
                    <Edit3 className="mr-50" size={17} color="white" />
                    <span> Write a review </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs="3" lg="1" xl="1" md="2">
              <p style={{ marginTop: "8px", fontWeight: "normal" }}>Sort by</p>
            </Col>

            <Col xs="5" lg="2" xl="2" md="4">
              <Select
                theme={selectThemeColors}
                isClearable={false}
                id={`country`}
                className="react-select"
                classNamePrefix="select"
                options={countryOptions}
                defaultValue={countryOptions[0]}
              />
            </Col>
          </Row>
          <hr />

          <Row>
            <Col xs="12" lg="2" xl="2" md="4" sm="4">
              <div className="product-ratings">
                <Avatar img={avatarImg} size="lg" />

                <p
                  style={{
                    fontWeight: "500",
                    marginTop: "10px",
                    marginBottom: "0px"
                  }}
                >
                  Emma Ove
                </p>
                <span style={{ marginTop: "3px" }}> 23 March 2021</span>
              </div>
            </Col>

            <Col xs="12" lg="10" xl="10" md="8" sm="8">
              <div className="product-ratings">
                <p style={{ fontWeight: "500", fontSize: "18px" }}>
                  The perfect accessory for daily use
                </p>
                <Rating
                  emptySymbol={<Star size={24} fill="white" stroke="#ff9f43" />}
                  fullSymbol={
                    <Star size={24} fill="#ff9f43" stroke="#ff9f43" />
                  }
                  initialRating={5}
                />
                <p style={{ fontWeight: "normal", marginTop: "10px" }}>
                  I use it from day one and it has made my life easier and happy
                </p>
                <p style={{ color: "#7367f0", fontSize: "15px" }}>
                  {" "}
                  0 Like this
                </p>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs="12" lg="2" xl="2" md="4" sm="4">
              <div className="product-ratings">
                <Avatar img={avatarImg} size="lg" />

                <p
                  style={{
                    fontWeight: "500",
                    marginTop: "10px",
                    marginBottom: "0px"
                  }}
                >
                  Emma Ove
                </p>
                <span style={{ marginTop: "3px" }}> 23 March 2021</span>
              </div>
            </Col>

            <Col xs="12" lg="10" xl="10" md="8" sm="8">
              <div className="product-ratings">
                <p style={{ fontWeight: "500", fontSize: "18px" }}>
                  The perfect accessory for daily use
                </p>
                <Rating
                  emptySymbol={<Star size={24} fill="white" stroke="#ff9f43" />}
                  fullSymbol={
                    <Star size={24} fill="#ff9f43" stroke="#ff9f43" />
                  }
                  initialRating={5}
                />
                <p style={{ fontWeight: "normal", marginTop: "10px" }}>
                  I use it from day one and it has made my life easier and happy
                </p>
                <p style={{ color: "#7367f0", fontSize: "15px" }}>
                  {" "}
                  0 Like this
                </p>
              </div>
            </Col>
          </Row>
      {/* Reviews Section Ends */}
      <Row>
        <Col xs='12' >
        <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: 'center',
                  backgroundColor: "#f8f8f8",
                  padding: "34px",
                  borderRadius: "5px"
                }}
                id='main-div-for-feedback'
              >
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2> Be the first to write a review </h2>
                <p style={{ fontWeight: "500", fontSize: '17px' }}> Give your opinion by giving a note about the product </p>
                </div>
              
                <div id='feedback-div' style={{ display: 'flex', flexDirection: 'column' }}>
                <Rating
                  emptySymbol={
                    <Star size={39} fill="#f8f8f8" stroke="#b0b0b0" />
                  }
                  fullSymbol={
                    <Star size={39} fill="#b0b0b0" stroke="#b0b0b0" />
                  }
                  initialRating={0}
                />
                  <Button
                    style={{ marginTop: "20px" }}
                    color="primary"
                    className="btn-cart move-cart"

                    /*eslint-disable */
                  >
                    <Edit3 className="mr-50" size={17} color="white" />
                    <span> Write a review </span>
                  </Button>
                </div>
              </div>
          
        </Col>
      </Row>
        </CardBody>
      </Card>

  {/* Similar products Section */}
      <Row className="justify-content-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h3 className="similar-products-h">Similar products </h3>
          <p>People who boiught this also bought these items </p>
        </div>
      </Row>

      <Row className="justify-content-center">
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col sm="6" xs="9" lg="2" xl="2" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src="https://imgs.peteco.ro/images/products/d1/60/d160fe794769-medium-default.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px"
                    }}
                  />
                </Link>
              </div>
              <CardBody style={{ textAlign: "center" }}>
                <div className="item-wrapper">
                  <div className="item-rating">
                    <ul className="unstyled-list list-inline">
                      <li className="ratings-list-item mr-25">
                        <Rating
                          emptySymbol={
                            <Star size={20} fill="white" stroke="#ff9f43" />
                          }
                          fullSymbol={
                            <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                          }
                          initialRating={2}
                        />
                        <p
                          style={{
                            marginBottom: 0,
                            color: "#7367f0",
                            fontSize: "14px",
                            marginTop: "5px"
                          }}
                        >
                          1 Review{" "}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "14px", fontWeight: "500" }}
                    >
                      Silon Club C 10/32
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link style={{ color: "#28c76f" }}>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px", marginTop: "5px" }}
                >
                  72 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ width: "100%" }}
                  color="primary"
                  className="btn-cart move-cart"
                >
                  <ShoppingCart className="mr-50" size={19} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Storep
