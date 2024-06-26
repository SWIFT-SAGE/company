import { useGSAP } from "@gsap/react";
import Button from "../lib/ui/button";
import gsap from "gsap";
import SplitType from "split-type";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useRef } from "react";
import ThreeDModel from "../components/ThreeDModel";
import { CiDesktopMouse2 } from "react-icons/ci";
import Card from "../lib/ui/Card";
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
gsap.registerPlugin(ScrollTrigger);
function Home() {
 const Text=SplitType.create('h1')
 console.log(Text)
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(Text.words, {
      duration: 1,
      opacity: 0,
      y: 100,
      stagger: 0.1,
      });
  })
  return (

    <>   
     <ThreeDModel/>
     <section className="  mt-52   min-h-screen  px-6  w-1/4">
      
       <h1 className=" font-bold  text-9xl"> 
        Welcome To Swift Sage Digital Solution
       </h1>
   <div className=" flex gap-5  items-center"> 
<Button text={'Get Quote Now'} onclick={()=>{}} className={' mt-8 !p-5 w-96'}/>
<Button text={'Get Started '} onclick={()=>{}} className={' mt-8 !p-5 w-96'}/>

   </div>        
     
     <CiDesktopMouse2 size={100} className={'animate-bounce  absolute left-1/2   bottom-0 mt-10'}/>

    </section>
    <section>
      <h2 className=" text-6xl font-bold mb-32">What We Do?</h2>
      <div className=" w-1/4 flex flex-wrap gap-10">
        
      {
      Service.map((item,index)=>{
        return(
          <Card key={index} image={item.img} CardTitle={item.title} CardDescription={item.description}/>
          )
          })
    }
      </div>
    </section>
    </>

  );
}

export default Home;
