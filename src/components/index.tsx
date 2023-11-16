import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination } from 'swiper/modules';
import { data, home } from '../data';
import Slide from './Slide';
import Scrolls from './Scrolls';

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className} active${index}"></span>`
        },
    };

    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                spaceBetween={0}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                pagination={pagination}
            >
                <SwiperSlide>
                    <Slide data={home} />
                </SwiperSlide>
                <SwiperSlide><Scrolls /></SwiperSlide>
                {
                    data.map((itm: any) => <SwiperSlide key={itm.id}><Slide data={itm} /></SwiperSlide>)
                }
            </Swiper >
        </>
    );
}