import classnames from "classnames"
import { Menu, Grid, List } from "react-feather"
import {
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Button,
  ButtonGroup
} from "reactstrap"
import { useParams, useHistory } from "react-router"

const ProductsHeader = (props) => {
  const history = useHistory()
  const { slug, brand, price, rating } = useParams()

  // ** Props
  const {
    activeView,
    setActiveView,
    dispatch,
    getProducts,
    store,
    setSidebarOpen
  } = props

  // ** Sorting obj
  const sortToggleText = () => {

   if (store.params.sortBy === "added_desc") {
      return "New Products"
    } else if (store.params.sortBy === "price-asc") {
      return "Rising Price"
    } else if (store.params.sortBy === "price-desc") {
      return "Price Decreasing"
    } else if (store.params.sortBy === "rating_desc") {
      return "Ratings"
    } else {
      return "Sort by"
    }
  }

  const handleNextRoute = (val) => {
    const baseRoute = `/store/c/${slug}`
    if (brand !== undefined && price !== undefined && rating !== undefined)  {
      const nextRoute = `${baseRoute}/brand/${brand}/price-${price}/rating-${rating}-sortBy-${val}`
      return nextRoute
    } else if (brand !== undefined && price !== undefined) {
      const nextRoute = `${baseRoute}/brand/${brand}/price-${price}-sortBy-${val}`
      return nextRoute
    } else if (price !== undefined && rating !== undefined) {
      const nextRoute = `${baseRoute}/price-${price}/rating-${rating}-sortBy-${val}`
      return nextRoute
    } else if (brand !== undefined && rating !== undefined) {
      const nextRoute = `${baseRoute}/brand/${brand}/rating-${rating}-sortBy-${val}`
      return nextRoute
    } else if (brand !== undefined) {
      const nextRoute = `${baseRoute}/brand/${brand}-sortBy-${val}`
      return nextRoute
    } else if (price !== undefined) {
      const nextRoute = `${baseRoute}/price-${price}-sortBy-${val}`
      return nextRoute
    } else if (rating !== undefined) {
      const nextRoute = `${baseRoute}/rating-${rating}-sortBy-${val}`
      return nextRoute
    } else {
      const nextRoute = `${baseRoute}/sortBy-${val}`
      return nextRoute
    }
  }

  const productsPageTotal = store.filters.pagination ? store.filters.pagination.total : " "

  return (
    <div className="ecommerce-header">
      <Row>
        <Col sm="12">
          <div className="ecommerce-header-items">
            <div className="result-toggler">
              <button
                className="navbar-toggler shop-sidebar-toggler"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="navbar-toggler-icon d-block d-lg-none">
                  <Menu size={14} />
                </span>
              </button>
              <span className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                Produse pentru {store.params.category}
              </span>
              <span className="search-results col">
                {productsPageTotal} produse ce corespund tuturor criteriilor
                selectate
              </span>
            </div>
            <div className="view-options d-flex">
              <UncontrolledButtonDropdown
                className="dropdown-sort"
                style={{ marginRight: "13px" }}
              >
                <DropdownToggle
                  className="text-capitalize sm-1"
                  color="primary"
                  outline
                  caret
                >
                  {sortToggleText()}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className="w-100"
                    onClick={() => {
                      history.push(handleNextRoute("added_desc"))
                      dispatch(getProducts({ ...store.params, sortBy: "added_desc" }))
                    }}
                  >
                    New Products
                  </DropdownItem>
                  <DropdownItem
                    className="w-100"
                    onClick={() => {
                      history.push(handleNextRoute("price-asc"))
                      dispatch(getProducts({ ...store.params, sortBy: "price-asc" }))
                    }}
                  >
                    Rising Price
                  </DropdownItem>
                  <DropdownItem
                    className="w-100"
                    onClick={() => {
                      history.push(handleNextRoute("price-desc"))
                      dispatch(getProducts({ ...store.params, sortBy: "price-desc" }))
                    }}
                  >
                    Price Decreasing
                  </DropdownItem>
                  <DropdownItem
                    className="w-100"
                    onClick={() => {
                      history.push(handleNextRoute("rating_desc"))
                      dispatch(getProducts({ ...store.params, sortBy: "rating_desc" }))
                    }}
                  >
                    Ratings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <ButtonGroup className="btn-group-toggle">
                <Button
                  tag="label"
                  className={classnames("btn-icon view-btn grid-view-btn", {
                    active: activeView === "grid"
                  })}
                  color="primary"
                  outline
                  onClick={() => setActiveView("grid")}
                >
                  <Grid size={18} />
                </Button>
                <Button
                  tag="label"
                  className={classnames("btn-icon view-btn list-view-btn", {
                    active: activeView === "list"
                  })}
                  color="primary"
                  outline
                  onClick={() => setActiveView("list")}
                >
                  <List size={18} />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductsHeader
