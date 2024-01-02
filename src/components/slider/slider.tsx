


interface homeProps {
    bg_image: string,
    heading: string,
    info: string
}



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bannerimg from '../../assets/images/01.81019c97.jpg';

export  const  SliderComp=()=> {
 
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        
        <div className='bg-cover' style={{backgroundImage:`url(${Bannerimg})`}}>
            <div className='continer'>
                
                    <div className='banner_heading font-Roboto w-[50%]'>
                    <h2 className='text-[53px]'>Grow Your Business With Us</h2>
                    <p>Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.</p>
                    </div>
                
            </div>
        </div>
        <div className='' style={{backgroundImage:`url(${Bannerimg})`}}>
            <div className='continer'>
                
                    <div className='banner_heading font-Roboto w-[50%]'>
                    <h2 className='text-[53px]'>Grow Your Business With Us</h2>
                    <p>Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.</p>
                    </div>
                
            </div>
        </div>

     
        </Slider>
      </div>
    );
  }

