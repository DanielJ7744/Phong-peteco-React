import { Fragment } from "react"
import "./providers-create.scss"
import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap"
import CardBody from "reactstrap/lib/CardBody"
import { Link } from "react-router-dom"

const ProvidersCreate = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card id="myCard">
            <CardHeader>
              <CardTitle tag="h4" style={{ fontWeight: "700" }}>
                New Company
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <h1
          className="text-bolder"
          style={{ marginBottom: "20px", fontWeight: "800" }}
        >
          Choose the area of ​​activity
        </h1>
      </Row>

      <Row className="justify-content-center">
        <Col xs="12" sm="12" md="12" lg="10" xl="10">
          <Card>
            <CardBody>
              <Row>
                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/D.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Veterinarian</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/V.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Veterinary clinic</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/P.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">
                          Veterinary pharmacy
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/H.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">
                          Veterinary hospital
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/T.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Trainer / Trainer</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/K.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">kennel</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/F.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">cattery</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/A.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Pet shelter</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/O.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Pet Association</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/B.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Pet club</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/L.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Pension / Hotel</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/E.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">ensure</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/C.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Company (other)</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/I.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">
                          Importer of pet products
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col xs="6" sm="4" xl="3" lg="3" md="4">
                  <Link to="/providers/create">
                    <div className="card-image-container">
                      <img
                        src="https://www.peteco.ro/img/provider/S.jpg"
                        style={{ width: "100%" }}
                      />
                      <div className="card-text-content">
                        <p className="card-image-caption">Pet store</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default ProvidersCreate
