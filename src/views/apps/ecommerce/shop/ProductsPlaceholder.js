import React, { Fragment } from "react"
import { Row, Col } from "reactstrap"
import ContentLoader from "react-content-loader"

const CardsPlaceholder = (props) => {
  return (
    <ContentLoader
      backgroundColor="#f0f0f0"
      foregroundColor="#ecebeb"
      speed={1}
      viewBox="0 0 100% 100%"
      height={"100%"}
      width={"100%"}
      {...props}
    >
      <rect x="0" y="42" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
  )
}

function ProductsPlaceholder() {
  return (
    <Fragment>
      <Row>
        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>
        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>
        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>

        <Col xs="12" sm="6" lg="4" xl="4" md="6" style={{ height: "400px" }}>
          <CardsPlaceholder />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ProductsPlaceholder