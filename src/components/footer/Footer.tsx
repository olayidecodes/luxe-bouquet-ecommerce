import { aboutlinks, contacts, servicelinks, shoplinks } from "../../assets/data"
import BlackButton from "../button/BlackButton"
import Icons from "../icons/Icons"
import Input from "../inputs/Input"
import AppLink from "./AppLink"
import ContactBox from "./ContactBox"
import './Footer.scss'
import FooterTitle from "./FooterTitle"



const Footer = () => {
  return (
    <footer className="container__border footer">
      <div className="footer__box">
        <span>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</span>
        <Input title='Your Email' />
        <BlackButton title="Remind"/>
      </div>
      <div className="footer__box">
        <div>
          <FooterTitle title="contact us"/>
          <div className="contacts__section">
          {
            contacts.map((contact: any) => (
              <ContactBox title={contact.title} content={contact.content} key={contact.title} />
            ))
          }
          </div>
        </div>
        <div>
          <FooterTitle title="follow us"/>
          <Icons />
        </div>
      </div>
      <div className="footer__box">
        <FooterTitle title='shop'/>
        <div className="footer__links_section">
        {
          shoplinks.map((link) => (
            <AppLink key={link.name} name={link.name} href={link.href}/>
          ))
        }
      </div> 
      <FooterTitle title='service'/>
      <div className="footer__links_section">
        {
          servicelinks.map((link) => (
            <AppLink key={link.name} name={link.name} href={link.href}/>
          ))
        }
      </div>
      </div>
      <div className="footer__box">
        <FooterTitle title='About us' />
        <div className="footer__links_section">
        {
          aboutlinks.map((link) => (
            <AppLink key={link.name} name={link.name} href={link.href}/>
          ))
        }
      </div>
      </div>
    </footer>
  )
}

export default Footer
