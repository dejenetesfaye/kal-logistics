import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
//import Button from "@material-ui/core/Button";
import logo from '../img/logo.jpg'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import PhoneIcon from '@material-ui/icons/Phone'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect'

const btnFill = {
  backgroundImage: 'linear-gradient(-45deg, #00B5E2 30%, #e1e0df 30%)',
  height: '100% ',
  top: 0,
}

function HeaderTwo() {
  return (
    <div class='sticky-top' style={btnFill}>
      <body>
        <nav
          style={btnFill}
          class='navbar navbar-expand-lg  navbar-light bg-light'
        >
          <button
            class='navbar-toggler '
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>

          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>
              <li class='nav-item'>
                <Link to='/' class='nav-link'>
                  HOME
                </Link>
              </li>

              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/AboutUs' class='nav-link'>
                  ABOUT US
                </Link>
              </li>

              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/Services' class='nav-link'>
                  SERVICE
                </Link>
              </li>
              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/Gallery' class='nav-link'>
                  GALLERY
                </Link>
              </li>
              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/Browse' class='nav-link'>
                  BROWSE
                </Link>
              </li>
              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/Blog' class='nav-link'>
                  BLOG
                </Link>
              </li>
              <div class='separate'></div>
              <li class='nav-item'>
                <Link to='/Contact' class='nav-link'>
                  CONTACT US
                </Link>
              </li>
            </ul>
            <TextField
              class='search'
              style={{ position: 'absolute ', left: '80%' }}
              placeholder='Search…'
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </nav>
      </body>
    </div>
  )
}

export default HeaderTwo
