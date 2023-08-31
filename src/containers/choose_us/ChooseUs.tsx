import SectionContent from "../../components/section_content/SectionContent"

const contents = [
    {
        title: 'Stylist bouquets by florist',
        desc: 'At our floral studio, our professional florists craft the most elegant and stylish bouquets using only the freshest and highest quality materials available. We stay up-to-date with the latest floral design trends and offer unique arrangements that are sure to impress. Let us brighten up your day with our stunning bouquets and same-day delivery service.'
    },
    {
        title: 'On-time delivery',
        desc: 'Never miss a moment with our on-time flower delivery service. Our couriers will deliver your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust us to deliver your thoughtful gift reliably.'
    },
    {
        title: 'Safe payment',
        desc: 'You can feel secure when placing an order with us, as we use industry-standard security measures to protect your payment information. Your transaction will be safe and hassle-free, so you can shop with confidence.'
    },
    {
        title: 'Subscription by your needs',
        desc: 'With our subscription service tailored to your specific needs, you can enjoy the convenience of having beautiful bouquets delivered straight to your door at regular intervals. Our flexible service is perfect for busy individuals or those who want to ensure they always have fresh flowers on hand. You\'ll save time and money with this hassle-free solution to your floral needs.'
    }
]

const ChooseUs = () => {
  return (
    <div className="container__grid choose_us">
      <h1 className="section__title container__border grid__padding">
        Why Choose Us?
      </h1>
      <div className="grid__section">
        {
            contents.map((content) => (
                <SectionContent property='grid__padding container__border' title={content.title} desc={content.desc} />
            ))
        }
      </div>
    </div>
  )
}

export default ChooseUs
