import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import CardBody from '../componets/ui/responsible-tourism-body'
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

const ResponsibleTourism = ({ dataRT }) => {
  console.log(dataRT)
  const isTablet = useMediaQuery({
    query: '(min-width: 640px)'
  })
  const isSmallDisplay = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isBigDisplay = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const isExtraBigDisplay = useMediaQuery({
    query: '(min-width: 1536px)'
  })
  return (
    <section className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">

          <h2 className="text-xs text-yellow-800 tracking-widest font-medium title-font mb-1">TDS PRESENTS</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700  2xl:text-4xl 2xl:text-shadow-md">Responsible Tourism</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>

        <Swiper
          pagination={pagination}
          spaceBetween={isTablet ? 20 : 10}
          slidesPerView={isSmallDisplay ? 2 : 1}>

          <div className="flex flex-wrap">
            {dataRT.map((value, index) => {
              let cardDetails = { "title": value.post_title, "desc": value.post_description, "image": value.files[0].file[0].formats };
              return <SwiperSlide key={value.id}><CardBody key={value.id} cardDetails={cardDetails} /></SwiperSlide>
            })}
            
          </div>
        </Swiper>

        <button className="flex mx-auto mt-10 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">View More</button>
      </div>
    </section>
  )
}
export default ResponsibleTourism;