import {
    Row,
    Col,
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Button
  } from "reactstrap"
import { Fragment, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Circle, Home, Plus } from "react-feather"
import { getAllAdresses } from "../../../../apps/ecommerce/store/actions"
import './order-address.scss'

  const OrderAddress = (props) => {
  const history = useHistory()

  const dispatch = useDispatch()
  const store = useSelector(state => state.ecommerce.adresses)
  useEffect(() => {
    dispatch(getAllAdresses())
  }, [])

  const renderAddresses = () => {
    if (store.data.length !== 0) {
      return store.data.map((address) => {
        return (
         <div className="sub-div-address">
         <Circle
           size={18}
           style={{
             marginRight: "15px",
             marginTop: "12px",
             opacity: 1
           }}
         />
         <Home size={30} style={{ marginRight: "15px", marginTop: '4px' }} />
         <div className="billing-address-sub-div">
           <p className="address-lines"> {address.contact_first_name} {" "} {address.contact_last_name} - {address.contact_phone}</p>
           <p className="address-lines">
           {address.address}
           </p>
           <p className="address-lines">Ilfov, Volunteers</p>
         </div>
       </div>
        )
      })
   }
  }

    // ** Props
    return (
      <Form className="list-view product-checkout">
        <Card>
          <CardHeader>
            <CardTitle tag="h4" style={{ fontWeight: "700" }}>
              Address
            </CardTitle>
          </CardHeader>
          <hr />
          <CardBody>
            <Row>
              <Col xs="12">
                <div className="main-div-address">
                {renderAddresses()}
               </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12">
                <div className="address-btns">
                  <Button.Ripple color="primary" outline onClick={() => history.goBack()}>
                    Cancel
                  </Button.Ripple>
  
                  <Button.Ripple color="primary">
                    <Plus size={14} />
                    <span className="align-middle ml-25">Add Address</span>
                  </Button.Ripple>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Form>
    )
  }
  
  export default OrderAddress
  