import { Fragment } from 'react'
import { Card, CardHeader, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import Breadcrumbs from '@components/breadcrumbs'
import "./transfer.scss"

const Transfer = () => {
    
  const selectStyles = {
    control: base => ({
      ...base,
      height: 48,
      borderColor: '#d8d6de',
      color: '#5e5873'
    })
  }

  const senderOptions = [
    {
      label: 'Pets',
      options: [
        { value: 'maya.7', label: 'Maya' },
        { value: 'azorel.3', label: 'Azorel' }
      ]
    },
    {
      label: 'Providers',
      options: [
        { value: 'asdsa', label: 'asdsa' },
        { value: 'alin.stan.5', label: 'Alin Stan' },
        { value: 'adapostul.azorel', label: 'Adapostul "Azorel"' }
      ]
    }
  ]

  const recipientOptions = [
    {
      label: 'Pets',
      options: [
        { value: 'maya.7', label: 'Maya' },
        { value: 'azorel.3', label: 'Azorel' }
      ]
    },
    {
      label: 'Providers',
      options: [
        { value: 'asdsa', label: 'asdsa' },
        { value: 'alin.stan.5', label: 'Alin Stan' },
        { value: 'adapostul.azorel', label: 'Adapostul "Azorel"' }
      ]
    }
  ]

  const defaultOption = { value: '', label: '' }
  
  const formatGroupLabel = data => (
    <div className='d-flex justify-content-between align-center'>
      <strong>
        <span>{data.label}</span>
      </strong>
    </div>
  )
  
  return (
    <Fragment>
      <div className='transfer container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8' className='transfer-section'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card>
                  <CardHeader className='transfer-header'>
                    <CardTitle tag='h5'>Transfer din portofel</CardTitle>
                  </CardHeader>
                  <hr className='divider' />
                  <CardBody>
                    <Form className='form transfer-form' onSubmit={e => e.preventDefault()}>
                      <Row>
                        <Col md='3'>
                          <FormGroup>
                            <Label>Expeditor</Label>
                            <Select
                              isClearable={false}
                              theme={selectThemeColors}
                              defaultValue={defaultOption}
                              options={senderOptions}
                              formatGroupLabel={formatGroupLabel}
                              className='react-select'
                              classNamePrefix='select' 
                              bsSize='lg'
                              styles={selectStyles}
                            />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <FormGroup>
                            <Label>Destinatar</Label>
                            <Select
                              isClearable={false}
                              theme={selectThemeColors}
                              defaultValue={defaultOption}
                              options={recipientOptions}
                              formatGroupLabel={formatGroupLabel}
                              className='react-select'
                              classNamePrefix='select' 
                              bsSize='lg'
                              styles={selectStyles}
                            />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <FormGroup>
                            <Label for='amount'>Valoare PetC</Label>
                            <Input type='text' id='amount' bsSize='lg' placeholder='' />
                          </FormGroup>
                        </Col>
                        <Col md='3'>
                          <FormGroup className='transfer-action'>
                            <Button.Ripple color='primary' size='lg'>
                              Trimite
                            </Button.Ripple>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

                <Button.Ripple color='secondary'>
                  Inapoi
                </Button.Ripple>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Transfer
