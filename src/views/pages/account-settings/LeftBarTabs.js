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

const LeftBarTabs = (props) => {
    const { children } = props
    const history = useHistory()

    const [activeTab, setActiveTab] = useState(history.location.pathname)


    const toggleTab = tabLink => {
        setActiveTab(tabLink)
        history.push(tabLink)
    }

    return (
        <Fragment>
            <Row>
                <Col className='mb-2 mb-md-0' md='3'>
                    <Tabs activeTab={activeTab} toggleTab={toggleTab} />
                </Col>
                <Col md='9'>
                    <Card>
                        <CardBody>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={history.location.pathname}>
                                    {children}
                                </TabPane>
                            </TabContent>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default LeftBarTabs
