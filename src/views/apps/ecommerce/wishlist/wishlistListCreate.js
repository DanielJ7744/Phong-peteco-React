import { Fragment, useState } from "react"
import {
  Row,
  Col,
  Card,
  CardHeader,
  InputGroup, InputGroupAddon,
  CustomInput,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addWishlistList } from "../store/actions"
import './wishlists.scss'

function CreateWishlistList() {
  const history = useHistory()

  const [wishlistName, setWishlistName] = useState("")
  const [wishlistKind, setWishlistKind] = useState("Publica")

  const dispatch = useDispatch()

  const createWishlist = () => {
    if (wishlistName) {
      const kind = wishlistKind === "Privata" ? "Y" : "P"
      dispatch(addWishlistList(wishlistName, kind))
      history.push("/account/store/wishlists")
    }
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="11" xl="11" md="11">
          <Card>
            <CardHeader style={{ paddingBottom: 0 }}>
              <h3 style={{ marginBottom: '14px' }}>Add new Wishlist</h3>
            </CardHeader>
            <CardBody>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs="12" sm="12" lg="12" xl="6" md="12">
                  <FormGroup>
                    <Label for="basicInput" className="event-name">
                      Wishlist Name
                    </Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      size="md"
                      onChange={(e) => setWishlistName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col
                  md="6"
                  lg="6"
                  xl="3"
                  sm="12"
                  xs="12"
                >
                  <FormGroup>
                    <Label for="select-default"> Visibility </Label>
                    <Input
                      type="select"
                      name="select"
                      id="select-default"
                      size="md"
                      onChange={(e) => setWishlistKind(e.target.value)}
                    >
                      <option>Publica</option>
                      <option>Privata</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col
                  md="6"
                  lg="6"
                  xl="3"
                  sm="12"
                  xs="12"
                >

                  <FormGroup>
                    <Label for="select-default"> Want next products to be added here? </Label>
                    <InputGroup id='radio-in-wishlist' className='mb-1'>
                 <InputGroupAddon addonType='prepend'>
                <CustomInput
                      type="radio"
                      id="exampleCustomRadio"
                      className='radio1-in-wishlist'
                      name="customRadio"
                      inline
                      defaultChecked
                      
                    />
              </InputGroupAddon>
              <Input
                      type="select"
                      name="select"
                      id="select-default"
                      size="md"
                      onChange={(e) => setWishlistKind(e.target.value)}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </Input>
                    </InputGroup>
                  </FormGroup>
                </Col>
             
              </Row>

              <div
                className="button-group"
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                 <Button
                 className='cancel-wishlist-btn'
                  onClick={() => history.push("/account/store/wishlists")}
                  color="light">
                 Back
                </Button>
                <Button.Ripple color="primary" onClick={() => createWishlist()}>
                  Save Wishlist
                </Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CreateWishlistList
