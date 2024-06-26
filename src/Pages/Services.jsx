import React from 'react'
import Card from '../lib/ui/Card'

const Service=[{
  img:'/Card1.png',
  title:'Custom Software Development',
  description:'Tailored Software Solutions To Meet Your Specific Business Needs.'
},{
  img:'/Card2.jpg',
  title:'Digital Marketing Strategies',
  description:'Effective Digital Marketing Campaigns To Boost Your Online Presence.'
},{
  img:'/Card3.jpg',
  title:'Web Development',
  description:'Tailored Software Solutions To Meet Your Specific Business Needs.'
},{
  img:'/Card4.jpg',
  title:'App Development',
  description:'Tailored Software Solutions To Meet Your Specific Business Needs.'
},{
  img:'/Card5.jpeg',
  title:'24/7 Support',
  description:'Dedicated Support Team Available Round The Clock To Assist You.'
}]
function Services() {
  return (
    <section className=' mt-48'>
      <h2 className=' text-8xl mb-10 font-semibold '>Services  </h2>
      <div className=' grid grid-cols-3 p-5 px-7 gap-x-32  gap-y-10'>
    {
      Service.map((item,index)=>{
        return(
          <Card key={index} image={item.img} CardTitle={item.title} CardDescription={item.description}/>
          )
          })
    }
        
      </div>
    </section>
  )
}

export default Services