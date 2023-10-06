import { Fragment, useState, useEffect } from "react"
import "./account-edit-profile.scss"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  CardFooter
} from "reactstrap"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import csc from "countries-states-cities"
import { updateProfile } from "../../../../apps/ecommerce/store/actions"
import { useDispatch, useSelector } from "react-redux"
import parsePhoneNumber from "libphonenumber-js"
import { toast } from 'react-toastify'
import { X, Check } from 'react-feather'
import Avatar from '@components/avatar'

const AccountEditProfile = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.ecommerce)
  const [uid, setUID] = useState()
  const [select1, setSelect1] = useState(false)
  const [select2, setSelect2] = useState(false)

  const [sex, setSex] = useState()
  const [username, setUsername] = useState()
  const [phone, setPhone] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [dob, setDob] = useState()

  const [countryOpt, setCountryOpt] = useState([])
  const [userState, setUserState] = useState([])
  const [city, setCity] = useState([])

  const [selectedCountry, setSelectedCountry] = useState({})
  const [selectedState, setSelectedState] = useState({})
  const [selectedCity, setSelectedCity] = useState({})


  const SuccessToast = () => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='success' icon={<Check size={12} />} />
          <h6 className='toast-title'>Success!</h6>
        </div>
        <small className='text-muted'></small>
      </div>
      <div className='toastify-body'>
        <span role='img' aria-label='toast-text'>
          👋 Profile is updated
        </span>
      </div>
    </Fragment>
  )

  const ErrorToast = () => (
    <Fragment>
      <div className='toastify-header'>
        <div className='title-wrapper'>
          <Avatar size='sm' color='danger' icon={<X size={12} />} />
          <h6 className='toast-title'>Error!</h6>
        </div>
      </div>
      <div className='toastify-body'>
        <span role='img' aria-label='toast-text'>
         Number is Incorrect
        </span>
      </div>
    </Fragment>
  )

  const notifySuccess = () => toast.success(<SuccessToast />, { hideProgressBar: true })
  const notifyError = () => toast.error(<ErrorToast />, { hideProgressBar: true })


  const handleAddCountry = (value, label, id, code) => {
    setCountryOpt((arr) => [...arr, { value, label, id, code }])
  }

  const handleUserState = (value, label, id, countryId) => {
    setUserState((arr) => [...arr, { value, label, id, countryId }])
  }

  const handleUserCity = (value, label, id, stateId) => {
    setCity((arr) => [...arr, { value, label, id, stateId }])
  }

  useEffect(() => {
    const data = csc.getAllCountries()
    const check = data.map((country) => {
      handleAddCountry(country.name, country.name, country.id, country.iso2)
    })
  }, [])

  useEffect(() => {
    if (selectedCountry.id) {
      const data = csc.getStatesOfCountry(selectedCountry.id)
      const check = data.map((state) => {
        handleUserState(state.name, state.name, state.id, state.country_id)
      })
    }
  }, [selectedCountry])

  useEffect(() => {
    if (selectedState.id) {
      const data = csc.getCitiesOfState(selectedState.id)
      const check = data.map((city) => {
        handleUserCity(city.name, city.name, city.id, city.state_id)
      })
    }
  }, [selectedState])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"))
    setUID(data.profile.uid)
    setDob(data.profile.birth_date)
    setUsername(data.profile.name)
    setFirstName(data.profile.first_name)
    setLastName(data.profile.last_name)
    if (data.profile.sex === 'M') {
      setSelect1(true)
    } else {
      setSelect2(true)
    }

  }, [])

  const handleEditProfile = () => {
    const options = {}
    options.uid = uid

    if (sex) {
      options.sex = sex
    }
    if (username) {
      options.vanity_name = username
    }
    if (phone) {
      const phoneNumber = parsePhoneNumber(`${phone}`)
      if (phoneNumber) {
        if (phoneNumber.isValid() === true) {
          options.phone = phoneNumber.number
          options.phone_country = phoneNumber.country
          options.phone_country_code = phoneNumber.countryCallingCode
        } else {
         return notifyError()
        }
      }
    }
    if (firstName) {
      options.first_name = firstName
    }
    if (lastName) {
      options.last_name = lastName
    }
    if (dob) {
      options.birth_date = dob
    }
    if (selectedCountry && selectedState && selectedCity) {
      options.country = selectedCountry.code
      options.region = selectedState.value
      options.city = selectedCity.stateId
    }
    dispatch(updateProfile(options))
    notifySuccess()
  }

  return (
    <Fragment>
      <Row className="justify-content-center">
        <Col>
          <Card className="card-transaction">
            <CardHeader className="wishlist-card-header">
              <CardTitle tag="h4">Edit profile</CardTitle>
            </CardHeader>

            <CardBody>
              <Row>
                <Col xs="12" xl="2" lg="3" md="12">
                  <Label for="basicInput">Sex</Label>
                  <Button.Ripple
                    className="btn-divider-c"
                    color="primary"
                    outline
                    style={{ paddingLeft: "0px", paddingRight: "0px" }}
                  >
                    <div
                      className="btn-divider"
                      style={{
                        backgroundColor: select1 ? "#7367f0" : "",
                        color: select1 ? "white" : ""
                      }}
                    >
                      <span
                        onClick={() => {
                          setSelect1(!select1)
                          setSelect2(false)
                          setSex("M")
                        }}
                      >
                        {" "}
                        Mister.
                      </span>
                    </div>
                    <div
                      className="btn-divider"
                      style={{
                        backgroundColor: select2 ? "#7367f0" : "",
                        color: select2 ? "white" : ""
                      }}
                    >
                      <span
                        onClick={() => {
                          setSelect2(!select2)
                          setSelect1(false)
                          setSex("F")
                        }}
                      >
                        Dna.
                      </span>
                    </div>
                  </Button.Ripple>
                </Col>
                <Col xs="10" xl="7" lg="8" md="6">
                  <FormGroup style={{}}>
                    <Label for="basicInput5">Username:</Label>
                    <Input
                      type="email"
                      id="basicInput5"
                      placeholder=""
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col xs="12" xl="3" lg="3" md="6">
                  <FormGroup style={{}}>
                    <Label for="basicInput">Phone:</Label>
                    <PhoneInput
                      value={phone}
                      international
                      defaultCountry="RU"
                      onChange={(e) => setPhone(e)}
                    />{" "}
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs="12" lg="5" xl="5" md="4">
                  <FormGroup>
                    <Label for="basicInput1">First name:</Label>
                    <Input
                      type="email"
                      id="basicInput1"
                      placeholder=""
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput2">Last Name</Label>
                    <Input
                      type="email"
                      id="basicInput2"
                      placeholder=""
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="3" xl="3" md="4">
                  <FormGroup>
                    <Label for="basicInput3">Date of birth:</Label>
                    <Input
                      type="email"
                      id="basicInput3"
                      placeholder=""
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">The country:</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      options={countryOpt}
                      onChange={(e) => {
                        setSelectedCountry(e)
                        setSelectedState({})
                        setSelectedCity({})
                      }}
                    />
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">Region:</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      options={userState}
                      defaultValue={userState[0]}
                      onChange={(e) => {
                        setSelectedState(e)
                        setSelectedCity({})
                      }}
                    />{" "}
                  </FormGroup>
                </Col>

                <Col xs="12" lg="4" xl="4" md="4">
                  <FormGroup>
                    <Label for="basicInput">Town</Label>
                    <Select
                      theme={selectThemeColors}
                      isClearable={false}
                      id={`country`}
                      className="react-select"
                      classNamePrefix="select"
                      onChange={(e) => setSelectedCity(e)}
                      options={city}
                    />{" "}
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter style={{ border: "none", padding: "0px" }}>
              <Row className="footer-btn">
                <Button.Ripple
                  color="primary"
                  outline
                  style={{
                    marginTop: "10px"
                  }}
                >
                  Cancel
                </Button.Ripple>

                <Button.Ripple
                  onClick={handleEditProfile}
                  color="primary"
                  style={{
                    marginTop: "10px"
                  }}
                >
                  Save
                </Button.Ripple>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default AccountEditProfile
