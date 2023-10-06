import { Fragment } from "react"
import "./home.scss"
import { Row, Col } from "reactstrap"
import Img1 from "@src/assets/images/pages/pet-store2-min.jpeg"
import Img2 from "@src/assets/images/pages/pet-social-min.jpeg"

const Home = () => {
  return (
    <Fragment>
      <Row>
        <Col xs="12" lg="6" xl="6" md="12" className="padding-0">
          <img src={Img1} className="image-half" />
          <div className="image-caption">
            <h6>Store</h6>
            <span>dedicated to pets</span>
          </div>
        </Col>

        <Col xs="12" lg="6" xl="6" md="12" className="padding-0">
          <img src={Img2} className="image-half" />
          <div className="image-caption">
            <h6>Social network</h6>
            <span>dedicated to pet lovers</span>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Home
