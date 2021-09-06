import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from 'react-responsive'
import Seo from '../componets/seo'
import { fetchAPI } from "../lib/api"
import Blog from '../componets/blog'
import Footer from '../componets/Layouts/footer'
import Menu from '../componets/Layouts/menu'
import ResponsibleTourism from '../componets/responsible-tourism'
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import '../styles/Home.module.css';

const Home = ({ blogs, properties, homepage }) => {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)

      }

      if (window.scrollY > 100) {
        //hide menu
        var element = document.getElementById("top-menu");
        element.classList.remove("absolute");
        element.classList.remove("bg-transparent");
        element.classList.remove("z-10");
        element.classList.add("bg-gray-800");
        element.classList.add("fixed");
        element.classList.add("z-50");
      } else {

        var element = document.getElementById("top-menu");
        element.classList.add("absolute");
        element.classList.add("bg-transparent");
        element.classList.add("z-10");
        element.classList.remove("bg-gray-800");
        element.classList.remove("fixed");
        element.classList.remove("z-50");

      }

    })
  })

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

    <div>
      <Seo seo={homepage.SEO} />
      {/* Add menu in postion absolute */}

      <style global jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          text-align: right;
          line-height: 20px;
          font-size: 12px;
          color: #000;
          opacity: 1;
          background: rgba(0, 0, 0, 0.2);
        }
        
        .swiper-pagination-bullet-active {
          color: #fff;
          background: #f5ae33 !important;
        }

       .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
          bottom: 0px;
          left: 0;
          width: 100%;
          margin-top:10px;
          text-align:right;
      }
      `}</style>

      <Menu />
      {/* Add home screen imagewith screen height */}
      <div id="loadingScreen1" className="relative bg-white">

        {/* { isSmallDisplay && <h1>Messages: {count}</h1>} */}
        {/* <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" className="w-full h-screen object-cover"></img> */}
        <img src="/assets/images/main.jpg" className="w-full h-screen object-cover"></img>
        {
          // isSmallDisplay
          //  ?
          // <Image src="/assets/images/largescreenhomepageimage.jpg" layout='fill' alt="Hill" className="w-full h-screen object-cover" />
          // <Image src="/assets/images/largescreenhomepageimage.jpg" alt="tds" layout='fill' className="w-full h-screen object-cover" />
          //  <img src="/assets/images/largescreenhomepageimage.jpg" className="w-full h-screen object-cover"></img>
          //   : <img src="/assets/images/largescreenhomepageimage.jpg" className="w-full h-screen object-cover"></img>
          // isTablet && isBigDisplay && isExtraBigDisplay && isSmallDisplay ?
          //   <img src="https://images.unsplash.com/photo-1565674484371-a90094649d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className="w-full h-screen object-cover"></img>
          //   :
          //   <img src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80" className="w-full h-screen object-cover"></img>
          // isExtraBigDisplay ?
          //   <img src="https://images.unsplash.com/photo-1565674484371-a90094649d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className="w-full h-screen object-cover"></img>
          //   :
          //   isSmallDisplay
          //     ? <img src="https://images.unsplash.com/photo-1565674484371-a90094649d30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className="w-full h-screen object-cover"></img>
          //     : <img src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80" className="w-full h-screen object-cover"></img>
        }

        <div id="main-typography-position" className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:container">
          <div id="main-typography" className="p-2">
            <h1 id="main-heading" className='text-shadow-xl font-bold text-white text-4xl md:text-4xl sm:text-5xl md:mb-3 2xl:text-7xl '>Welcome to Tour de South</h1>
            <h1 className="text-shadow-sm font-semibold text-white text-1xl  md:mb-3 2xl:text-4xl">lorem ipsume dolar emit </h1>
            <button className="bg-yellow-600 text-center font-normal text-white px-4 py-1 2xl:px-6 2xl:py-3 rounded-full shadow-2xl mt-2 font-thin text-sm flex 2xl:text-2xl">Call to Book
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 2xl:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>

          </div>

        </div>

        <div id="main-chips-position" className="absolute w-full bottom-0 md:bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:container">

          <div id="main-chips" className="p-2 flex md:hidden">
            <div className="w-10/12">
              <h6 className="text-shadow-lg  text-white text-xl">Choose your interest</h6>
            </div>
            <div className="w-1/12 flex align-middle justify-around items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div id="main-chip-slider" className="md:flex">


            <div className="hidden w-1/4 align-middle text-center md:flex md:justify-center items-center">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>

              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg> */}

            </div>
            <div className="md:w-1/2 p-3">
              <Swiper
                spaceBetween={10}
                slidesPerView={isTablet ? 4 : isSmallDisplay ? 4 : 3}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="">
                    <button className="  outline-none 2xl:h-14 w-full bg-yellow-600 text-center text-white px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex  justify-around items-center">
                      <Image src="/assets/icons/mountain.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-white align-middle items-center 2xl:text-xl">Hill</div>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <button className=" outline-none 2xl:h-14 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/ocean-waves.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 50 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Beach</div>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <button className=" outline-none 2xl:h-14 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Forest</div>
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="">
                    <button className=" outline-none 2xl:h-14 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Forest</div>
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="">
                    <button className=" outline-none 2xl:h-14 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Forest</div>
                    </button>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className="">
                    <button className=" outline-none 2xl:h-14 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Forest</div>
                    </button>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div className="">
                    <button className="2xl:h-16 w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                      <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={isExtraBigDisplay ? 40 : 25} />
                      <div className="font-semibold text-black align-middle items-center 2xl:text-xl">Forest</div>
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="hidden w-1/4 align-middle text-center md:flex md:justify-center items-center	">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg> */}
            </div>

          </div>
        </div>



      </div >

      <div id="loadingScreen2" className="w-full">

        <div className="md:relative md:h-80">

          <div className="md:absolute md:top-40 md:left-1/2 md:container md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:bg-white md:rounded-lg md:shadow-2xl">
            {/* <div className="hidden md:flex md:p-2 2xl:justify-center 2xl:p-6">
              <h4 className="text-lg font-semibold text-shadow-md text-gray-600 2xl:text-4xl ">Destinations</h4>
            </div> */}
            <div className="md:flex  md:w-full ">

              <Swiper
                spaceBetween={isTablet ? 20 : 10}
                slidesPerView={isSmallDisplay ? 3 : isTablet ? 2 : 1}
              // pagination={pagination}
              // onSlideChange={() => console.log('slide change')}
              //onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div id="propertyCard" className="md:w-full">
                    {/* card heading and navigation */}
                    {/* <div id="cardHeading" className="flex justify-between p-3">
                      <div id="cardHeading">
                        <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Hill Stays</h4>
                      </div>
                      <div id="cardControlls">
                        <div className="flex align-middle justify-around items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>

                        </div>

                      </div>
                    </div> */}
                    {/* property image */}
                    <div id="cardImage" className="pt-3 pl-3 pr-3 pb-2">
                      <img src="/assets/images/placeholder.png" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
                    </div>
                    {/* properties description */}

                    <div id="cardDescription" className="pl-3 pr-3 pb-1 flex justify-between">
                      <div id="leftSideDecription">

                        <div id="cardHeading" className="flex justify-between">
                          <div id="cardHeading">
                            <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Hill Stays</h4>
                          </div>
                        </div>

                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">Form stay in forest</h5>
                        <h4 className="text-sm font-bold text-shadow text-gray-800 pb-1">Property Name goes here</h4>
                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">5 Guests, 2 Bedroom , 4 Beds , 2 Bathroom </h5>


                      </div>
                      <div id="rightSideIcon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current text-red-600" viewBox="0 0 20 20" >
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>

                      </div>


                    </div>

                    <div id="cardControls" className="pl-3 pr-3 pb-3 flex justify-between">
                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        <span className="font-bold">₹ 4,678 / Night</span>&nbsp; Call to Book
                      </button>

                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        More
                      </button>


                    </div>

                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div id="propertyCard" className="md:w-full">
                    {/* card heading and navigation */}
                    {/* <div id="cardHeading" className="flex justify-between p-3">
                      <div id="cardHeading">
                        <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Hill Stays</h4>
                      </div>
                      <div id="cardControlls">
                        <div className="flex align-middle justify-around items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>

                        </div>

                      </div>
                    </div> */}
                    {/* property image */}
                    <div id="cardImage" className="pt-3 pl-3 pr-3 pb-2">
                      <img src="/assets/images/placeholder.png" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
                    </div>
                    {/* properties description */}

                    <div id="cardDescription" className="pl-3 pr-3 pb-1 flex justify-between">
                      <div id="leftSideDecription">

                        <div id="cardHeading" className="flex justify-between">
                          <div id="cardHeading">
                            <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Hill Stays</h4>
                          </div>
                        </div>

                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">Form stay in forest</h5>
                        <h4 className="text-sm font-bold text-shadow text-gray-800 pb-1">Property Name goes here</h4>
                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">5 Guests, 2 Bedroom , 4 Beds , 2 Bathroom </h5>


                      </div>
                      <div id="rightSideIcon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 fill-current text-red-600" viewBox="0 0 20 20" >
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>

                      </div>


                    </div>

                    <div id="cardControls" className="pl-3 pr-3 pb-3 flex justify-between">
                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        <span className="font-bold">₹ 4,678 / Night</span>&nbsp; Call to Book
                      </button>

                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        More
                      </button>


                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div id="propertyCard">
                    {/* card heading and navigation */}
                    {/* <div id="cardHeading" className="flex justify-between p-3">
                      <div id="cardHeading">
                        <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Moneymoon Stays</h4>
                      </div>
                      <div id="cardControlls">
                        <div className="flex align-middle justify-around items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>

                        </div>

                      </div>
                    </div> */}
                    {/* property image */}
                    <div id="cardImage" className="pt-3 pl-3 pr-3 pb-2">
                      <img src="/assets/images/placeholder.png" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
                    </div>
                    {/* properties description */}

                    <div id="cardDescription" className="pl-3 pr-3 pb-1 flex justify-between">
                      <div id="leftSideDecription">

                        <div id="cardHeading" className="flex justify-between">
                          <div id="cardHeading">
                            <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Hill Stays</h4>
                          </div>
                        </div>

                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">Carlm stay</h5>
                        <h4 className="text-sm font-bold text-shadow text-gray-800 pb-1">Property Name goes here</h4>
                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">5 Guests, 2 Bedroom , 4 Beds , 2 Bathroom </h5>


                      </div>
                      <div id="rightSideIcon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" >
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>

                      </div>


                    </div>

                    <div id="cardControls" className="pl-3 pr-3 pb-3 flex justify-between">
                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        <span className="font-bold">₹ 1,869 / Night</span>&nbsp; Call to Book
                      </button>

                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        More
                      </button>


                    </div>

                  </div>
                </SwiperSlide>



                <SwiperSlide>
                  <div id="propertyCard">
                    {/* card heading and navigation */}
                    {/* <div id="cardHeading" className="flex justify-between p-3">
                      <div id="cardHeading">
                        <h4 className="text-lg font-semibold text-shadow text-gray-600 ">Moneymoon Stays</h4>
                      </div>
                      <div id="cardControlls">
                        <div className="flex align-middle justify-around items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>

                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>

                        </div>

                      </div>
                    </div> */}
                    {/* property image */}
                    <div id="cardImage" className="pt-3 pl-3 pr-3 pb-2">
                      <img src="/assets/images/placeholder.png" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
                    </div>
                    {/* properties description */}

                    <div id="cardDescription" className="pl-3 pr-3 pb-1 flex justify-between">
                      <div id="leftSideDecription">

                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">Carlm stay</h5>
                        <h4 className="text-sm font-bold text-shadow text-gray-800 pb-1">Property Name goes here</h4>
                        <h5 className="text-sm font-semibold text-shadow text-gray-600 pb-1">5 Guests, 2 Bedroom , 4 Beds , 2 Bathroom </h5>


                      </div>
                      <div id="rightSideIcon">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" >
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>

                      </div>


                    </div>

                    <div id="cardControls" className="pl-3 pr-3 pb-3 flex justify-between">
                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        <span className="font-bold">₹ 1,869 / Night</span>&nbsp; Call to Book
                      </button>

                      <button className="bg-white-600 text-center border border-gray-300  text-black px-4 py-1 rounded-full shadow-2xl mt-2 font-normal text-sm flex">
                        More
                      </button>


                    </div>

                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>

        {/* Blog Card */}

        <div id="blogCard" className="bg-gray-600 md:pt-28">
          {/* card heading and navigation */}

          {/* <div className="md:flex md:container md:mx-auto md:w-full">
            <div id="blogHeading" className="flex justify-between p-3 md:w-full">
              <div id="blogHeading">
                <h4 className="text-lg font-semibold text-shadow text-white  2xl:text-4xl 2xl:text-shadow-xl">From our Blog</h4>
              </div>
              <div id="blogControlls">
                <div className="flex align-middle justify-around items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>

                </div>

              </div>
            </div>
          </div> */}
          {/* property image */}

          <Blog blogs={blogs} />



        </div>

        {/* Blog card end */}


        {/* Responcible Tourism */}





        <ResponsibleTourism blogs={blogs} />


        {/* responsible card end */}


        {/* Footer Start */}


        <Footer />



        {/* footer end */}




      </div>


    </div >
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogs, properties, homepage] = await Promise.all([
    fetchAPI("/blog-posts"),
    fetchAPI("/properties"),
    fetchAPI("/home-page"),
  ]);

  return {
    props: { blogs, properties, homepage },
    revalidate: 1,
  };
}
export default Home;
