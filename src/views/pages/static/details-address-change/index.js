import { Fragment, useRef, useState } from "react"
import Wizard from "@components/wizard"
// ** Steps
import OrderDetails from "./steps/OrderDetails"
import Address from "./steps/Address"
import Payment from "./steps/Payment"
import { ShoppingCart, Home, CreditCard } from "react-feather"
import { Row, Col } from "reactstrap"
import "./details-address-change.scss"

const DetailsAddressChange = () => {

   // ** Ref & State
   const ref = useRef(null)
   const [stepper, setStepper] = useState(null)
   const steps = [
    {
      id: "Address",
      title: "Address",
      subtitle: "",
      icon: <Home size={18} />,
      content: <Address stepper={stepper} />
    },
     {
       id: "cart",
       title: "Order details",
       subtitle: "",
       icon: <ShoppingCart size={18} />,
       content: <OrderDetails stepper={stepper} />
     },

     {
       id: "payment",
       title: "Order placed successfully",
       subtitle: "",
       icon: <CreditCard size={18} />,
       content: <Payment stepper={stepper} />
     }
   ]
  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Wizard
            ref={ref}
            steps={steps}
            className="checkout-tab-steps"
            instance={(el) => setStepper(el)}
            options={{
              linear: false
            }}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default DetailsAddressChange
