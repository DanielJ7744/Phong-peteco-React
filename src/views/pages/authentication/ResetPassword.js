import { Link, useHistory, useLocation } from 'react-router-dom'
import { ChevronLeft, Coffee } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import queryString from 'query-string'
import { useEffect, useState, Fragment } from 'react'
import useJwt from '@src/auth/jwt/useJwt'
import { useForm } from 'react-hook-form'
import classnames from 'classnames'
import { toast, Slide } from 'react-toastify'
import Avatar from '@components/avatar'
import { isObjEmpty } from '@utils'

const ToastError = ({ error}) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Error</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>{error}</span>
    </div>
  </Fragment>
)

const ResetPassword = () => {
  const location = useLocation()
  const history = useHistory()
  const [token, setToken] = useState("")

  const { register, errors, handleSubmit, trigger } = useForm()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [valErrors, setValErrors] = useState({})
 
  useEffect(() => {
    const searchQuery = queryString.parse(location.search)
    if (!searchQuery.token) {
      history.push("/")
      return
    }
    setToken(searchQuery.token)

  }, [])

  const onSubmit = () => {
    if (isObjEmpty(errors)) {
      if (password !== confirmPassword) {
        toast.error(
          <ToastError error={"password and confirm password are not same"} />,
          { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        return
      }
      useJwt
        .resetPassword({ password, forgot_email_verification_code:token })
        .then(res => {
            setValErrors({})
            history.push('/')
            console.log(res)
          }
        )
        .catch(err =>  {
          console.log(err)
          if (err.response) toast.error(
           <ToastError error={err.response.data.error.message} />,
           { transition: Slide, hideProgressBar: true, autoClose: 2000 }
           )
         })
    }
  }

  return (
    <div className='auth-wrapper auth-v1 px-2'>
      <div className='auth-inner py-2'>
        <Card className='mb-0'>
          <CardBody>
            <Link className='brand-logo' to='/' >
              <svg viewBox='0 0 139 95' version='1.1' height='28'>
                <defs>
                  <linearGradient x1='100%' y1='10.5120544%' x2='50%' y2='89.4879456%' id='linearGradient-1'>
                    <stop stopColor='#000000' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                  <linearGradient x1='64.0437835%' y1='46.3276743%' x2='37.373316%' y2='100%' id='linearGradient-2'>
                    <stop stopColor='#EEEEEE' stopOpacity='0' offset='0%'></stop>
                    <stop stopColor='#FFFFFF' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                  <g id='Artboard' transform='translate(-400.000000, -178.000000)'>
                    <g id='Group' transform='translate(400.000000, 178.000000)'>
                      <path
                        d='M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z'
                        id='Path'
                        className='text-primary'
                        style={{ fill: 'currentColor' }}
                      ></path>
                      <path
                        d='M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z'
                        id='Path'
                        fill='url(#linearGradient-1)'
                        opacity='0.2'
                      ></path>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.049999997'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325'
                      ></polygon>
                      <polygon
                        id='Path-2'
                        fill='#000000'
                        opacity='0.099999994'
                        points='69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338'
                      ></polygon>
                      <polygon
                        id='Path-3'
                        fill='url(#linearGradient-2)'
                        opacity='0.099999994'
                        points='101.428699 0 83.0667527 94.1480575 130.378721 47.0740288'
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
              <h2 className='brand-text text-primary ml-1'>Vuexy</h2>
            </Link>
            <CardTitle tag='h4' className='mb-1'>
              Reset Password 🔒
            </CardTitle>
            <CardText className='mb-2'>Your new password must be different from previously used passwords</CardText>
            <Form className='auth-reset-password-form mt-2' onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Label className='form-label' for='reset-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  value={password}
                  id='reset-password'
                  name='reset-password'
                  className='input-group-merge'
                  placeholder=" "
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['reset-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='reset-confirm-password'>
                  Confirm Password
                </Label>
                <InputPasswordToggle
                  value={confirmPassword}
                  id='reset-confirm-password'
                  name='reset-confirm-password'
                  className='input-group-merge'
                  placeholder=" "
                  onChange={e => setConfirmPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['reset-confirm-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <Button.Ripple type="submit" color='primary' block>
                Set New Password
              </Button.Ripple>
            </Form>
            <p className='text-center mt-2'>
              <Link to='/pages/login'>
                <ChevronLeft className='mr-25' size={14} />
                <span className='align-middle'>Back to login</span>
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ResetPassword
