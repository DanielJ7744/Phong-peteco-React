import {
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText
  } from "reactstrap"
  
  const Payment = () => {
    return (
      <Form className="list-view product-checkout">
        <div className="payment-type">
          <Card>
            <CardHeader className="flex-column align-items-start">
              <CardTitle tag="h4">Payment options</CardTitle>
              <CardText className="text-muted mt-25">
                Be sure to click on correct payment option
              </CardText>
            </CardHeader>
            <CardBody>
              <h6 className="card-holder-name my-75">John Doe</h6>
            </CardBody>
          </Card>
        </div>
      </Form>
    )
  }
  
  export default Payment