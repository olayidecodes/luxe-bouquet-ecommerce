import './FlowerSubscriptions.scss'
import SectionContent from '../../components/section_content/SectionContent'
import WhiteButton from '../../components/button/WhiteButton'

const FlowerSubscriptions = () => {
  return (
    <div className="flower__subscriptions">
        <div className="top grid__padding container__border top">
            <h1 className='section__title'>Our Service</h1>
        </div>
            <div className='bottom container__grid container__border'>
                <div className="left">
                    <img src='/images/subscription.png'/>
                </div>
                <div className="grid__section grid__padding">
                    <span>Service</span>
                    <SectionContent property='' title='Flower Subscriptions' desc='Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.'/>
                    <WhiteButton title='Subscribe now' />
            </div>
        </div>
    </div>
  )
}

export default FlowerSubscriptions
