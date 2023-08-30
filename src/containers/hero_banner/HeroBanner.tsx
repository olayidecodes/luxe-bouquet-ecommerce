import GridContent from '../../components/grid_content/GridContent'
import './HeroBanner.scss'

const contents = [
  {
    name: 'Fresh Flowers',
    image: '/images/fresh_flowers.png'
  },
  {
    name: 'Dried Flowers',
    image: '/images/dried_flowers.png'
  },
  {
    name: 'Fresheners',
    image: '/images/fresheners.png'
  },
  {
    name: 'Aroma Candles',
    image: '/images/aroma_candles.png'
  },
  {
    name: 'Live Plants',
    image: '/images/live_plants.png'
  }
]

const HeroBanner = () => {
  return (
    <div className='hero__banner container__grid'>
      <div className="left">
        <div className="top">
            <h1>Kyiv</h1>
            <div><h1>LuxeBouquets</h1></div>
            <p>Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online Flower Delivery Service</p>
        </div>
        <div className="bottom">
            <img src="/images/banner_hero.png" alt="" />
            <p>Experience the joy of giving with our modern floral studio. Order online and send flowers, plants and gifts today</p>
        </div>
      </div>
      <div className="right grid__section">
        {
          contents.map((content) => (
            <GridContent name={content.name} image={content.image}/>
          ))
        }
      </div>
    </div>
  )
}

export default HeroBanner
