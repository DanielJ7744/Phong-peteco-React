import {
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardText
  } from "reactstrap"
  
  const Address = (props) => {
    // ** Props
    const { stepper } = props
  
    return (
      <Form className="list-view product-checkout">
        <Card>
          <CardHeader className="flex-column align-items-start">
            <CardTitle tag="h4">Add New Address</CardTitle>
            <CardText className="text-muted mt-25">
              Be sure to check "Deliver to this address" when you have finished
            </CardText>
          </CardHeader>
          <CardBody>
            <CardText>Address</CardText>
          </CardBody>
        </Card>
      </Form>
    )
  }
  
  export default Address
  