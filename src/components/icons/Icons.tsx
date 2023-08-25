import { FaInstagram } from 'react-icons/fa'
import { ImPinterest2 } from 'react-icons/im'
import { FiFacebook } from 'react-icons/fi'
import { TfiTwitter } from 'react-icons/tfi'
import { PiTelegramLogoLight } from 'react-icons/pi'
import './Icons.scss'

const Icons = () => {
  return (
    <div className='app__icons'>
      <FaInstagram className="app__icon"/>
      <ImPinterest2 className="app__icon"/>
      <FiFacebook className="app__icon"/>
      <TfiTwitter className="app__icon"/>
      <PiTelegramLogoLight className="app__icon"/>
    </div>
  )
}

export default Icons
