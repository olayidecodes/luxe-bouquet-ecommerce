import './About.scss'
import SectionContent from '../../components/section_content/SectionContent'
import WhiteButton from '../../components/button/WhiteButton'

const About = () => {
  return (
    <div className='container__grid about__section'>
      <h1 className="section__title container__border grid__padding">
        About us
      </h1>
      <div className="grid__section grid__padding">
        <span>Our Story</span>
        <SectionContent property='' title='Kyiv LuxeBouquets' desc='We are a modern local floral studio, which specializes in the design and delivery of unique bouquets. We have the best florists who carefully select each look, our studio cooperates directly with farms for growing different flowers, so we always have fresh flowers, which are collected by our florists in exquisite bouquets. We have a collection of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant candles from luxury brands to create the perfect atmosphere. Make someones day amazing by sending flowers, plants and gifts the same or next day. Ordering flowers online has never been easier.'/>
        <WhiteButton title='Learn more' />
      </div>
    </div>
  )
}

export default About