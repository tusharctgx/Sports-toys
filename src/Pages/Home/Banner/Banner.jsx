import img from '../../../assets/Banner/1.jpg'
import img2 from '../../../assets/Banner/2.jpg'
import img3 from '../../../assets/Banner/3.webp'

const Banner = () => {
  return (
   
        <div className="carousel w-full h-full">
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img} className="w-full h-full rounded-2xl" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
      <img src={img2} className="w-full h-full rounded-2xl " />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className="w-full h-full rounded-2xl" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div> 
  </div>
   
  
  );
};

export default Banner;