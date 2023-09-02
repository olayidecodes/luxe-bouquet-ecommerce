import Textra from 'react-textra'

const data = [
  'I recently ordered flowers from Kyiv LuxeBouquets and I was extremely impressed with the quality of the product and the speed of delivery. The flowers were beautiful and fresh, and they arrived in perfect condition. The customer service was also excellent. They were very helpful and answered all my questions promptly. I would highly recommend Kyiv LuxeBouquets to anyone looking for high-quality flowers delivered quickly and with great customer service.',
  'I recently ordered flowers from Kyiv LuxeBouquets and was absolutely delighted with the service. The ordering process was simple and straightforward, and the delivery was incredibly fast. The flowers were of the highest quality and arrived in perfect condition. I was so impressed with the service that I will definitely be ordering from Kyiv LuxeBouquets again. Highly recommended!',
  'I love Kyiv LuxeBouquets Ecommerce store! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come.',
  'Would definitely recommend Kyiv LuxeBouquets Ecommerce store and will definitely be ordering again. Kyiv LuxeBouquets Ecommerce stor is exactly what I\'ve been looking for.',
  'I can\'t say enough about Kyiv LuxeBouquets. Kyiv LuxeBouquets Ecommerce stor has really helped our business.',
  'I have been using Kyiv LuxeBouquets Ecommerce stor for over a year now and I love it! I can\'t imagine life without it. It\'s so easy to use, and the customer service is great.'
]

const Slider = () => {
  return (
     <div>
       <Textra 
        effect='flash' 
        duration={1000}
        stopDuartion={4000} 
        data={data} 
        />
     </div>
   ) 
}

export default Slider