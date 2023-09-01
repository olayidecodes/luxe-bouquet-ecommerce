import About from '../../containers/about/About'
import ChooseUs from '../../containers/choose_us/ChooseUs'
import ContactSection from '../../containers/contact_section/ContactSection'
import FlowerSubscriptions from '../../containers/flower_subscriptions/FlowerSubscriptions'
import HeroBanner from '../../containers/hero_banner/HeroBanner'

const Home = () => {
  return (
    <div className='app__container container__border'>
      <HeroBanner />
      <About />
      <ChooseUs />
      <ContactSection />
      <FlowerSubscriptions />
    </div>
  )
}

export default Home
