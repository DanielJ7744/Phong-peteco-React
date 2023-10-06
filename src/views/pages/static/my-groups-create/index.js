import { Fragment } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./my-groups-create.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"

const MyGroupsCreate = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="MyGroupsCreate" />
      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="9">
          <Card>
            <CardHeader>
              <CardTitle className="title0">Create group</CardTitle>
            </CardHeader>
            <hr />
            <CardBody>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs="12" sm="12" lg="8" xl="8" md="8">
                  <FormGroup>
                    <Label for="basicInput" className="event-name">
                      Group name
                    </Label>
                    <Input type="email" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>
                <Col
                  md="4"
                  lg="4"
                  xl="4"
                  sm="12"
                  xs="12"
                  style={{ marginTop: "2.5px" }}
                >
                  <FormGroup>
                    <Label for="select-default">Group type</Label>
                    <Input type="select" name="select" id="select-default">
                      <option>Choose a type</option>
                      <option>Private</option>
                      <option>Public</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormGroup>
                    <Label for="basicInput" className="event-name">
                      Group name
                    </Label>
                    <Input
                      type="textarea"
                      id="basicInput"
                      placeholder=""
                      
                      className="myInput"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <div className="button-group" style={{ marginTop: "20px" }}>
                <Button.Ripple id="cancel-btn" color="primary" outline>
                  Back
                </Button.Ripple>

                <Button.Ripple color="primary">Save</Button.Ripple>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default MyGroupsCreate
