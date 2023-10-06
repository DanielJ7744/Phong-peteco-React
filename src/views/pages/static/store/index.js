import { Fragment } from "react"
import "./store.scss"
import { Row, Col, Card, CardBody } from "reactstrap"

const Store = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="12">
          <img
            src="https://www.peteco.ro/img/home_banner_small3.jpg"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "3rem" }} className="justify-content-center">
        <Col xs="12">
          <h6 style={{ fontSize: "16px", fontWeight: "800" }}>
            Buy by species
          </h6>
          <hr />
        </Col>
      </Row>

      <Row
        className="justify-content-center"
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        <Col xl="4" lg="4" md="4" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-dogs.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>

        <Col xl="4" lg="4" md="4" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-cats.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>

        <Col xl="4" lg="4" md="4" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-birds.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col xl="3" lg="3" md="3" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-fishes.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-rodents.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-reptiles.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>

        <Col xl="3" lg="3" md="3" sm="4">
          <img
            src="https://www.peteco.ro/img/frontend/store/category-livestock.jpg"
            className="card-image"
          />

          <div className="card-content">
            <h6>Dogs</h6>
            <span>123232 products</span>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col xs="12">
          <Card>
            <CardBody>
              <p>
                The only online petshop in Romania where you can find ALL pet
                products, but also products intended exclusively for authorized
                veterinarians.
                <br></br>
                <br></br>
                Maybe you are here because you need dry dog ​​food , dog collars
                with gps, delicious wet food for cats , automatic litter ,
                aquariums for exotic fish , cages , terrariums for turtles,
                reptiles or tarantulas , live food for reptiles or vaccines for
                farm animals . Petshop with everything, at incredible prices.
                <br></br>
                <br></br>
                Or maybe you're here for fun. We have clothes , toys for dogs ,
                for dentition, intake, balls or even pluses, toys for cats -
                sisal, fishing rods, tassels, lasers, but also ladders, mirrors,
                swings and other toys for the cage . Or decorations for the
                dragon in your terrarium.
                <hr />
                Whatever your reason, welcome to the Peteco marketplace. You are
                here for pet shop products at the lowest prices, anytime. Soon,
                and services.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <p>
                The only online petshop in Romania where you can find ALL pet
                products, but also products intended exclusively for authorized
                veterinarians.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Store
