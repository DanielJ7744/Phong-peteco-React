import { Fragment, useState, useEffect } from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import InfoTabContent from './InfoTabContent'
import Breadcrumbs from '@components/breadcrumbs'
import SocialTabContent from './SocialTabContent'
import GeneralTabContent from './GeneralTabContent'
import PasswordTabContent from './PasswordTabContent'
import NotificationsTabContent from './NotificationsTabContent'
import MyAccount from './MyAccount/MyAccount'
import { Row, Col, TabContent, TabPane, Card, CardBody } from 'reactstrap'

import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/pages/page-account-settings.scss'
import Orders from './Orders/Orders'
import { useHistory } from 'react-router'

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('1'),
    [data, setData] = useState(null)

  const history = useHistory()

  const toggleTab = tabLink => {
    /* eslint-disable */
    setActiveTab(tabLink)
    history.push(tabLink)
  }

  useEffect(() => {
    axios.get('/account-setting/data').then(response => setData(response.data))
  }, [])

  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Account Settings' breadCrumbParent='Pages' breadCrumbActive='Account Settings' />
      {data !== null ? (
        <Row>
          <Col className='mb-2 mb-md-0' md='3'>
            <Tabs activeTab={activeTab} toggleTab={toggleTab} />
          </Col>
          <Col md='9'>
            <Card>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                    <MyAccount data={''} />
                  </TabPane>
                  {/* <TabPane tabId='2'>
                    <Orders to='/account/edit'/>
                  </TabPane>
                  <TabPane tabId='3'>
                    <GeneralTabContent data={data.general} />
                  </TabPane>
                  <TabPane tabId='4'>
                    <PasswordTabContent />
                  </TabPane>
                  <TabPane tabId='5'>
                    <InfoTabContent data={data.info} />
                  </TabPane>
                  <TabPane tabId='6'>
                    <SocialTabContent data={data.social} />
                  </TabPane>
                  <TabPane tabId='7'>
                    <NotificationsTabContent data={data.notification} />
                  </TabPane> */}
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </Fragment>
  )
}

export default AccountSettings
