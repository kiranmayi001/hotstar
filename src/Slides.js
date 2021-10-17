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
    image:" https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8735/958735-h"
  },
  {
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3893/1063893-h-62576885fa3f"
  },
  {
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1372/871372-h"
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
    <div className="flex">  
 
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
                <span>Criminal Justice : Behind Closed Doors</span>
                <p className="hot-spec">Hotstar Specials · Crime </p>
                <h6 className="desc">
                  Aditya is a cab driver who has a one-night stand with his passenger
                  Sanaya. When he wakes up, Sanaya is murdered. He finds himself in a
                  pool of her blood, and Sanaya has multiple stab wounds. He leaves the
                  crime scene, but meets with an accident and is taken to the police
                  station. Initially, Madhav Mishra is interested in taking the case but
                  later on Mandira Mathur takes the case. While she is successful in
                  getting Aditya freed from charge of a rape, she fails to acquit him
                  form the murder charge. His lawyer Nikhat Hussain along with Madhav
                  Mishra , also tries to save him.
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
  );
};

export default Slides;
