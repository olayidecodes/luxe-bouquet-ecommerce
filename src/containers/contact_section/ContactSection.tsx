import { CgPhone } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import Input from '../../components/inputs/Input'
import BlackButton from '../../components/button/BlackButton'
import Icons from '../../components/icons/Icons'
import './ContactSection.scss'

const ContactSection = () => {
  return (
    <div className='container__grid'>
      <div className="left container__border">
        <div className="top grid__padding">
            <h1 className='section__title'>Let's Talk</h1>
            <p>Enter your number and we'll call you back ASAP to help you with any questions or to place an order</p>
            <div className="reachus">
                <Input title='=380 XX XXX XX XX'/>
                <BlackButton title='Reach us' />
            </div>
        </div>
        <div className="bottom">
            <div className="box container__border">
              <h1>Phone</h1>
              <div className="contents">
                <div className="content">
                  <CgPhone />
                  <p>+380980099777</p>
                </div>
                <div className="content">
                  <CgPhone />
                  <p>+380980099777</p>
                </div>
              </div>
            </div>
            <div className="box container__border">
              <h1>Address</h1>
              <div className="contents">
                <div className="content">
                  <p>OPENING HOURS: 8 TO 11 P.M.</p>
                </div>
                <div className="content">
                  <FaLocationDot />
                  <p>15/4 Khreshchatyk Street, Kyiv</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="right">
        <img src='images/location.png' alt='Shop'/>
        <div className="bottom">
          <div className='content'>
            <h1>Follow us</h1>
          </div>
          <div className='content'>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
