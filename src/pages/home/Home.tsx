import About from '../../containers/about/About'
import ChooseUs from '../../containers/choose_us/ChooseUs'
import HeroBanner from '../../containers/hero_banner/HeroBanner'

const Home = () => {
  return (
    <div className='app__container container__border'>
      <HeroBanner />
      <About />
      <ChooseUs />
    </div>
  )
}

export default Home
