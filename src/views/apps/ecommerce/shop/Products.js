import { Fragment } from 'react'
import ProductCards from './ProductCards'
import ProductsHeader from './ProductsHeader'
import classnames from 'classnames'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ProductsPlaceholder from './ProductsPlaceholder'

import './Products.scss'

const ProductsPage = props => {
  // ** Props
  const {
    activeView,
    setActiveView,
    store,
    sidebarOpen,
    getProducts,
    dispatch,
    addToCart,
    addToWishlist,
    getCartItems,
    deleteWishlistItem,
    deleteCartItem,
    setSidebarOpen,
    addItemsToWishlistList,
    deleteItemsFromWishlistList
  } = props

  const currentActivePage = Number(store.params.page)

  // ** Handles pagination
  const handlePageChange = val => {
    if (val === 'next') {
      dispatch(getProducts({ ...store.params, page: currentActivePage + 1 }))
    } else if (val === 'prev') {
      dispatch(getProducts({ ...store.params, page: currentActivePage - 1 }))
    } else {
      dispatch(getProducts({ ...store.params, page: val }))
    }
  }

  const getNextPageRoute = (pageNr) => {
    const { slug, brand, price, rating } = useParams()

    let nextRoute = `/store/c/${slug}`

    if (brand) {
        nextRoute = `${nextRoute}/brand/${brand}`
    }
    if (price) {
        nextRoute = `${nextRoute}/price-${price}`
    }
    if (rating) {
        nextRoute = `${nextRoute}/rating-${rating}`
    }
    if (pageNr !== 1) {
        nextRoute = `${nextRoute}/p${pageNr}`
    }

    return nextRoute
  }

  // ** Render pages
  const renderPageItems = () => {
    const arrLength = store.filters.pagination.total_pages
    const arr = new Array(Math.trunc(arrLength)).fill()

    const paginationItems = [1]

    if (!paginationItems.includes(currentActivePage - 1) && currentActivePage - 1 > 0) {
      if (!paginationItems.includes(currentActivePage - 2)) {
        paginationItems.push('dots')
      }
      paginationItems.push(currentActivePage - 1)
    }

    if (!paginationItems.includes(currentActivePage)) {
      paginationItems.push(currentActivePage)
    }

    if (!paginationItems.includes(currentActivePage + 1) && currentActivePage + 1 < arrLength) {
      paginationItems.push(currentActivePage + 1)
    }

    if (!paginationItems.includes(arrLength)) {
      if (!paginationItems.includes(arrLength - 1)) {
        paginationItems.push('dots')
      }
      paginationItems.push(arrLength)
    }

    if (arrLength > 10) {
      return paginationItems.map((item, index) => {
        if (item === 'dots') {
          return (
            <PaginationItem
              key={`empty-${index}`}
              active={false}
              onClick={() => {}}
            >
              <PaginationLink href="" onClick={e => e.preventDefault()}>
                ...
              </PaginationLink>
            </PaginationItem>
          )
        }

        return (
          <PaginationItem
            key={item}
            active={currentActivePage === item}
          >
            <PaginationLink href="" onClick={e => e.preventDefault()}>
              <Link className={classnames({ "product-active": currentActivePage === item })} to={getNextPageRoute(item)}>
                  {item}
              </Link>
            </PaginationLink>
          </PaginationItem>
        )
      })
    }

    return arr.map((item, index) => {
      return (
        <PaginationItem
          key={index}
          active={currentActivePage === index + 1}
        >
          <PaginationLink href="" onClick={e => e.preventDefault()}>
            <Link className={classnames({ "product-active": currentActivePage === index + 1 })} to={getNextPageRoute(index + 1)}>
              {index + 1}
            </Link>
          </PaginationLink>
        </PaginationItem>
      )
    })
  }

  // ** handle next page click
  const handleNext = () => {
    if (currentActivePage !== Number(store.totalProducts) / store.products.length) {
      handlePageChange('next')
    }
  }

  return (
    <div className='content-detached content-right'>
      <div className='content-body'>
        <ProductsHeader
          store={store}
          dispatch={dispatch}
          activeView={activeView}
          getProducts={getProducts}
          setActiveView={setActiveView}
          setSidebarOpen={setSidebarOpen}
        />
        <div
          className={classnames('body-content-overlay', {
            show: sidebarOpen
          })}
          onClick={() => setSidebarOpen(false)}
        ></div>
        {/* <ProductsSearchbar dispatch={dispatch} getProducts={getProducts} store={store} /> */}
        {store.products.length ? (
          <Fragment>
            <ProductCards
              store={store}
              dispatch={dispatch}
              addToCart={addToCart}
              activeView={activeView}
              products={store.products}
              getProducts={getProducts}
              getCartItems={getCartItems}
              addToWishlist={addToWishlist}
              deleteCartItem={deleteCartItem}
              deleteWishlistItem={deleteWishlistItem}
              addItemsToWishlistList={addItemsToWishlistList}
              deleteItemsFromWishlistList={deleteItemsFromWishlistList}
            />
            <Pagination className='d-flex justify-content-center'>
              <PaginationItem
                disabled={currentActivePage === 1}
              >
                <PaginationLink href="" onClick={e => e.preventDefault()}>
                  <Link to={getNextPageRoute(currentActivePage - 1)}>
                    {"<"}
                  </Link>
                </PaginationLink>
              </PaginationItem>
              {renderPageItems()}
              <PaginationItem
                // className='next-item'
                disabled={currentActivePage === store.filters.pagination.total_pages}
              >
                <PaginationLink href="" onClick={e => e.preventDefault()}>
                  <Link to={getNextPageRoute(currentActivePage + 1)}>
                    {">"}
                  </Link>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </Fragment>
        ) : (
         <ProductsPlaceholder />
        )}
      </div>
    </div>
  )
}

export default ProductsPage
