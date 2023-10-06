import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./store-brands.scss"
import { Row, Col, Button } from "reactstrap"
import { Link } from "react-router-dom"

const StoreBrands = () => {
  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="StoreBrands"
        breadCrumbParent="Pages"
        breadCrumbActive="StoreBrands"
      />
      <Row>
        <Col>
          <img
            src="https://www.peteco.ro/img/frontline_banner.jpg"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }}>
        <Col>
          <h1>Product brands</h1>
        </Col>
      </Row>

      <Row
        style={{ marginTop: "20px", backgroundColor: "white", padding: "20px" }}
      >
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">A</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Happy Animal</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">ACAN</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Aquael</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Arm & Hammer</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Actizoo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Anivital</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Acti Zoo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Aikiou</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Aqua One</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Animax</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">B</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Beaphar</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Belcuore</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Belcando</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Bellovero</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Boschi</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Bewi</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Biokats</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Bilper</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">B&B</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Bobo</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">C</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Candioli</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">catita</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Company of Animals</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Canagan</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Cat Chow</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Cibau</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Comfy</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Cunipic</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Crosses</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Chow</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">D</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">hollow</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dog Patrol</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Diamond Care</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dingo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Various</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dog Chow</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dog Concept</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dogland</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dr. Butte</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Dog Toys</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">E</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Exo Terra</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Eheim</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Easy Life</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ecopet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ectocide</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Enjoy</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Eukanuba</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Extreme Classic</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Exotic K Srl</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Exotic K Srl</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">F</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ferplast</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Furminator</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Fresh'n Clean</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Fluvia</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Feliway</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Flexi</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Foolee</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Frontline Pet Care</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Fun Cat</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Fun Dog</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">G</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Geo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Gimborn</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Gimpet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Gourmet A La Carte</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Great Goodness</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Gheda Mangimi</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Guna</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Guabi Natural</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Grandmix</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Gourmet</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">H</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Haile</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hagen</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hydor</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hill's</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hupple</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hill's Science Plan</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Heroes</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hery</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hello Kitty</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Hong</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">I</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Imac</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ipts</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Intersand</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">I'm Gismo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">iFetch</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">J</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">JBL</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Juwel</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Julius K9</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Johnson's Veterinary</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Products</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">JR FARM</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">JR FARM</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">K</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ksk Bono</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Kong</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Krantz</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Khara Protect</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Kippy</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Kattovit</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Khar</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">KongCompany</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Kurgo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Kiri</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">L</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Leonardo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Lishinu</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Ljubimetz</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Lawrence Pet Care UK</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">LBW</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">M</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Marine</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Munster</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Moola</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Mitzy</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Mitzura</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Midwest</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Maracat</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Maradog</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Matisse Original Line</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Mr. Muscle</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">N</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Novita</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Nutraline</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">N&D Low Grain</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">N&D Grain Free</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">N&D Grain Free Pumpkin</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Natures Menu</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Norwin</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Nutra Gold</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Nutrivet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Nestor</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">O</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Origin</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Oh My Dog</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Otome</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Oasis Shadrin Group</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">OrganicVet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Oster</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">P</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Pet Expert</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Padovan</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Prodivet Pharmaceuticals</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Pet Head</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Proline</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Pet Naturals USA</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Paiatze</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Paragon</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Pasadena</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Petkult</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">Q</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Qingquan</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Quiko</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Quiko</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">R</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Resun</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Resun</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Rettenmaier</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Resun</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Royal Canin</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Rupp</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Richter Pharma</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Rc Vet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Reptiles Planet</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Resun</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">S</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">sICC</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Streetside</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Savic</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Silicate</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Sogeval</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Sydeco</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Simba</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Sanabelle</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Schesir</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Scruffs</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">T</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Taste Of The Wild</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Tetra</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Trovan</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Tash</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Teco</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Tomi</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Trixie</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Treponti</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Treponti</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Tog Fit</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">U</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Urine Off</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Unipro</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Unknown</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">V</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Vitakraft</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Versele Laga</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Vivog</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Vetnil</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Vivog</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">VetIQ</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Viyo</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Valman</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Vivog</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Veyx - Pharma GmbH</p>{" "}
          </Link>
          <Button.Ripple color="primary" outline className="title-btn">
            See all brands
          </Button.Ripple>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">W</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Walkit</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Wouapy</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Wb</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Whiskas</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Woolf</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">the Wellness</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Wahl GmBH</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Wave</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Wellness Core</p>{" "}
          </Link>
        </Col>

        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">X</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Various</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">Y</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Yamato</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Yongli</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Yarrah</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Yo</p>{" "}
          </Link>
        </Col>
        <Col
          xs="12"
          sm="6"
          lg="3"
          xl="2"
          md="3"
          style={{ marginBottom: "30px" }}
        >
          <Link to="/store/brands">
            {" "}
            <h4 className="title">Z</h4>
          </Link>
          <hr />

          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zolux</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zogoflex</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zoomed</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zolux</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zhongda</p>{" "}
          </Link>
          <Link to="/store/brands">
            {" "}
            <p className="title-links">Zuma</p>{" "}
          </Link>
        </Col>
      </Row>
    </Fragment>
  )
}

export default StoreBrands
