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
  import { Circle, Home, Plus } from "react-feather"
  
  const Address = (props) => {
    // ** Props
    const { stepper } = props
  
    return (
      <Form className="list-view product-checkout">
        <Card>
          <CardHeader className="flex-column align-items-start">
            <CardTitle tag="h4" style={{ fontWeight: "700" }}>
              Address
            </CardTitle>
          </CardHeader>
          <hr />
          <CardBody>
            <Row>
              <Col xs="12">
                <div className="main-div-address">
                  <div className="sub-div-address">
                    <Circle
                      size={18}
                      style={{
                        marginRight: "15px",
                        marginTop: "6px",
                        opacity: 1
                      }}
                    />
                    <Home size={30} style={{ marginRight: "15px" }} />
                    <div className="billing-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                  <div className="sub-div-address">
                    <Circle
                      size={18}
                      style={{
                        marginRight: "15px",
                        marginTop: "6px",
                        opacity: 1
                      }}
                    />
                    <Home size={30} style={{ marginRight: "15px" }} />
                    <div className="billing-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                  <div className="sub-div-address">
                    <Circle
                      size={18}
                      style={{
                        marginRight: "15px",
                        marginTop: "6px",
                        opacity: 1
                      }}
                    />
                    <Home size={30} style={{ marginRight: "15px" }} />
                    <div className="billing-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                  <div className="sub-div-address">
                    <Circle
                      size={18}
                      style={{
                        marginRight: "15px",
                        marginTop: "6px",
                        opacity: 1
                      }}
                    />
                    <Home size={30} style={{ marginRight: "15px" }} />
                    <div className="billing-address-sub-div">
                      <p className="address-lines">Alin Stan - 0721012653</p>
                      <p className="address-lines">
                        Nord City Tower, Bd. Pipera 1 / VII, Et. 9
                      </p>
                      <p className="address-lines">Ilfov, Volunteers</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs="12">
                <div className="address-btns">
                  <Button.Ripple color="primary" outline>
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
  
  export default Address
  