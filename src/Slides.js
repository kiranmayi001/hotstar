import React,{useState} from "react";
import "./Slides.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Slides = () => {
  const [current,setCurrent]=useState(0)

const images = [
  {
    image:" https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8735/958735-h",
    description:"Valmiki and Ramachandra start their career as clerks in the company of Ananth , becomes wealthy while Valmiki remains poor. On the day of the birth of both their children, Ramachandra's son appears to be dead. When nurse Sulochana informs Valmiki about this, he pities Ramachandra and Yasu and offers to exchange his baby with the dead one. After switching them, however, the apparently dead child begins to cry. Sulochana tries to switch them back but Valmiki senses an opportunity that his son would have a better life growing up in a rich family. He prevents her from switching, pushing her accidentally off a ledge. Sulochana goes into a coma, while Valmiki gets a leg cramp that makes him limp permanently. The two boys grow-up in different ways. Raj, raised at Ramachandra's house, is timid, innocent, and soft-spoken, while Bantu, who is raised at Valmiki's house, is smart, outspoken, and hard-working. Valmiki, who favours Raj, treats Bantu with disgust due to his true parentage.",
      title:"Vikram Vedha" ,
      specific:"thriller"
  },
  {
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3893/1063893-h-62576885fa3f",
    description:"Vikram is a brave and honest police inspector who is decisive about right and wrong. Vedha is a criminal who understands the grey shades between good and evil. Vikram leads an encounter unit formed to eliminate Vedha. In one encounter, the squad kills some of Vedha's henchmen, framing the death of a criminal killed by Vikram to avoid further inquiry. When Santhanam, one of the youngest members in the unit, is nervous about this, Vikram calms him by saying that he sleeps peacefully, knowing that the men he shot were criminals. As the unit plans another encounter, Vedha enters the police station and surrenders. When Vikram interrogates Vedha, he offers to tell him a story.",
  title:"Panchatanth",
  specific:"Movie "
  },
  {
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1372/871372-h",
    description:"Aditya is a cab driver who has a one-night stand with his passengerSanaya. When he wakes up, Sanaya is murdered. He finds himself in a pool of her blood, and Sanaya has multiple stab wounds. He leaves thecrime scene, but meets with an accident and is taken to the policetation. Initially, Madhav Mishra is interested in taking the case but",
title:"Criminal Justice : Behind Closed Doors",
specific:"Hotstar Specials · Crime"

  }
]


const nextSlide = () =>{
  setCurrent(current==images.length-1 ? 0 : current+1)
  console.log(current)
}

const prevSlide = () =>{
  setCurrent(current==0? images.length-1 : current-1)
  console.log(current)
}



  return (
    <div>
    <div className="flex media-hide">  
 
      {
        images.map((image,index)=>{
          return (
            <div className={index==current ? 'slide active' : 'slide'}  key={image+index}>
          {index===current ?
            <div>
            <div className="slides">
            <FontAwesomeIcon icon={faAngleRight} className="right-arrow" onClick={prevSlide}/>
              <FontAwesomeIcon icon={faAngleLeft} className="left-arrow" onClick={nextSlide} />
              <div className="text">
                <span>{image.title}</span>
                <p className="hot-spec">{image.specific} </p>
                <h6 className="desc">
                {image.description}
                </h6>
              </div>
              <div className="images">
                <img
                  src={image.image}
                  alt=""
                />
              </div>
            </div>
            </div> 
        :null}
            </div>

          )
        })
}
     
    </div> 








    {/* responsive */}

    <div className="flex media-block">  
    <Slider autoplay={true} autoplaySpeed={300}>
 {
   images.map((image,index)=>{
     return (
       <div  key={image+index}>
     
       <div>
       <div className="slides">
         <div className="images change-size-image">
           <img
             src={image.image}
             alt=""
             className="image-board"
           />
         </div>
       </div>
       </div> 
       </div>

     )
   })
}

</Slider>
</div> 
    </div>
  );
};

export default Slides;
