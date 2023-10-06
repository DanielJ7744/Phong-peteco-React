import { Fragment, useEffect } from "react"
import "./CategoriesPage.scss"
import { Row, Col, Card, CardBody } from "reactstrap"
import { getCategories } from "../store/actions"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CategoriesPlaceholder from './CategoriesPlaceholder'

const CategoriesPage = props => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.ecommerce)

    useEffect(() => { dispatch(getCategories()) }, [])

    if (!(store.categories.data instanceof Array)) {
        return <CategoriesPlaceholder />
    }

    const rows = []
    let cols = []
    const lastRowWithMoreItems = store.categories.data.length % 3

    store.categories.data.forEach((category, index) => {
        const lastRowSize = index < store.categories.data.length - lastRowWithMoreItems - 3 ? '4' : '3'

        if (index % 3 === 0 && index < store.categories.data.length - lastRowWithMoreItems - 3) {
            rows.push(
                <Row
                    className="justify-content-center"
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                    key={`row-${category.slug}`}
                >
                    {cols}
                </Row>
            )
            cols = [
                <Col key={category.uid} xl={lastRowSize} lg={lastRowSize} md={lastRowSize} sm="4" key={category.slug}>
                    <Link to={`/store/c/${category.slug}`}>
                        <img
                            src={`${category.cover_url["home-default"]}`}
                            className="card-image"
                        />

                        <div className="card-content">
                            <h6>{category.name}</h6>
                            <span>{category.products_count} products</span>
                        </div>
                    </Link>
                </Col>
            ]
        } else if (store.categories.data.length - 1 === index) {
            cols.push(<Col xl={lastRowSize} lg={lastRowSize} md={lastRowSize} sm="4" key={category.slug}>
                <Link to={`/store/c/${category.slug}`}>
                    <img
                        src={`${category.cover_url["home-default"]}`}
                        className="card-image"
                    />

                    <div className="card-content">
                        <h6>{category.name}</h6>
                        <span>{category.products_count} products</span>
                    </div>
                </Link>
            </Col>)

            rows.push(
                <Row
                    className="justify-content-center"
                    style={{ marginBottom: "20px", marginTop: "20px" }}
                    key={`row-${category.slug}`}
                >
                    {cols}
                </Row>
            )
        } else {
            cols.push(<Col xl={lastRowSize} lg={lastRowSize} md={lastRowSize} sm="4" key={category.slug}>
                <Link to={`/store/c/${category.slug}`}>
                    <img
                        src={`${category.cover_url["home-default"]}`}
                        className="card-image"
                    />

                    <div className="card-content">
                        <h6>{category.name}</h6>
                        <span>{category.products_count} products</span>
                    </div>
                </Link>
            </Col>)
        }
    })

    return (
            <Fragment>
            <Row className="justify-content-center">
                <Col xs="12">
                    <img
                        src="https://www.peteco.ro/img/home_banner_small3.jpg"
                        style={{ width: "100%", height: "auto", display: "block" }} w
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

            {rows}
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

export default CategoriesPage
