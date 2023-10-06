import React from 'react'
import SocialLogin from 'react-social-login'
import { Button} from 'reactstrap'

class SocialButton extends React.Component {

    render() {
      const { children, triggerLogin, color, ...props } = this.props
      return (
        <Button.Ripple onClick={triggerLogin} color={color} {...props}>
            {children}
        </Button.Ripple>
      )
    }
}

export default SocialLogin(SocialButton)