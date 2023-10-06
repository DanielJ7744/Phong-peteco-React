import { Fragment, useState } from "react"
import Breadcrumbs from "@components/breadcrumbs"
import "./my-events-create.scss"
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap"
import Flatpickr from "react-flatpickr"
import "@styles/react/libs/flatpickr/flatpickr.scss"
import { Editor } from "react-draft-wysiwyg"
import "@styles/react/libs/editor/editor.scss"

const MyEventsCreate = () => {
  const [picker1, setPicker1] = useState()
  const [picker2, setPicker2] = useState()

  return (
    <Fragment>
      <Breadcrumbs breadCrumbParent="Pages" breadCrumbActive="MyEventsCreate" />
      <Row className="justify-content-center">
        <Col xs="12" sm="12" lg="9" xl="9" md="11">
          <Card>
            <CardHeader className="title0">Create event</CardHeader>
            <hr />
            <CardBody>
              <Row style={{ marginBottom: "10px" }}>
                <Col xs="6" sm="6" lg="8" xl="8" md="8">
                  <FormGroup>
                    <Label for="basicInput" className="event-name">
                      Event name
                    </Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder=""
                      size="lg"
                    />
                  </FormGroup>
                </Col>
                <Col
                  md="4"
                  lg="4"
                  xl="4"
                  sm="6"
                  xs="6"
                  style={{ marginTop: "2.5px" }}
                >
                  <FormGroup>
                    <Label for="select-default">Event type</Label>
                    <Input type="select" name="select" id="select-default">
                      <option>Choose a type</option>
                      <option>Private</option>
                      <option>Public</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col lg="3" xl="3" md="3" sm="6" xs="6">
                  <FormGroup>
                    <Label for="select-default">Start date</Label>
                    <Flatpickr
                      className="form-control"
                      value={picker1}
                      onChange={(date) => setPicker1(date)}
                      id="default-picker"
                    />
                  </FormGroup>
                </Col>

                <Col lg="3" xl="3" md="3" sm="6" xs="6">
                  <FormGroup>
                    <Label for="select-default">Start time</Label>
                    <Input type="email" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>

                <Col lg="3" xl="3" md="3" sm="6" xs="6">
                  <FormGroup>
                    <Label for="select-default">End date</Label>
                    <Flatpickr
                      className="form-control"
                      value={picker2}
                      onChange={(date) => setPicker2(date)}
                      id="default-picker"
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" xl="3" md="3" sm="6" xs="6">
                  <FormGroup>
                    <Label for="select-default">End time</Label>
                    <Input type="email" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col xl="4" lg="4" md="4" sm="4" xs="12">
                  <FormGroup>
                    <Label for="select-default">The country:</Label>
                    <Input type="email" id="basicInput" placeholder="" />
                  </FormGroup>
                </Col>
                <Col xl="4" lg="4" md="4" sm="4" xs="12">
                  <FormGroup>
                    <Label for="select-default">Region</Label>
                    <Input type="select" name="select" id="select-default">
                      <option>Pulp Fiction</option>
                      <option>Nightcrawler</option>
                      <option>Donnie Darko</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xl="4" lg="4" md="4" sm="4" xs="12">
                  <FormGroup>
                    <Label for="select-default">Town</Label>
                    <Input type="select" name="select" id="select-default">
                      <option>Pulp Fiction</option>
                      <option>Nightcrawler</option>
                      <option>Donnie Darko</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ marginBottom: "10px" }}>
                <Col>
                  <FormGroup>
                    <Label for="select-default">Address</Label>
                    <Input
                      type="email"
                      id="basicInput"
                      placeholder="ex: Street, number, block, staircase, floor, apartment"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="12">
                  <p style={{ fontWeight: "bolder", fontSize: "15px" }}>
                    Event description
                  </p>
                  <Editor />
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

export default MyEventsCreate
