import { Fragment } from "react"
import "./CategoriesPage.scss"
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

const BannerPlaceholder = (props) => {
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

const CategoriesPlaceholder = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="12">
          <div
            style={{
              height: "250px"
            }}
          >
            <BannerPlaceholder />
          </div>
        </Col>
      </Row>

      <Row style={{}} className="justify-content-center">
        <Col xs="12">
          <div style={{}}></div>
          <CardsPlaceholder />
        </Col>
      </Row>

      <Row
        className="justify-content-center"
        style={{ marginBottom: "0px", marginTop: "2rem" }}
      >
        <Col xl="4" lg="4" md="4" sm="4" style={{}}>
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>

        <Col xl="4" lg="4" md="4" sm="4" style={{}}>
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>

        <Col xl="4" lg="4" md="4" sm="4" style={{}}>
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xl="3" lg="3" md="3" sm="4">
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <div
            style={{
              height: "300px"
            }}
          >
            <CardsPlaceholder />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div style={{}}>
            <CardsPlaceholder />
          </div>
        </Col>
      </Row>

      <Row style={{ marginBottom: "30px" }}>
        <Col xs="12">
          <div
            style={{
              height: "90px"
            }}
          >
            <CardsPlaceholder />
          </div>{" "}
        </Col>
      </Row>
    </Fragment>
  )
}

export default CategoriesPlaceholder
