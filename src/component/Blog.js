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
import Pic26 from '../img/customer3.jpg'

import Header from './header'
import Footer from './footer'
import HeaderTwo from './headerTwo'

const Blog = () => {
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
            Blogs
          </h1>
        </Row>
        <Row
          style={{
            padding: '5%',
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
      <Container style={{ backgroundColor: '#f5f5f5' }}>
        <Row
          style={{
            paddingLeft: '6%',
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

          <Col md={4} sm={12}>
            <img src={Pic21} alt='containerPic' />
          </Col>
        </Row>
      </Container>

      <Row
        style={{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${Pic22})`,
        }}
      >
        <Col md={6} sm={0} style={{ marginRight: '3%' }}>
          <img src={Pic23} alt='planeAndCar' />
        </Col>
        <Col md={4} sm={12}>
          <h2 style={{ fontWeight: 'bold' }}>
            Reach your destination 100% sure and safe
          </h2>
          <p>
            Logiscargo іѕ a full ѕеrvісе logistics & cargo company, оur аіm іѕ
            tо gіvе the bеѕt to оur various clients аt аffоrаblе рrісе. At
            Logiscargo, we аrе unceasingly progressing making research
            continuously аnd improving оur ѕеrvісеѕ to thе hіghеѕt ѕtаndаrdѕ.{' '}
          </p>
          <Button className='viewServices' variant='warning'>
            VIEW SERVICES
          </Button>
        </Col>
      </Row>
      <Container>
        <Row>
          <h1 style={{ fontWeight: 'bold' }}>our team members</h1>
        </Row>
        <Row>
          <Col md={3} sm={12}>
            <img src={Pic24} alt='customer1' />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Blog
