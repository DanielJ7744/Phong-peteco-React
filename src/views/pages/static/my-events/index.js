import { Fragment } from 'react'
import { Card, CardHeader, CardTitle, CardBody, CardText, Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'
import Breadcrumbs from '@components/breadcrumbs'
import "./my-events.scss"

const MyEvents = () => {
  const event = {
    id: 1,
    // eventThumb: thumb,
    eventTitle: 'sdf'
  }
  return (
    <Fragment>
      <div className='my-events container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card>
                  <CardHeader className='my-events-header'>
                    <CardTitle tag='h5'>Evenimentele mele</CardTitle>                
                    <Button.Ripple color='primary'>
                      Creeaza eveniment
                    </Button.Ripple>
                  </CardHeader>
                </Card>
              </Col>

              <Col lg='6' md='6' sm='6'>
                <Card>
                  <CardBody className='event-item'>
                    <div className='event-thumb'>
                      <Link to='#' className='event-link'>
                        <img src={'event.eventThumb'} alt='thumb-img' />
                      </Link>
                    </div>
                    <div className='event-title'>
                      <Link to='#' className='event-link'>
                        <span>{event.eventTitle}</span>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default MyEvents
