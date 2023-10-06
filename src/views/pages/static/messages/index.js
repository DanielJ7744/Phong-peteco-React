import { Fragment } from 'react'
import Breadcrumbs from '@components/breadcrumbs'
import { Row, Col, Card, CardBody, ListGroup, ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

import { ArrowRightCircle, MessageSquare, Search } from 'react-feather'
import Avatar from '@components/avatar'
import PerfectScrollbar from 'react-perfect-scrollbar'

// import avatar1 from '@src/assets/images/static/friends/avatar/avatar2.jpg'
// import avatar2 from '@src/assets/images/static/friends/avatar/avatar1.jpg'
// import avatar3 from '@src/assets/images/static/friends/avatar/avatar3.jpg'

import "./messages.scss"

const Messages = () => {
  const chats = [
    {
      userId: 1,
      // avatar: avatar1,
      fullname: 'Andrei Cavalu',
      lastSeenDate: '1 zile in urma',
      status: 'online'
    },
    {
      userId: 2,
      // avatar: avatar2,
      fullname: 'Peligrad Bogdan',
      lastSeenDate: '26 Nov 2018',
      status: 'offline'
    },
    {
      userId: 1,
      // avatar: avatar3,
      fullname: 'Bogdy',
      lastSeenDate: '8 Oct 2018',
      status: 'away'
    }
  ]
  return (
    <Fragment>
      <div className='messages container'>
        <Row>
          <Col xl='12' lg='12' md='12' sm='12'>
            <Card>
              <CardBody className='padding-0'>
                <Row>
                  <Col xl='3' lg='3' md='4' sm='12' className='messages-left'>
                    <div className='title-messenger'>
                      <span className='title-messenger-text'>
                        Mesaje
                      </span>
                      <span className='title-messenger-action'>                                  
                        <Button.Ripple className='btn-icon rounded-circle' color='flat-secondary'>
                          <Search size={20} />
                        </Button.Ripple>
                      </span>
                    </div>
                    <PerfectScrollbar className='user-profile-sidebar-area' options={{ wheelPropagation: false }}>
                      <ListGroup className='chat-list'>
                        {
                          chats.map((chat, index) => {
                            return (
                              <ListGroupItem className='d-flex' key={index}>
                                <span className='mr-1'>
                                  <Avatar img={'chat.avatar'} status={chat.status} />
                                </span>
                                <span className='chat-name'>
                                  <Link to='#' className='chat-link'>
                                    {chat.fullname}
                                  </Link>
                                  <br />
                                  <span className='chat-lastSeenDate'>{chat.lastSeenDate}</span>
                                </span>
                                <span className='chat-action'>                                  
                                  <Button.Ripple className='btn-icon rounded-circle' color='flat-secondary'>
                                    <MessageSquare size={16} />
                                  </Button.Ripple>
                                </span>
                              </ListGroupItem>
                            )
                          })
                        }                        
                      </ListGroup>
                    </PerfectScrollbar>
                  </Col>

                  <Col xl='9' lg='9' md='8' sm='12' className='messages-right'>
                    <div className='d-flex messages-right-header'>
                      <span className='mr-1'>
                        <Avatar img={'avatar1'} status='online' />
                      </span>
                      <span className='chat-name'>
                        <Link to='#' className='chat-link'>
                          Andrei Cavalu
                        </Link>
                        <br />
                        <span className='chat-lastSeenDate'>acum un an</span>
                      </span>
                    </div>
                    <hr className='divider' />
                    <PerfectScrollbar className='chat-area' options={{ wheelPropagation: false }}>
                      <ListGroup className='messages-list'>
                                            
                      </ListGroup>
                    </PerfectScrollbar>
                    <hr className='divider' />
                    <div className='messages-right-send'>
                    <Form className='form contact-form' onSubmit={e => e.preventDefault()}>
                        <Row>
                          <Col xl='11' lg='11' md='11' sm='10' className='message-send-box'>                            
                            <FormGroup className='mb-2'>
                              <Input type='text' className='message-box' bsSize='lg' placeholder='Scrie raspunsul tau aici...' />
                            </FormGroup>
                          </Col>
                          <Col xl='1' lg='1' md='1' sm='2' className='message-send-action'>
                            <Button.Ripple className='btn-icon rounded-circle' color='primary'>
                              <ArrowRightCircle size={20} />
                            </Button.Ripple>
                          </Col>
                        </Row>
                    </Form>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  )
}

export default Messages
