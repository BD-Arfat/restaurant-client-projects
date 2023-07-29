import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import image1 from '../../../../../src/assets/home/slide1.jpg'
import image2 from '../../../../../src/assets/home/slide2.jpg'
import image3 from '../../../../../src/assets/home/slide3.jpg'
import image4 from '../../../../../src/assets/home/slide4.jpg'
import image5 from '../../../../../src/assets/home/slide5.jpg'

const Catagory = () => {
    return (
        <div className='w-11/12 mx-auto justify-center'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper justify-center"
            >
                <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Catagory;