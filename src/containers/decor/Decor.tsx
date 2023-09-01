import WhiteButton from "../../components/button/WhiteButton"
import SectionContent from "../../components/section_content/SectionContent"
import './Decor.scss'

const Decor = () => {
  return (
    <div className="decor grid__section grid__padding">
        <span>Our Story</span>
        <SectionContent property='' title='Wedding & Event Decor' desc='Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.'/>
        <WhiteButton title='Inquire now' />
      </div>
  )
}

export default Decor
