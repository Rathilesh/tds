import { Swiper, SwiperSlide } from 'swiper/react'
import CardBody from '../componets/ui/card-body'
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import '../styles/Home.module.css';
const pagination = {
  "clickable": true,
  "renderBullet": function (index, className) {

    return '<span class=\"' + className + '\ bg-yellow-600"></span>';

  }
}

export default function Blogdisplaypage({ blogs }) {
    return (
        <div>
            {blogs.map((value, index) => {
              let cardDetails = { "title": value.post_name, "desc": value.post_content, "image": value.files[0].file[0].formats };
              //  console.log(blogs);
              return <SwiperSlide key={value.id}><CardBody key={value.id} cardDetails={cardDetails} /></SwiperSlide>
            })}
        </div>
    )
}
