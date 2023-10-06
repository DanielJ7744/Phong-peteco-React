import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./mycompanies.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap"
import Avatar from "@components/avatar"
import { Globe, MessageSquare, Phone } from "react-feather"
import { Link } from "react-router-dom"

const MyCompanies = () => {
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardHeader>
              <CardTitle
                id="title-0"
                style={{ fontSize: "17px", fontWeight: "500" }}
              >
                List of companies
              </CardTitle>
              <Link to='/providers/create'>
              <Button.Ripple color="primary">Create New Company</Button.Ripple>
              </Link>
            </CardHeader>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardBody>
              <div className="user-card">
                <Avatar
                  img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                  size="xl"
                />
                <div className="user-info">
                  <p className="user-name">Asdsa</p>
                  <p className="user-data">
                    {" "}
                    <Globe size={17} /> https://www.peteco.ro{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <MessageSquare size={17} /> alin.stan00@gmail.com{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <Phone size={17} /> 721012653{" "}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardBody>
              <div className="user-card">
                <Avatar
                  img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                  size="xl"
                />
                <div className="user-info">
                  <p className="user-name">Asdsa</p>
                  <p className="user-data">
                    {" "}
                    <Globe size={17} /> https://www.peteco.ro{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <MessageSquare size={17} /> alin.stan00@gmail.com{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <Phone size={17} /> 721012653{" "}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <Card>
            <CardBody>
              <div className="user-card">
                <Avatar
                  img="https://www.peteco.ro/static/img/dummy/author-main2.jpg"
                  size="xl"
                />
                <div className="user-info">
                  <p className="user-name">Asdsa</p>
                  <p className="user-data">
                    {" "}
                    <Globe size={17} /> https://www.peteco.ro{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <MessageSquare size={17} /> alin.stan00@gmail.com{" "}
                  </p>
                  <p className="user-data">
                    {" "}
                    <Phone size={17} /> 721012653{" "}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default MyCompanies
