// ** Custom Hooks
import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import wNumb from 'wnumb'
import classnames from 'classnames'
import { Star } from 'react-feather'
import Nouislider from 'nouislider-react'
import { Card, CardBody, Row, Col, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/noui-slider/noui-slider.scss'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import CategoriesNavMenu from './CategoriesNavMenu'

const getNextRoute = (nextRoute, item, itemKey, key, value, separator) => {
  if (item) {
      if (key === itemKey) {
          let items = item.split(",")

          if (items.includes(value)) {
              items = items.filter(itm => itm !== value)

          } else {
              items.push(value)
          }

          if (items.length > 0) {
              nextRoute += `/${itemKey}${separator}${items.join(',')}`
          }
      } else {
          nextRoute += `/${itemKey}${separator}${item}`
      }
  } else if (key === itemKey) {
      nextRoute += `/${itemKey}${separator}${value}`
  }

  return nextRoute
}

function CustomLink(props) {
  const { value, count, valueKey: key, onClick, children } = props
  const { slug, brand, price, rating } = useParams()

  let nextRoute = `/store/c/${slug}`
  nextRoute = getNextRoute(nextRoute, brand, "brand", key, value, '/')
  nextRoute = getNextRoute(nextRoute, price, "price", key, value, '-')
  nextRoute = getNextRoute(nextRoute, rating, "rating", key, value, '-')

  return (
    <div onClick={onClick}>
        <Link to={nextRoute}>
            {children}
        </Link>
    </div>
  )
}

const Sidebar = props => {
  // ** Props
  const { 
    sidebarOpen,  
    dispatch,
    getProducts,
    store
  } = props

  // ** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // ** Array of categories
  const categories = [
    {
      id: 'appliances',
      title: 'Appliances',
      defaultChecked: true
    },
    {
      id: 'audio',
      title: 'Audio'
    },
    {
      id: 'camera-camcorders',
      title: 'Camera & Camcorders'
    },
    {
      id: 'car-electronics',
      title: 'Car Electronics & Gps'
    },
    {
      id: 'cellphones',
      title: 'Cell Phones'
    },
    {
      id: 'computers',
      title: 'Computers & Tablets'
    },
    {
      id: 'health-fitness-beauty',
      title: 'Health, Fitness & Beauty'
    },
    {
      id: 'office-school',
      title: 'Office & School Supplies'
    },
    {
      id: 'tv-home-theater',
      title: 'TV & Home Theater'
    },
    {
      id: 'video-games',
      title: 'Video Games'
    }
  ]

  // ** Array of brands
  const brands = []

  // ** Array of ratings
  const ratings = []

  const prices = []

  const filtersCount = store.filters.filters_count
  if (filtersCount instanceof Array) {
    filtersCount.forEach(f => {
      if (f.filter_name === 'price') {
        prices.push(f)
      }
      if (f.filter_name === 'brand') {
        brands.push(f)
      }
      if (f.filter_name === 'rating') {
        ratings.push(f)
      }
    })
  }

  const currentActiveFilters = store.params

  return (
    <div className='sidebar-detached sidebar-left'>
      <div className='sidebar'>
        <div
          className={classnames('sidebar-shop', {
            show: sidebarOpen
          })}
        >
          <Row>
            <Col sm='12'>
              <h6 className='filter-heading d-none d-lg-block'>Filters</h6>
            </Col>
          </Row>
          <Card>
            <CardBody>
              <div className='multi-range-price'>
                <h6 className='filter-title mt-0'>Price</h6>
                <ul className='list-unstyled price-range'>
                {prices.map(price => {
                  return (
                    <CustomLink
                      valueKey={'price'}
                      value={price.filter_value}
                      count={price.count}
                    >
                      <li key={price.key} className="d-flex justify-content-between mb-1">
                        <CustomInput id={price.key}
                          name={price.filter_name}
                          type='checkbox'
                          label={`${price.filter_value} (${price.count})`}
                          defaultChecked={false}
                          checked={currentActiveFilters.price ? currentActiveFilters.price.split(',').includes(price.filter_value) : false}
                        />
                        <span>{price.count}</span>
                      </li>
                    </CustomLink>
                  )
                  })}
                </ul>
              </div>
              
             
              {/* <div className='price-slider'>
                <h6 className='filter-title'>Price Range</h6>
                <div className='price-slider'>
                  <Nouislider
                    className='range-slider mt-2'
                    direction={isRtl ? 'rtl' : 'ltr'}
                    start={[1500, 3500]}
                    connect={true}
                    tooltips={[true, true]}
                    format={wNumb({
                      decimals: 0
                    })}
                    range={{
                      min: 51,
                      max: 5000
                    }}
                  />
                </div>
              </div> */}
              <div id='product-categories'>
                <h6 className='filter-title'>Categories</h6>
                <CategoriesNavMenu />
                {/* <ul className='list-unstyled categories-list'>
                  {categories.map(category => {
                    return (
                      <li key={category.id}>
                        <CustomInput
                          type='radio'
                          id={category.id}
                          label={category.title}
                          name='category-radio'
                          defaultChecked={category.defaultChecked}
                        />
                      </li>
                    )
                  })}
                </ul> */}
              </div>
              <div className='brands'>
                <h6 className='filter-title'>Brands</h6>
                <ul className='list-unstyled brand-list' style={{maxHeight: '400px', overflowY: 'auto'}}>
                  {brands.map(brand => {
                    return (
                      <CustomLink
                        valueKey={'brand'}
                        value={brand.filter_value}
                        count={brand.count}
                      >
                        <li key={brand.id}>
                          <CustomInput
                            type='checkbox'
                            className="text-capitalize"
                            label={brand.filter_value.replaceAll('-', ' ')}
                            defaultChecked={false}
                            checked={currentActiveFilters.brand ? currentActiveFilters.brand.split(',').includes(brand.filter_value) : ''}
                          />
                          <span>{brand.count}</span>
                        </li>
                      </CustomLink>
                    )
                  })}
                </ul>
              </div>
              <div id='ratings'>
                <h6 className='filter-title'>Ratings</h6>
                {ratings.map(item => {
                  return (
                    <div key={item.count} className='ratings-list'>
                      <a href='/' onClick={e => e.preventDefault()}>
                        <ul className='unstyled-list list-inline'>
                          {new Array(5).fill().map((listItem, index) => {
                            const itemRating = item.filter_value.split('-')[0]
                            return (
                              <li key={index} className='ratings-list-item mr-25'>
                                <CustomLink
                                  valueKey={'rating'}
                                  value={item.filter_value}
                                  count={item.count}
                                >
                                <Star
                                  className={classnames({
                                    'filled-star': index + 1 <= itemRating,
                                    'unfilled-star': index + 1 > itemRating
                                  })}
                                  
                                />
                                </CustomLink>
                              </li>
                            )
                          })}
                        </ul>
                      </a>
                      <div className='stars-received'>{item.count}</div>
                    </div>
                  )
                })}
              </div>
              <div id='clear-filters'>
                <Button.Ripple color='primary' block>
                  Clear All Filters
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
