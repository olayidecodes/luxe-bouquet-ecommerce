import GridContent from '../../components/grid_content/GridContent'
import './HeroBanner.scss'

const contents = [
  {
    property: 'row',
    name: 'Fresh Flowers',
    image: '/images/fresh_flowers.png'
  },
  {
    property: 'row_reverse',
    name: 'Dried Flowers',
    image: '/images/dried_flowers.png'
  },
  {
    property: 'row',
    name: 'Fresheners',
    image: '/images/fresheners.png'
  },
  {
    property: 'row_reverse',
    name: 'Aroma Candles',
    image: '/images/aroma_candles.png'
  },
  {
    property: 'row',
    name: 'Live Plants',
    image: '/images/live_plants.png'
  }
]

const shops = [
  {
    title: 'Fresh Flowers',
  },
  {
    image: '/images/fresh_flowers.png'
  },
  {
    title: 'Dried Flowers'
  },
  {
    image: '/images/dried_flowers.png'
  }
]

const HeroBanner = () => {
  return (
    <div className='hero__banner container__grid'>
      <div className="sticky grid__padding left">
        <div className="top">
            <h1 className='section__title'>Kyiv</h1>
            <div><h1 className='section__title'>LuxeBouquets</h1></div>
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
            <GridContent property={content.property} name={content.name} image={content.image}/>
          ))
        }
        {/* {
          shops.map((shop) => (
            <div className='right_grid'>
              <div>
                <h1>{shop.title}</h1>
              </div>
              <div>
                <img src={shop.image} />
              </div>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default HeroBanner
