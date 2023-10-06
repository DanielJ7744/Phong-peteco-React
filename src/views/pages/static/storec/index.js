import { Fragment, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./storec.scss"
import "@styles/base/pages/app-ecommerce.scss"
import { Link } from "react-router-dom"
import Rating from "react-rating"

import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  CardText,
  Collapse,
  CardHeader,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap"
import {
  ChevronUp,
  List,
  AlignJustify,
  Users,
  Star,
  ShoppingCart,
  ChevronLeft,
  ChevronRight
} from "react-feather"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import cardImg from "@src/assets/images/elements/ipad-pro.png"

const Storec = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const countryOptions = [
    { value: "UK", label: "UK" },
    { value: "USA", label: "USA" },
    { value: "Spain", label: "Spain" },
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Australia", label: "Australia" }
  ]

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="Shop"
        breadCrumbParent="eCommerce"
        breadCrumbActive="Shop"
      />

      <Card>
        <CardHeader>
          <CardTitle tag="h4" style={{ position: "relative" }}>
            Produse pentru Caini
          </CardTitle>
          <p
            style={{ position: "absolute", top: "50px", fontWeight: "lighter" }}
          >
            15968 products matching all your criteria
          </p>
          <ChevronUp size={25} onClick={toggle} style={{}} />
        </CardHeader>
        <CardBody>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                <Row>
                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}>Hrana</h6>
                    </div>
                  </Col>

                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}>Hrana</h6>
                    </div>
                  </Col>

                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}> si Recompense</h6>
                    </div>
                  </Col>

                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}> Recompense</h6>
                    </div>
                  </Col>

                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}> Recompense</h6>
                    </div>
                  </Col>

                  <Col xs="2">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "column"
                      }}
                    >
                      <Users size={33} />
                      <h6 style={{ marginTop: "10px" }}> Recompense</h6>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Collapse>
          <hr />

          <Row>
            <Col
              xs="6"
              sm="6"
              lg="1"
              xl="1"
              md="6"
              style={{ marginBottom: "10px" }}
            >
              <div className="search1" style={{ marginTop: "10px" }}>
                <span style={{ fontWeight: "bolder" }}> sorts</span>
              </div>
            </Col>
            <Col
              xs="6"
              sm="6"
              lg="3"
              xl="3"
              md="6"
              style={{ marginBottom: "10px" }}
            >
              <div className="search1">
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  id={`country`}
                  className="react-select"
                  classNamePrefix="select"
                  options={countryOptions}
                  defaultValue={countryOptions[0]}
                />{" "}
              </div>
            </Col>

            <Col
              xs="6"
              sm="6"
              lg="1"
              xl="1"
              md="6"
              style={{ marginBottom: "10px" }}
            >
              <div
                className="search1"
                style={{ marginTop: "10px", fontWeight: "bolder" }}
              >
                <span>To miss</span>
              </div>
            </Col>
            <Col
              xs="6"
              sm="6"
              lg="3"
              xl="3"
              md="6"
              style={{ marginBottom: "10px" }}
            >
              <div className="search1">
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  id={`country`}
                  className="react-select"
                  classNamePrefix="select"
                  options={countryOptions}
                  defaultValue={countryOptions[0]}
                />{" "}
              </div>
            </Col>

            <List
              size={33}
              style={{ position: "absolute", right: "30px" }}
              className="side-icons"
            />
            <AlignJustify
              size={33}
              style={{ position: "absolute", right: "90px" }}
              className="side-icons"
            />
          </Row>
        </CardBody>
      </Card>

      <Row>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px",
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px",
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px",
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px",
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      marginTop: "10px",
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
        <Col xs="6" lg="4" xl="3" md="4">
          <section className="grid-view wishlist-items">
            <Card className="ecommerce-card">
              <div className="item-img text-center mx-auto">
                <Link>
                  <img
                    src={cardImg}
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
                        <span style={{ paddingTop: "12px" }}> 1 Review</span>
                      </li>
                    </ul>
                  </div>
                  <div className="item-cost">
                    <h6
                      className="item-price"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Silon Club C 10/32 Black collar
                    </h6>
                  </div>
                </div>
                <div className="item-name">
                  <Link>In stock</Link>
                </div>
                <CardText
                  className="item-description"
                  style={{ fontSize: "17px" }}
                >
                  14 Lei
                </CardText>
              </CardBody>
              <div className="item-options text-center">
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  /*eslint-disable */
                >
                  <ShoppingCart className="mr-50" size={14} />
                  <span>Add To Cart</span>
                </Button>
              </div>
            </Card>
          </section>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Pagination className="d-flex mt-3">
          <PaginationItem>
            <PaginationLink href="#" first>
              <ChevronLeft size={15} />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last>
              <ChevronRight size={15} />
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </Row>
    </Fragment>
  )
}

export default Storec
