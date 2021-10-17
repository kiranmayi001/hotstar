import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Header from "./Header";
import Media from "./Media";
import MediaCard from "./MediaCard";
import Slides from "./Slides";
import axios from 'axios'
import Host from "./Host";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = () => {
    const [movie,setmovie]=useState([]);
    const [poster,setPoster]=useState([])
  const [mediaCard, setMediaCard] = useState([]);
  const [media, setMedia] = useState([]);
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);
  const [trailerUrl,settrailerUrl]=useState('');
  const image_url='https://image.tmdb.org/t/p/original';


//   useEffect(()=>{
//       async function fetchdata(){
//           const res=await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=eb5e7f88c9a39c6d8b4f9a47e8eb8ec2')
//           setmovie(res.data.results);
         
//       }
//       fetchdata();

//       let poter = movie.filter((poter)=>{
//        console.log(poter)
//         return 'poster_path' in poter
//       })
    
// setPoster(poter)
//     console.log(poter)
//     console.log(poster)
  
//       settrailerUrl('');
//   })
  // console.log(poster)

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      setMovies(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("shows").onSnapshot((snapshot) => {
      setShows(snapshot.docs.map((doc) => doc.data()));
    });
  });

  useEffect(() => {
    db.collection("media-card").onSnapshot((snapshot) => {
    
      setMedia(snapshot.docs.map((doc) => doc.data()));
    });
    
  });
  // db.collection("media-card").onSnapshot((snapshot) => {
    
  //  console.log(snapshot.docs)
  // });

  // console.log(media);

  useEffect(() => {
    db.collection("media").onSnapshot((snapshot) => {
      setMediaCard(snapshot.docs.map((doc) => doc.data()));
    });
  });
  return (
    
    <div className="app">
      <Header />
      <Slides />
      <div className="continuewatch">
        <span>Continue Watching</span>

        <div className="flex-continue">

          {mediaCard.map((media) => (
            <MediaCard img={media.img} />
          ))}
        </div>
  
      </div>
    
      <div className="continuewatch">
        <span>Trending & Latest Movies</span>
      
        <div className="flex-continue">
        {/* <Slider > */}
          {media.map((media) => (
            <Media img={media.img} />
          ))}
            {/* </Slider> */}
        </div>
      
      </div>
      <div className="continuewatch">
        <span>Shows Recommended For You</span>
        <div className="flex-continue">
          {shows.map((shows) => (
            <Media img={shows.img} />
          ))}
        </div>
      </div>
      {/* <div className="continuewatch">
      <div className="flex-continue">
        {poster.map((poster)=>{
          console.log(poster.poster_path);
          <Host img={poster.poster_path}/>

        })}
           </div>
        </div> */}
      <div className="continuewatch">
        <span>Movies Recommended For You</span>
        <div className="flex-continue">
          {movies.map((movies) => (
            <Media img={movies.img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
