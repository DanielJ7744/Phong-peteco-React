import { Fragment, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./store-cart.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Button,
  Collapse
} from "reactstrap"
import {ChevronDown} from 'react-feather'

const StoreCart = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Fragment>
      <Breadcrumbs
        breadCrumbTitle="StoreCart"
        breadCrumbParent="Pages"
        breadCrumbActive="StoreCart"
      />
      <Row className='justify-content-center'>
        <Col xs="12" sm='12' lg='11' xl='11' md='12'>
          <h3>My basket</h3>
        </Col>
      </Row>

      <Row className='justify-content-center'>
        <Col xs="12" sm='12' lg='7' xl='7' md='7' >
          <Card>
            <CardHeader>
              <CardTitle> Calculate the cost of delivery </CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <FormGroup>
                <Label for="select-lg">Select the county</Label>
                <Input type="select" name="select" bsSize="lg" id="select-lg">
                  <option>Germen</option>
                  <option>UK</option>
                  <option>Romania</option>
                </Input>
              </FormGroup>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <Row>
                <Col xs="9" sm='9' md='9' xl='9' lg='9'>
                  <div
                  className='img-card'
                    
                  >
                    <img src="https://imgs.peteco.ro/images/products/bd/76/bd762ad8425e-cart-default.jpg" className='product-img' />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        marginLeft: "20px"
                      }}
                    >
                      <p style={{}}> Silon Club C 10/32 Black collar </p>
                      <Input
                        type="select"
                        name="select"
                        bsSize="sm"
                        id="select-lg"
                        style={{ width: "50%" }}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Input>
                    </div>
                  </div>
                </Col>

                <Col xs="3" sm='3' md='3' xl='3' lg='3'>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      flexDirection: "column"
                    }}
                  >
                    <p>11,237 Lei</p>
                    <p>Remove</p>
                  </div>
                </Col>

                <Col xs="12">
                <hr />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                      flexDirection: "column"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <p style={{ marginRight: "40px" }}>Total products:</p>
                      <p>1</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <p style={{ marginRight: "40px" }}>Total delivery:</p>
                      <p>0 Lei</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <p style={{ marginRight: "40px" }}>Subtotal:</p>
                      <p>401 Lei</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

      
       <Col xs='12' sm='12' lg='4' xl='4' md='5'>
       <div className='checkout-options'>
        <Card>
          <CardBody>

            <div className='price-details'>
              <h6 className='price-title'>Add order</h6>
              <hr style={{ marginBottom: '20px'}} />
              <ul className='list-unstyled'>
                <li className='products-price'>
                  <div className='total-products'>Total products:
</div>
                  <div className='total-products-price'>14 Lei</div>
                </li>
             <hr />

             <li className='products-price'>
                  <div className='total-products'>Total delivery:
</div>
                  <div className='total-products-price'>15 Lei</div>
                </li>
     <hr />
     <li className='products-price'>
                  <div className='total'>Total:

</div>
                  <div className='total-price'>29 Lei </div>
                </li>
     
     <hr />


              </ul>
             
       
              <Button.Ripple
                color='primary'
                classnames='btn-next place-order'
                block
                id='order-btn'
                
             
              >
               Complete the Order
              </Button.Ripple>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline'}}>
                <p className='discount-code'>Do you have a discount code? </p>
                <ChevronDown  size={15} onClick={toggle} />
              </div>
      
              <Collapse isOpen={isOpen}>

<Row className='justify-content-center'>
  <Col xs='12' lg='8' xl='8' md='12' sm='12'>
  <FormGroup>
          <Label for="basicInput">Apply discount code:</Label>
          <Input type="email" id="basicInput" placeholder="" />

  </FormGroup>

  </Col>
<Col xs='12' lg='4' xl='4' md='12' sm='12' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<Button.Ripple
                color='primary'
               
                style={{ marginTop: '10px'}}
              >
              Apply
              </Button.Ripple>
</Col>
</Row>
      </Collapse>
       
            </div>
          </CardBody>
        </Card>
      </div>
   
       </Col>
   
      </Row>
    </Fragment>
  )
}

export default StoreCart
