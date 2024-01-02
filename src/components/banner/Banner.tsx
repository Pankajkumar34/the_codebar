import Bannerimg from '../../assets/images/01.81019c97.jpg';
import './banner.css';
import { SliderComp } from '../slider/slider';
import { ButtonFifty } from '../buttons/button';
import { InstaSvg } from '../iconsSvg/iconsSvg';
const Banner = () => {
    return (

        <>
            <div className='main_banner' style={{ backgroundImage: `url(${Bannerimg})` }}>
                <div className='continer'>
                 <div className='w-[100%]'>
                 <div className='banner_heading font-Roboto w-[50%]'>
                        <h2 className='text-[53px]'>Grow Your Business With Us</h2>
                        <p>Businex always try to provide the best Business Solutions for Clients to grow up their Business very sharply and smoothly.</p>
                        <div className='mt-10'>

                        <ButtonFifty btnName="Contact Us"/>
                        </div>
<div className='icons_box'>
    <InstaSvg/>
</div>

                    </div>
                   
                 </div>

                </div>
            </div>

            <SliderComp />
        </>
    )
}
export default Banner;