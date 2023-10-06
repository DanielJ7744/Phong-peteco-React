import { Fragment, useState } from "react"
import "./account-edit.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardFooter
} from "reactstrap"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import { selectThemeColors } from "@utils"
import Select from "react-select"

const AccountEdit = () => {
  const [select1, setSelect1] = useState(true)
  const [select2, setSelect2] = useState(false)
  const [value, setValue] = useState()
  const countryOptions = [
    { value: "UK", label: "UK" },
    { value: "USA", label: "USA" },
    { value: "Spain", label: "Spain" },
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
    { value: "Australia", label: "Australia" }
  ]

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col xs="10">
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Edit profile</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col xs="12" xl="3" lg="3" md="12">
                  <Label for="basicInput">Sex</Label>
                  <Button.Ripple
                    className="btn-divider-c"
                    color="primary"
                    outline
                    style={{ paddingLeft: "0px", paddingRight: "0px" }}
                  >
                    <div
                      className="btn-divider"
                      style={{
                        backgroundColor: select1 ? "#7367f0" : "",
                        color: select1 ? "white" : ""
                      }}
                    >
                      <span
                        onClick={() => {
                          setSelect1(!select1)
                          setSelect2(false)
                        }}
                      >
                        {" "}
                        Mister.
                      </span>
                    </div>
                    <div
                      className="btn-divider"
                      style={{
                        backgroundColor: select2 ? "#7367f0" : "",
                        color: select2 ? "white" : ""
                      }}
                    >
                      <span
                        onClick={() => {
                          setSelect2(!select2)
                          setSelect1(false)
                        }}
                      >
                        Dna.
                      </span>
                    </div>
                  </Button.Ripple>
                </Col>
                <Col xs="12" xl="6" lg="6" md="6">
                  <FormGroup style={{}}>
                    <Label for="basicInput">Username:</Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      defaultValue="Alin Stan"
                    />
                  </FormGroup>
                </Col>
                <Col xs="12" xl="3" lg="3" md="6">
                  <FormGroup style={{}}>
                    <Label for="basicInput">Phone:</Label>
                    <PhoneInput
                      international
                      defaultCountry="RU"
                      value={value}
                      onChange={setValue}
                    />{" "}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="12" lg="5" xl="5" md="4">
                  <FormGroup>
                    <Label for="basicInput">First name:</Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      defaultValue="Alin"
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">Name</Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      defaultValue="Stan"
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="3" xl="3" md="4">
                  <FormGroup>
                    <Label for="basicInput">Date of birth:</Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      defaultValue="17-08-1986"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">The country:</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      options={countryOptions}
                      defaultValue={countryOptions[0]}
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">Region:</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      options={countryOptions}
                      defaultValue={countryOptions[0]}
                    />{" "}
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">Town</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      options={countryOptions}
                      defaultValue={countryOptions[0]}
                    />{" "}
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ border: "none", padding: "0px" }}>
              <Row className="footer-btn">
                <Button.Ripple
                  color="primary"
                  outline
                  style={{
                    marginTop: "10px"
                  }}
                >
                  Cancel
                </Button.Ripple>

                <Button.Ripple
                  color="primary"
                  style={{
                    marginTop: "10px"
                  }}
                >
                  Save
                </Button.Ripple>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AccountEdit
