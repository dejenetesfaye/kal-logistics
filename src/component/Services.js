import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Pic20 from '../img/inner-banner.jpg'
import Pic21 from '../img/left-full-image.jpg'
import Pic22 from '../img/bg-1.jpg'
import Pic23 from '../img/1-3.png'
import Pic24 from '../img/customer1.jpg'
import Pic25 from '../img/customer2.jpg'
import Pic26 from '../img/service.jpg'
import Pic27 from '../img/service1.jpg'
import Pic28 from '../img/service2.jpg'
import Pic29 from '../img/fact-counter-bg.jpg'
import Pic30 from '../img/view-location.png'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import LanguageIcon from '@material-ui/icons/Language'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { makeStyles } from '@material-ui/core/styles'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import HeaderTwo from './headerTwo'

const UseStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    backgroundColor: '#E2A604',
    '&:hover': {
      backgroundColor: '#1FB5C7',
      color: 'white',
    },
  },
})

const Services = () => {
  const classes = UseStyles()
  return (
    <div>
      <Header />
      <HeaderTwo />
      <Container fluid style={{}}>
        <Row
          style={{
            backgroundImage: `url(${Pic20})`,
            backgroundPosition: '-400px -300px',
            height: '230px',
            color: 'white',
          }}
        >
          <h1
            style={{
              fontWeight: 'bold',
              marginLeft: '20%',
              marginTop: '80px',
              textAlign: 'bottom',
            }}
          >
            Our Services
          </h1>
        </Row>
        <Row
          style={{
            marginLeft: '4%',
            padding: '5%',
          }}
        >
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            We offer different services
          </h3>
          <p>
            At Logiscargo, we аrе making research continuously аnd improving оur
            ѕеrvісеѕ to thе hіghеѕt ѕtаndаrdѕ. Wе оffеr dіffеrеnt ѕеrvісеs
            rаngіng frоm logistics, warehousing, cargo, transport and other
            related services. Below is the list of our current services.
          </p>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: '#f5f5f5' }}>
        <Row
          style={{
            padding: '6%',
          }}
        >
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic26} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic27} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic28} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
        </Row>
        <Row
          style={{
            padding: '6%',
          }}
        >
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic26} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic27} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <img src={Pic28} alt='containerPic' />
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Cargo Express
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row style={{ color: '#08ADD0', fontSize: '12px' }}>
              <a href='/' class='active'>
                READ MORE
              </a>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          className='viewabcd'
          style={{
            minHeight: '275px',
            backgroundAttachment: 'fixed',
            backgroundImage: `url(${Pic29})`,
            backgroundPosition: '-400px -300px',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          <Col md={3} sm={12} style={{ background: 'rgba(0,0,0,0.5)' }}>
            <AccountCircle
              style={{ marginTop: '10%', color: 'white', fontSize: '75px' }}
            />
            <h1 style={{ color: 'white' }}>250</h1>
            <p style={{ color: '#34CCFF' }}> Emploies in Team</p>
          </Col>
          <Col md={3} sm={12} style={{ background: 'rgba(0,0,0,0.5)' }}>
            <LocalShippingIcon
              style={{ marginTop: '10%', color: 'white', fontSize: '75px' }}
            />
            <h1 style={{ color: 'white' }}>250</h1>
            <p style={{ color: '#34CCFF' }}> Company Vihicles</p>
          </Col>
          <Col md={3} sm={12} style={{ background: 'rgba(0,0,0,0.5)' }}>
            <LanguageIcon
              style={{ marginTop: '10%', color: 'white', fontSize: '75px' }}
            />
            <h1 style={{ color: 'white' }}>250</h1>
            <p style={{ color: '#34CCFF' }}> Worldwide Clients</p>
          </Col>
          <Col md={3} sm={12} style={{ background: 'rgba(0,0,0,0.5)' }}>
            <CheckCircleIcon
              style={{ marginTop: '10%', color: 'white', fontSize: '75px' }}
            />
            <h1 style={{ color: 'white' }}>250</h1>
            <p style={{ color: '#34CCFF' }}> Projects Done</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={6} sm={12} style={{ marginBottom: '5%', marginTop: '5%' }}>
            <h3
              style={{
                fontWeight: 'bold',
                marginBottom: '5%',
              }}
            >
              OUR LOCATIONS
            </h3>
            <img src={Pic30} alt='locations' />
            <p
              style={{
                marginTop: '5%',
                marginBottom: '5%',
              }}
            >
              We can transport your goods around the world. We have offices in
              almost every corner of the earth. Call us for your need today.
            </p>
            <Link
              to='/Contact'
              style={{
                color: '#E2A604',
                fontWeight: 'bold',
                marginTop: '5%',
              }}
            >
              VIEW OUR LOCATIONS
            </Link>
          </Col>
          <Col md={6} sm={12} style={{ marginBottom: '5%', marginTop: '5%' }}>
            <h3 style={{ fontWeight: 'bold', marginBottom: '5%' }}>
              SEND YOUR COMMENT
            </h3>
            <Form>
              <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control type='text' placeholder='Enter your full name' />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter your email address:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your your email address'
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter your age:</Form.Label>
                <Form.Control type='number' placeholder='Enter your age' />
              </Form.Group>

              <Link to='/Contact'>
                <Button
                  className={classes.button}
                  size='lg'
                  type='submit'
                  style={{ marginTop: '2%', marginBottom: '2%' }}
                  variant='warning'
                >
                  SUBMIT NOW
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default Services
