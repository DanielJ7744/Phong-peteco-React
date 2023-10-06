import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap'
import "./account-documents.scss"

const AccountDocuments = () => {
 
  return (
    <Fragment>
      <div className='account-documents container'>
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle tag='h5'>Documentele mele</CardTitle>
              </CardHeader>
              <hr className='divider' />
              <CardBody>
                <CardText>Nu ati incarcat niciun document.</CardText>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle tag='h5'>Incarca un document</CardTitle>
              </CardHeader>
              <hr className='divider' />
              <CardBody>
                <Form className='form' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col sm='12' md='12'>
                      <FormGroup className='mb-2'>
                        <Label for='filename'>Nume fisher</Label>
                        <Input type='text' id='filename' bsSize='lg' placeholder='' />
                      </FormGroup>
                    </Col>
                    <Col sm='12' md='12'>
                      <FormGroup className='mb-2'>
                        <Label for='fileupload'>Fister</Label>
                        <Input type='file' className='input-file-lg' id='fileupload' placeholder='' />
                      </FormGroup>
                    </Col>
                    <Col sm='12' md='12' className='align-right'>
                      <Button.Ripple color='primary'>
                        Upload
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default AccountDocuments
