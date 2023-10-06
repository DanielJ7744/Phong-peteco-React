// ** Icons Import
import { Fragment } from 'react'
import { Row, Col, CardText } from 'reactstrap'
import Breadcrumbs from '@components/breadcrumbs'
import logoImg from '../../../../assets/images/footer/logo_peteco.png'
import facebookImg from '../../../../assets/images/footer/facebook.png'
import cardsImg from '../../../../assets/images/footer/cards.jpg'
import "./footer.scss"

const Footer = () => {
  return (
    <Fragment>
    <div className='footer-container'>
      <div className='footer backend-footer'>
        <div className='container-fluid'>
          <Row>
            <Col lg='4' md='4' sm='12' xs='12'>
              <div className='widget w-about'>
                <a href='#' className='logo' title='Petshop Peteco'>
                  <img src={logoImg} className='img-responsive' alt='Peteco' />
                  <p className='slogan'>
                    Love Your Pet!
                  </p>
                </a>
                <CardText className='phone-nr'>
                  0744 PETECO
                  <br/>
                  0744 738 326
                </CardText>
                <CardText className='quote-footer'>
                  <a href='#' title='Pet Shop online'>Petshop online</a> 
                  &nbsp;cu hrana, accesorii si produse de igiena pentru&nbsp;
                  <a href='#' title='Petshop caini'>caini</a>
                  ,&nbsp;
                  <a href='#' title='Petshop pisini'>pisini</a>
                  ,&nbsp;
                  <a href='#' title='Petshop anmale mici'>animale mici</a>
                  ,&nbsp;
                  <a href='#' title='Petshop pasari'>pasari</a>
                  ,&nbsp;
                  <a href='#' title='Petshop pesti'>pesti</a>
                  , si&nbsp;
                  <a href='#' title='Petshop reptile &amp; amfibieni'>reptile & amfibieni</a>
                  . produse pentru&nbsp;
                  <a href='#'>animale de companie</a>
                  &nbsp;de la&nbsp;
                  <a href='#'>peste 400 de brand-uri,</a>
                  &nbsp;cat si &nbsp;
                  <a href='#'>asigurare pentru animalele de companie.</a>
                </CardText>
              </div>
            </Col>
            <Col lg='2' md='2' sm='6' xs='12'>
              <div className='widget w-list'>
                <span className='title'>Infomatii</span>
                <ul>
                  <li><a href='#'>Petshop</a></li>
                  <li><a href='#'>Asigurari</a></li>
                  <li><a href='#'>Cum cumperi</a></li>
                  <li><a href='#'>Politica de retur</a></li>
                  <li><a href='#'>Sectiune Ajutor</a></li>
                </ul>
              </div>
            </Col>
            <Col lg='2' md='2' sm='6' xs='12'>
              <div className='widget w-list'>
                <span className='title'>Social</span>
                <ul>
                  <li><a href='#'>Grupuri Discutii</a></li>
                  <li><a href='#'>Evenimente</a></li>
                  <li><a href='#'>Articole</a></li>
                  <li><a href='#'>Animale de companie</a></li>
                  <li><a href='#'>Contact</a></li>
                </ul>
              </div>
            </Col>
            <Col lg='2' md='2' sm='6' xs='12'>
              <div className='widget w-list'>
                <span className='title'>Contul tau</span>
                <ul>
                  <li><a href='#'>Cronologie</a></li>
                  <li><a href='#'>Newsfeed</a></li>
                  <li><a href='#'>Prietenii mei</a></li>
                  <li><a href='#'>Mesajele mele</a></li>
                  <li><a href='#'>Animalele mele</a></li>
                  <li><a href='#'>Companiile mele</a></li>
                  <li><a href='#'>Grupurile mele</a></li>
                  <li><a href='#'>Evenimentele mele</a></li>
                  <li><a href='#'>Detalii cont</a></li>
                  <li><a href='#'>Comenzi</a></li>
                </ul>
              </div>
            </Col>
            <Col lg='2' md='2' sm='6' xs='12'>
              <div className='widget w-list'>
                <span className='title'>Informatii legale</span>
                <ul>
                  <li><a href='#'>Termeni si conditii</a></li>
                  <li><a href='#'>Politica de confidentialitate</a></li>
                  <li><a href='#'>Platforma SOL</a></li>
                  <li><a href='#'>A.N.P.C</a></li>
                </ul>
              </div>
            </Col>
            <Col lg='12' md='12' sm='12' xs='12'>
              <div className='sub-footer-copyright'>
                <Row>
                  <Col sm='6' className='text-left'>
                    <span>
                      Drepturi de autor © Peteco 2021. Toate drepturile rezervate. (Alpha Version - v1.1.0)
                    </span>
                  </Col>
                  <Col sm='6'>
                    <div className='inline-items text-right'>
                      <ul className='socials'>
                        <li>
                          <a href='https://www.facebook.com/PetecoGlobal' target='_blank'>
                            <img src={facebookImg} className='img-responsive' alt='Peteco Facebook' />
                          </a>
                        </li>
                      </ul>
                      <img src={cardsImg} className='img-responsive' width='130' height='25' />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default Footer
