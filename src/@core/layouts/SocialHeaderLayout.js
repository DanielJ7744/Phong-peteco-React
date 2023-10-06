// ** React Imports
import { useEffect, useState } from 'react'

// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import LeftBarTabs from '../../views/pages/account-settings/LeftBarTabs'
import { useHistory } from 'react-router'
import HorizontalLayout from './HorizontalLayout'
import ProfileHeader from '../../views/social/profile/ProfileHeader'
import { Row, Col } from 'reactstrap'

const SocialHeaderLayout = ({ children, routerProps, ...rest }) => {
    // ** States
    const [isMounted, setIsMounted] = useState(false)

    //** ComponentDidMount
    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <HorizontalLayout wrapperClass="ml-0 mr-0 p-0">
            <div className='app-content content'>
                <div className="content-wrapper container p-0 animate__animated animate__fadeIn">
                    <div className='content-wrapper'>
                        <div className='content-body'>
                            <Row>
                                <Col sm='12'>
                                    <ProfileHeader />
                                </Col>
                            </Row>
                            <div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HorizontalLayout>
    )
}

export default SocialHeaderLayout
