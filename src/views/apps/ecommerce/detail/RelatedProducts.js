// ** React Imports
import { Fragment, useEffect } from 'react'
// ** Third Party Components
import classnames from 'classnames'
import { CardText, Row, Col, Button, Card, CardBody } from 'reactstrap'
import SwiperCore, { Navigation } from 'swiper'
import { Link } from 'react-router-dom'
import {  Star, ShoppingCart } from "react-feather"

import { getRelatedProduct } from '../store/actions'


// ** Styles
import '@styles/react/libs/swiper/swiper.scss'
import './productDetails.scss'

const RelatedProducts = props => {
  SwiperCore.use([Navigation])
  
  const { dispatch, relatedProduct } = props

  useEffect(() => {
    dispatch(getRelatedProduct())
  }, [])
  
  // ** Related products Slides
  const slides = relatedProduct.data

  if (!slides) {
    return null
  }

  // ** Slider params
  const params = {
    className: 'swiper-responsive-breakpoints swiper-container px-4 py-2',
    slidesPerView: 5,
    spaceBetween: 55,
    navigation: true,
    breakpoints: {
      1600: {
        slidesPerView: 4,
        spaceBetween: 55
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 55
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 55
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 55
      }
    }
  }

  return (
    <Fragment>

  <Row className="justify-content-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: '11px'
          }}
        >
          <h3 className="similar-products-h">Similar products </h3>
          <p>People who boiught this also bought these items </p>
        </div>
      </Row>

      <Row className="justify-content-center" style={{ paddingLeft: '2%', paddingRight: '2%' }}>
      
              {slides.map(slide => {
           const isInStock = slide.out_of_stock === "N"
           const InStock = isInStock ? "In stock" : "Out of stock"
          return (
            <Col sm="6" xs="9" lg="3" xl="2" md="4">
            <Link to={`${slide.slug}`} onClick={e => e.preventDefault()}>
              <section>
                <Card className="ecommerce-card">
                  <div className="item-img text-center mx-auto">
                    <Link>
                      <img
                        src={slide.cover['medium-default']}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          marginTop: "10px"
                        }}
                      />
                    </Link>
                  </div>
                  <CardBody style={{ textAlign: "center" }}>
                    <div className="item-wrapper">
                      <div className="item-rating">
                        <ul className="unstyled-list list-inline">
                        {new Array(5).fill().map((listItem, index) => {
                      return (
                        <li key={index} className='ratings-list-item mr-25'>
                          <Star
                            className={classnames({
                              'filled-star': index + 1 <= slide.rating,
                              'unfilled-star': index + 1 > slide.rating
                            })}
                          />
                        </li>
                      )
                    })}
                      </ul>
                      </div>
                      <div className="item-cost">
                        <h6
                          className="item-price"
                          style={{ fontSize: "14px", fontWeight: "500", height: '33px', overflow: 'hidden' }}
                        >
                         {slide.name}
                        </h6>
                      </div>
                    </div>
                    <div className="item-name">
                      <Link style={{ color: "#28c76f" }}>{InStock}</Link>
                    </div>
                    <CardText
                      className="item-description"
                      style={{ fontSize: "17px", marginTop: "5px" }}
                    >
                     {slide.price} RON
                    </CardText>
                  </CardBody>
                  <div className="item-options text-center">
                    <Button
                      style={{ width: "100%" }}
                      color="primary"
                      className="btn-cart move-cart"
                      id='related-product-btn'
                    >
                      <ShoppingCart className="mr-50" size={19} />
                      <span>Add To Cart</span>
                    </Button>
                  </div>
                </Card>
              </section>
              </Link>
           </Col>    
            )
        })}
             
 </Row>
    </Fragment>
  )
}

export default RelatedProducts

