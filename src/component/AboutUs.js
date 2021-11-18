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
import dangote from '../img/dangote.jpg'
import eal from '../img/eal.png'
import cbe from '../img/cbe.jpg'
import telecom from '../img/telecom.jpg'
import hilton from '../img/hilton.png'
import ride from '../img/ride.png'
import dashine from '../img/dashin.png'

import Header from './header'
import Footer from './footer'
import HeaderTwo from './headerTwo'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
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

const AboutUs = () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <HeaderTwo />
      <Container fluid style={{ backgroundColor: '#f5f5f5' }}>
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
            }}
          >
            About Us
          </h1>
        </Row>
        <Row
          style={{
            padding: '5%',
            marginLeft: '6%',
            marginRight: '5%',
          }}
        >
          <h3
            style={{
              fontWeight: 'bold',
            }}
          >
            Who We Are
          </h3>
          <p>
            Logiscargo іѕ a full ѕеrvісе logistics & cargo company, оur аіm іѕ
            tо gіvе the bеѕt to оur various clients аt аffоrаblе рrісе. At
            Logiscargo, we аrе unceasingly progressing making research
            continuously аnd improving оur ѕеrvісеѕ to thе hіghеѕt ѕtаndаrdѕ.
            Our сlіеnt'ѕ іntеrеѕt оur priority. Wе are mіndful оf building a
            hеаlthу rеlаtіоnѕhір with оur сuѕtоmеrѕ, ѕuррlіеrѕ sub-contractors
            аnd соnѕultаntѕ, оur gоаl іѕ co-operation, tеаmwоrk tо achieving a
            grand ѕuссеѕѕful рrоjесt at аll tіmе.
          </p>
        </Row>
      </Container>
      <Container fluid style={{ backgroundColor: '#f5f5f5' }}>
        <Row
          style={{
            paddingLeft: '12%',
          }}
        >
          <Col md={4} sm={12}>
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
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Contract logistics
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
          </Col>
          <Col md={4} sm={12}>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Custom Brokerage
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
            <Row>
              <h5
                style={{
                  fontWeight: 'bold',
                }}
              >
                Consulting Services
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius mod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Row>
          </Col>

          <Col md={4} sm={12} style={{}}>
            <img
              style={{
                overflow: 'hidden',
                width: '100%',
              }}
              src={Pic21}
              alt='containerPic'
            />
          </Col>
        </Row>
      </Container>

      <Row
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3%',
          backgroundImage: `url(${Pic22})`,
        }}
      >
        <Col
          md={6}
          sm={0}
          style={{
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={Pic23} alt='planeAndCar' style={{ overflow: 'hidden' }} />
        </Col>
        <Col md={4} sm={12} style={{ overflow: 'hidden' }}>
          <h2 style={{ fontWeight: 'bold' }}>
            Reach your destination 100% sure and safe
          </h2>
          <p>
            Logiscargo іѕ a full ѕеrvісе logistics & cargo company, оur аіm іѕ
            tо gіvе the bеѕt to оur various clients аt аffоrаblе рrісе. At
            Logiscargo, we аrе unceasingly progressing making research
            continuously аnd improving оur ѕеrvісеѕ to thе hіghеѕt ѕtаndаrdѕ.{' '}
          </p>

          <Link to='/Services'>
            <Button
              className={classes.button}
              size='lg'
              style={{
                marginBottom: '3%',
                marginLeft: '3%',
              }}
              variant='warning'
            >
              VIEW OUR SERVICES
            </Button>
          </Link>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <h3
            style={{
              fontWeight: 'bold',
              marginLeft: '10%',
              marginTop: '3%',
              marginBottom: '3%',
            }}
          >
            OUR CLIENTS
          </h3>
        </Row>
        <Row
          style={{
            fontWeight: 'bold',
            marginLeft: '5%',
            marginRight: '5%',
            marginBottom: '3%',
            overflow: 'hidden',
          }}
        >
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={cbe}
              alt='cbe'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={dangote}
              alt='dangote'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={dashine}
              alt='dashin'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={eal}
              alt='eal'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={hilton}
              alt='hilton'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
          <Col md={2} sm={4} style={{ overflow: 'hidden' }}>
            <img
              src={ride}
              alt='ride'
              style={{ height: '100px', width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default AboutUs
