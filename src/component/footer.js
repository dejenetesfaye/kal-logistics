import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from '@material-ui/core/Container'
import Button from 'react-bootstrap/Button'
import footerPic from '../img/footerPic.jpg'
import footerWorld from '../img/footerWorld.jpg'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import TimerIcon from '@material-ui/icons/Timer'

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

function footer() {
  const classes = UseStyles()
  return (
    <div>
      <div
        style={{
          height: '200px',
          backgroundImage: `url(${footerPic})`,
          backgroundPosition: '-550px 0px',
        }}
      >
        <Container float>
          <Row>
            <Col style={{ marginTop: '2%' }}>
              <h2 style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                Logistic and cargo
              </h2>
              <h4 style={{ color: 'white', fontStyle: 'italic' }}>
                Contact us now to get quote for all your global shipping and
                cargo need.
              </h4>

              <Link to='/Contact'>
                <Button
                  className={classes.button}
                  size='lg'
                  style={{ marginTop: '1%', marginBottom: '2%' }}
                  variant='warning'
                >
                  CONTACT US
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ color: '#62666A', backgroundImage: `url(${footerWorld})` }}>
        <Container float>
          <Row>
            <Col
              xs={12}
              md={4}
              style={{ textAlign: 'center', marginTop: '5%' }}
            >
              <h4
                style={{
                  fontStyle: 'italic',
                  fontFamily: 'bold',
                  color: 'white',
                  marginBottom: '10%',
                }}
              >
                About Logiscargo
              </h4>
              <p>
                Logiscargo is a Wordpress Theme is designed specially for
                logistics, cargo and related businesses. Theme is very
                professionally designed and developed. It comes with modern
                theme options panel as well.{' '}
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{ textAlign: 'center', marginTop: '5%' }}
            >
              <h4
                style={{
                  fontStyle: 'italic',
                  fontFamily: 'bold',
                  color: 'white',
                  marginBottom: '10%',
                }}
              >
                Quick Links
              </h4>
              <div>
                <Link to='/' style={{ color: '#62666A' }} href='/'>
                  Home
                </Link>{' '}
              </div>
              <div>
                <Link to='/AboutUs' style={{ color: '#62666A' }} href='/'>
                  About Us
                </Link>{' '}
              </div>
              <div>
                <Link to='/Services' style={{ color: '#62666A' }} href='/'>
                  Our Services
                </Link>{' '}
              </div>
              <div>
                <Link to='/Gallery' style={{ color: '#62666A' }} href='/'>
                  Gallery
                </Link>{' '}
              </div>
              <div>
                <Link to='/Browse' style={{ color: '#62666A' }} href='/'>
                  Browse
                </Link>
              </div>
              <div>
                <Link to='/Blog' style={{ color: '#62666A' }} href='/'>
                  Blog
                </Link>
              </div>
              <div>
                <Link to='/Contact' style={{ color: '#62666A' }} href='/'>
                  Contact Us
                </Link>
              </div>
            </Col>
            <Col xs={12} md={4} style={{ textAlign: 'left', marginTop: '5%' }}>
              <h4
                style={{
                  fontStyle: 'italic',
                  fontFamily: 'bold',
                  color: 'white',
                  marginBottom: '10%',
                }}
              >
                Reach Us
              </h4>
              <div style={{ color: '#62666A' }}>
                <LocationOnIcon /> KAL Logistics & trading, Addis ababa,
                Ethiopia
              </div>
              <br></br>
              <div style={{ color: '#62666A' }} href='/'>
                <PhoneIcon /> +251- 921335447
              </div>{' '}
              <br></br>
              <div style={{ color: '#62666A' }} href='/'>
                <MailOutlineIcon /> contact@logiccargo.com
              </div>{' '}
              <br></br>
              <div style={{ color: '#62666A' }} href='/'>
                <TimerIcon /> Monday - Friday : 8.00 - 19.00
              </div>{' '}
            </Col>
          </Row>
          <Row style={{ marginTop: '10%' }}>
            <Col xs={6} md={6} style={{}}>
              Copyright ©
            </Col>
            <Col xs={6} md={6} style={{ textAlign: 'right', marginTop: '3%' }}>
              Powered by Deju
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default footer
