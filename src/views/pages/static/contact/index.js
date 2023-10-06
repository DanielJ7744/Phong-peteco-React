import { Fragment } from 'react'
import { CardText, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import Breadcrumbs from '@components/breadcrumbs'
import contactBackground from '../../../../assets/images/contact/contact-bg3.png'
import ReCAPTCHA from 'react-google-recaptcha'
import "./contact.scss"

const questionSubjects = [
  { value: '1', label: 'Peteco intrebari generale' },
  { value: '2', label: 'Peteco intrebari despre comenzi' },
  { value: '3', label: 'Peteco informatii despre piata' }
]

const selectStyles = {
  control: base => ({
    ...base,
    height: 48
  })
}

// SET YOUR SITE KEY FOR GOOGLE RECAPTCHA
const recaptcha_site_key = '6LcjmaAaAAAAAIPR0D-Rt6he0yEMi4e0LBOZvDlG'

const Contact = () => {
 
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Contact' breadCrumbParent='Pages' breadCrumbActive='Contact' />
      <div className='contact-section container'>
        <Row>
          <Col md='12' lg='10' sm='12' className='align-center'>
            <div className='contact-form-wrap'>
              <div className='contact-form-thumb' style={{ backgroundImage: `url(${contactBackground})` }}>
                <h2 className='title'>Contacteaza-ne</h2>
                <CardText className='m-auto subtitle'>
                  Ai intrebari generale despre Peteco? Trimite-ne un mesaj si iti vom raspunde in cel mai scurt timp!
                </CardText>
                <CardText className='m-auto'>
                  0744 PETECO
                  <br></br>
                  0744 738 326
                </CardText>
              </div>
              <Form className='form contact-form' onSubmit={e => e.preventDefault()}>
                <Row>
                  <Col md='6'>
                    <FormGroup className='mb-2'>
                      <Label for='firstname'>Prenume</Label>
                      <Input type='text' id='firstname' bsSize='lg' placeholder='' />
                    </FormGroup>
                  </Col>
                  <Col md='6'>
                    <FormGroup className='mb-2'>
                      <Label for='lastname'>Nume</Label>
                      <Input type='text' id='lastname' bsSize='lg' placeholder='' />
                    </FormGroup>
                  </Col>
                  <Col md='6'>
                    <FormGroup className='mb-2'>
                      <Label for='phone'>Telefon</Label>
                      <Input type='text' id='phone' bsSize='lg' placeholder='07xxxxxxxx' />
                    </FormGroup>
                  </Col>
                  <Col md='6'>
                    <FormGroup className='mb-2'>
                      <Label for='email'>Adresa de email</Label>
                      <Input type='email' id='email' bsSize='lg' placeholder='' />
                    </FormGroup>
                  </Col>
                  <Col md='12'>
                    <FormGroup className='mb-2'>
                      <Label>Subiectul intrebarii</Label>
                      <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        defaultValue={questionSubjects[0]}
                        options={questionSubjects}
                        isClearable={false}
                        styles={selectStyles}
                      />
                    </FormGroup>
                  </Col>
                  <Col md='12'>
                    <FormGroup className='mb-2'>
                      <Label>Mesajul tau</Label>
                      <Input type='textarea' name='message' id='message' rows='5' placeholder='' />
                    </FormGroup>
                  </Col>
                  <Col md='12'>
                    <FormGroup className='mb-2'>
                      <ReCAPTCHA sitekey={recaptcha_site_key} />
                    </FormGroup>
                  </Col>
                  <Col md='6'>
                    <Button.Ripple color='primary' size='lg' block>
                      Trimite mesaj
                    </Button.Ripple>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Contact
