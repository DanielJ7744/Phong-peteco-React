import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
// import avatarDefault from '@src/assets/images/static/friends/avatar/default-avatar.jpg'
import "./operations.scss"

const Operations = () => {
  const transactions = [
    {
      id: 1,
      title: 'Wallet Transfer',
      transDate: '08 January 2019, 13:33',
      amount: '+26.00 PetC'
      // avatar: avatarDefault
    }
  ]
  return (
    <Fragment>
      <div className='operations container'>
        <Row>
          <Col sm='0' md='0' lg='2'></Col>
          <Col sm='12' md='12' lg='8'>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <Card className='operations-list-box'>
                  <CardHeader className='operations-header'>
                    <CardTitle tag='h5'>Portofel - Lista operatiuni</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <ListGroup className='operations-list'>
                      {
                        transactions.map((trans, index) => {
                          return (
                            <ListGroupItem className='d-flex' key={index}>
                              <span className='mr-1'>
                                <Avatar img={trans.avatar} size='lg' />
                              </span>
                              <span className='operation-name'>
                                <Link to='#' className='operation-link'>
                                  {trans.title}
                                </Link>
                                <br />
                                <span className='operation-date'>{trans.transDate}</span>
                              </span>
                              <span className='operation-amount'>
                                {trans.amount}
                              </span>
                              <span className='operation-detail'>                                  
                                <Button.Ripple color='primary' size='sm'>
                                  Details
                                </Button.Ripple>
                              </span>
                            </ListGroupItem>
                          )
                        })
                      }                        
                    </ListGroup>
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

export default Operations
