import { Fragment, useEffect, useState } from "react"
import {
  Row,
  Col,
  Button,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input
} from "reactstrap"
import Rating from "react-rating"
import { Edit3, Star } from "react-feather"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import Avatar from "@components/avatar"

import "./productDetails.scss"

function CostumerReview(props) {
  const { dispatch, getReviews, store, data, addReview, likeReview } = props
  const [basicModal, setBasicModal] = useState(false)

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [rating, setRating] = useState(0)

  const countryOptions = [
    { value: "Best", label: "Best" },
    { value: "Good", label: "Good" }
  ]

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ]

  useEffect(() => {
    dispatch(getReviews())
  }, [])

  const handleLikeReview = (product_uid, review_uid) => {
    dispatch(likeReview(product_uid, review_uid))

  }

  const handleAddReview = () => {
    if (rating && title, description) {
      dispatch(addReview(data.data.uid, rating, title, description))
      setBasicModal(!basicModal)
    }
  }
  const renderReviews = () => {
    if (store.prodcutReview.data) {
      return store.prodcutReview.data.map((item) => {
        let date = new Date(item.created_at * 1000)
        date.setDate(date.getDate() - 1)
        date = `${date.getDate()} ${
          monthNames[date.getMonth()]
        } ${date.getFullYear()}`
        return (
          <>
            <Row>
              <Col xs="12" lg="2" xl="2" md="4" sm="4">
                <div className="product-ratings">
                  <Avatar img={item.profile.avatar_url.original} size="lg" />

                  <p
                    style={{
                      fontWeight: "500",
                      marginTop: "10px",
                      marginBottom: "0px"
                    }}
                  >
                    {item.profile.name}
                  </p>
                  <span style={{ marginTop: "3px" }}> {date} </span>
                </div>
              </Col>

              <Col xs="12" lg="10" xl="10" md="8" sm="8">
                <div className="product-ratings">
                  <p style={{ fontWeight: "500", fontSize: "18px" }}>
                    {item.title}
                  </p>
                  <Rating
                    emptySymbol={
                      <Star size={24} fill="white" stroke="#ff9f43" />
                    }
                    fullSymbol={
                      <Star size={24} fill="#ff9f43" stroke="#ff9f43" />
                    }
                    initialRating={item.customer_rating}
                    readonly={true}
                  />
                  <p style={{ fontWeight: "normal", marginTop: "10px" }}>
                    {item.content}
                  </p>
                  <p style={{ color: "#7367f0", fontSize: "15px", cursor: 'pointer' }} onClick={() => handleLikeReview(item.product_uid, item.uid)}>
                    {" "}
                    {item.votes_count} Like this
                  </p>
                </div>
              </Col>
            </Row>
            <hr />
          </>
        )
      })
    }
  }

  const renderProductTotalReviews = () => {
    if (store.productDetail.data.total_reviews === 0) {
      return (
        <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Col xs="12">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#f8f8f8",
                paddingTop: "50px",
                paddingBottom: "50px",
                borderRadius: "5px"
              }}
              id="main-div-for-feedback"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <h2> Be the first to write a review </h2>
                <p
                  style={{
                    fontWeight: "500",
                    fontSize: "17px",
                    textAlign: "center"
                  }}
                >
                  {" "}
                  Give your opinion by giving a note about the product{" "}
                </p>
              </div>

              <div
                id="feedback-div"
                style={{ display: "flex", flexDirection: "column" }}
              >
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
                  onClick={() => setBasicModal(!basicModal)}
                >
                  <Edit3 className="mr-50" size={17} color="white" />
                  <span> Write a review </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )
    } else {
      return (
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
                emptySymbol={<Star size={29} fill="white" stroke="#ff9f43" />}
                fullSymbol={<Star size={29} fill="#ff9f43" stroke="#ff9f43" />}
                initialRating={store.productDetail.data.rating}
                readonly={true}
              />
              <h6
                style={{
                  fontWeight: "500",
                  fontSize: "22px",
                  marginTop: "13px"
                }}
              >
                {store.productDetail.data.rating} / 5
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
                emptySymbol={<Star size={39} fill="#f8f8f8" stroke="#b0b0b0" />}
                fullSymbol={<Star size={39} fill="#b0b0b0" stroke="#b0b0b0" />}
                initialRating={0}
              />
              <div>
                <Button
                  style={{ marginTop: "20px" }}
                  color="primary"
                  className="btn-cart move-cart"
                  onClick={() => setBasicModal(!basicModal)}
                >
                  <Edit3 className="mr-50" size={17} color="white" />
                  <span> Write a review </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )
    }
  }

  return (
    <Fragment>
      <Row className="justify-content-start">
        <Col xs="12">
          <h1 className="product-card-heading" style={{ marginTop: "15px" }}>
            Customer Reviews{" "}
            <span
              style={{
                fontSize: "16px",
                marginLeft: "10px",
                color: "rgb(206 206 206)"
              }}
            >
              ( {store.productDetail.data.total_reviews} Reviews )
            </span>
          </h1>
        </Col>
      </Row>
      {renderProductTotalReviews()}

      <Row>
        <Col xs="3" lg="1" xl="1" md="2">
          <p style={{ marginTop: "8px", fontWeight: "normal" }}>Sort by</p>
        </Col>

        <Col xs="5" lg="2" xl='2' md="4">
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
      {renderReviews()}
      <Modal
        size="lg"
        isOpen={basicModal}
        toggle={() => setBasicModal(!basicModal)}
      >
        <ModalHeader toggle={() => setBasicModal(!basicModal)}>
          Scrie o recenzie
        </ModalHeader>
        <ModalBody style={{ padding: "30px" }}>
          <h3> {data.data.name} </h3>
          <p style={{ marginTop: "15px", marginBottom: "3px" }}>
            Selectati Rating
          </p>
          <Rating
            emptySymbol={<Star size={45} fill="white" stroke="#b0b0b0" />}
            fullSymbol={<Star size={45} fill="#b0b0b0" stroke="#b0b0b0" />}
            initialRating={rating}
            value={rating}
            onChange={(e) => setRating(e)}
          />
          <FormGroup style={{ marginTop: "15px" }}>
            <Label for="basicInput">Titlul recenziei</Label>
            <Input
              type="email"
              id="basicInput"
              placeholder=""
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup style={{ marginTop: "15px" }}>
            <Label for="basicInput">Descriere despre recenzie</Label>
            <Input
              type="textarea"
              id="basicInput"
              placeholder=""
              onChange={(e) => setDescription(e.target.value)}
            />
            <small>
              Prin publicarea opiniei, sunteti de acord cu{" "}
              <span stye={{ color: "#7367f0" }}> termenii si conditiile </span>{" "}
              site-ului
            </small>
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              outline
              color="primary"
              onClick={() => setBasicModal(!basicModal)}
            >
              Anuleaza
            </Button>
            <Button color="primary" onClick={() => handleAddReview()}>
              Posteaza recenzia
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default CostumerReview
