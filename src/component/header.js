import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
//import Button from "@material-ui/core/Button";
import logo from '../img/logo-removebgfinal.png'
import smalllogo from '../img/small-logo.jpg'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'

function Header() {
  return (
    <div>
      <header style={{ background: '#13314C', height: '120px', width: '100%' }}>
        <Box>
          <div class='loop-wrapper' style={{ overflow: 'hidden' }}>
            <div class='mountain'></div>
            <div class='hill'></div>
            <div class='tree'></div>
            <div class='tree'></div>
            <div class='tree'></div>
            <div class='rock'></div>
            <div class='truck'>
              <img
                src={logo}
                alt='Kal'
                style={{
                  position: 'absolute',
                  height: '50px',
                  width: '52px',
                }}
              />
            </div>
            <div class='wheels'></div>
          </div>
          <Box
            style={{
              position: 'absolute',
              top: '3%',
              bottom: '3%',
              left: '15%',
              height: '80px',
              width: '250px',
              backgroundColor: '',
            }}
          >
            <Link to='/'>
              <img
                src={logo}
                alt='logo'
                style={{ position: 'absolute', height: '80px' }}
              />
            </Link>
          </Box>

          <div class='callUs'>
            <IconButton
              style={{
                position: 'absolute ',
                top: '30px',
                left: '60%',
                height: '80px',
                color: 'white',
              }}
            >
              <PhoneIcon />
              <div>
                <label style={{ color: '#139EA0' }}>call Us:</label>
                <br />
                <label style={{ fontStyle: 'italic', fontSize: '18px' }}>
                  (+251) 921335447
                </label>
              </div>
            </IconButton>
          </div>

          <div class='email'>
            <IconButton
              style={{
                position: 'absolute ',
                top: '30px',
                left: '80%',
                height: '80px',
                color: 'white',
              }}
            >
              <EmailIcon />
              <div>
                <label style={{ color: '#139EA0' }}>Email:</label>
                <br />
                <label style={{ fontStyle: 'italic', fontSize: '18px' }}>
                  info@kalelogistics.com
                </label>
              </div>
            </IconButton>
          </div>
        </Box>
      </header>
    </div>
  )
}

export default Header
