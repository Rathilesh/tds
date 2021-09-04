import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive'
import Seo from '../componets/seo'
import { fetchAPI } from "../lib/api";

import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);


// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';
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

  console.log('isTablet ? = ', isExtraBigDisplay);
  console.log('isSmallDisplay ? = ', isSmallDisplay);
  console.log('isBigDisplay ? = ', isBigDisplay);
  console.log('isExtraBigDisplay ? = ', isExtraBigDisplay);

  // menu functions

  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function DuplicateActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    )
  }

  function ArchiveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

  function ArchiveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

  function MoveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

  function MoveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }

  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    )
  }

  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    )
  }

  // menu functionsss


  // pagination for swiper


  const pagination = {
    "clickable": true,
    "renderBullet": function (index, className) {

      return '<span class=\"' + className + '\ bg-yellow-600"></span>';

    }
  }



  console.log(blogs);
  ///
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

      <div id='top-menu' className=" z-10 w-full flex justify-between p-2 absolute bg-transparent md:pt-5 md:pb-5">

        <div className="hidden md:container md:mx-auto md:flex">
          <div id='logo-on-left-larger-screen' className="hidden md:flex md:w-1/4">
            <Image src="/assets/logo/TDS-LOGO-STR.png" width={200} height={50}></Image>
            {/* <h1 className="text-white sm:bg-pink-900 md:bg-green-600 xl:bg-red-600 2xl:bg-blue-600 font-bold text-shadow-lg text-xl">TRAVELISTA</h1> */}
          </div>

          <div id='menu-on-right-larger-screen' className="hidden md:flex md:justify-end md:w-full pr-10">
            <div id="menu-container" className="flex">
              <div className="flex flex-col">
                <a href="#" className="text-white text-base  md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal">Home</a>
                <div className="w-full border border-gray-100 mt-2"></div>
              </div>



              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">About</a>
              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">Destinations</a>

              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">Responsible Tourism</a>
              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">Blog</a>
              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">Contact us</a>
              <a href="#" className="text-white text-base md:text-xs 2xl:text-lg lg:text-base text-shadow-sm font-normal pl-5">Privacy Policy</a>
            </div>
          </div>
          <div id='top-menu-right-menu'>
            <div id='auth-menu' className="bg-white shadow-2xl drop-shadow-2xl rounded-lg w-full text-gray-800 flex p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>



        <div id='top-menu-left-icon' className="md:hidden align-middle items-center flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white items-center align-middle" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div id='top-menu-center-logo' className="md:hidden  align-middle items-center flex">
          <Image src="/assets/logo/TDS-LOGO-STR.png" width={250} height={50}></Image>
          {/* <h1 className="text-white sm:bg-pink-900 md:bg-green-600 xl:bg-red-600 2xl:bg-blue-600 font-bold text-shadow-lg text-xl">TRAVELISTA</h1> */}
        </div>
        <div id='top-menu-right-menu' className="md:hidden align-middle items-center flex">
          <div id='auth-menu' className="bg-white shadow-2xl drop-shadow-2xl rounded-lg w-full text-gray-800 flex p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
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
                      <img src="/assets/images/tds13.jpg" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
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
                      <img src="/assets/images/tds1.jpg" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
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
                      <img src="/assets/images/tds11.jpg" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
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
                      <img src="/assets/images/tds3.jpg" className="w-full h-40 md:h-60 object-cover rounded-xl"></img>
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

          <section className="text-gray-400 bg-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-col mt-5 md:mt-0">
                <div className="h-1 bg-gray-800 rounded overflow-hidden">
                  <div className="w-24 h-full bg-yellow-500" />
                </div>
                <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                  <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0 2xl:text-4xl 2xl:text-shadow-xl">From our Blog</h1>
                  <p className="sm:w-3/5 leading-relaxed text-gray-200 sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                </div>
              </div>

              <Swiper
                pagination={pagination}
                spaceBetween={isSmallDisplay ? 30 : 10}
                slidesPerView={isSmallDisplay ? 3 : 2}>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                  <SwiperSlide>
                    <div className="2xl:w-full lg:w-full md:w-full xl:w-full sm:mb-0 mb-6 hover:border-gray-500 hover:border">
                      <img alt="content" className="object-cover object-center h-full" src="/assets/images/tds2.jpg" className=" w-full h-40 md:h-60 2xl:h-60 object-cover rounded-xl" />
                      <h2 className="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
                      <p className="text-gray-200 leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed..</p>
                      <a className="text-yellow-400 inline-flex items-center mt-3">Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="2xl:w-full lg:w-full md:w-full xl:w-full sm:mb-0 mb-6">
                      <img alt="content" className="object-cover object-center h-full w-full" src="/assets/images/tds10.jpg" className=" w-full h-40 md:h-60 2xl:h-60 object-cover rounded-xl" />
                      <h2 className="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
                      <p className="text-gray-200 leading-relaxed mt-2">Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed..</p>
                      <a className="text-yellow-400 inline-flex items-center mt-3">Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="2xl:w-full lg:w-full md:w-full xl:w-full sm:mb-0 mb-6">
                      <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1597910037383-d79beb2b39c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className=" w-full h-40 md:h-60 2xl:h-60 object-cover rounded-xl" />
                      <h2 className="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
                      <p className="text-gray-200 leading-relaxed mt-2">Swag shoindegoitch literally meditation subway tile tumblr cold-pressed..</p>
                      <a className="text-yellow-400 inline-flex items-center mt-3">Read More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </section>




        </div>

        {/* Blog card end */}


        {/* Responcible Tourism */}





        <section className="text-gray-700 body-font bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">

              <h2 className="text-xs text-yellow-800 tracking-widest font-medium title-font mb-1">TDS PRESETS</h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700  2xl:text-4xl 2xl:text-shadow-md">Responsible Tourism</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>

            <Swiper
              pagination={pagination}
              spaceBetween={isTablet ? 20 : 10}
              slidesPerView={isSmallDisplay ? 2 : 1}>

              <div className="flex flex-wrap">
                <SwiperSlide>
                  <div className="2xl:w-full lg:w-full md:w-full xl:w-full px-2 py-1">
                    <img src="/assets/images/tds5.jpg" className="rounded-lg w-full h-60 2xl:h-72  object-cover shadow-2xl mb-5 hover:border-b-2 hover:border-gray-800"></img>
                    <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">The Catalyzer</h2>
                    <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <a className="text-yellow-600 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="xl:w-full 2xl:w-full lg:w-full  md:w-full px-2 py-1">
                    <img src="/assets/images/tds4.jpg" className="rounded-lg w-full h-60 2xl:h-72  object-cover shadow-2xl mb-5 hover:border-b-2 hover:border-gray-800"></img>

                    <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Neptune</h2>
                    <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <a className="text-yellow-600 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="xl:w-full 2xl:w-full lg:w-full  md:w-full px-2 py-1">
                    <img src="https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="rounded-lg w-full h-60 2xl:h-72  object-cover shadow-2xl mb-5 hover:border-b-2 hover:border-gray-800"></img>

                    <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">Neptune</h2>
                    <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    <a className="text-yellow-600 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>

            <button className="flex mx-auto mt-10 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">View More</button>
          </div>
        </section>


        {/* responsible card end */}


        {/* Footer Start */}


        <footer className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">

              <div className="lg:w-3/6 md:w-1/2 w-full px-4">
                <div id="responsibleHeading" className="flex justify-center md:justify-center pb-5 ">
                  <div id="responsibleHeading">
                    <Image src="/assets/logo/TDS-LOGO-STR.png" width={300} height={70}></Image>
                  </div>
                </div>
                <div id="footerSlogan" className="leading-3 p-2 flex justify-center pb-5">

                  {/* <div className="w-1/12"></div> */}
                  <div className="w-full"><span className="text-sm font-semibold text-gray-300 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o</span>
                  </div>
                  {/* <div className="w-1/12"></div> */}

                </div>
              </div>

              <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="hidden md:block lg:w-1/6 md:w-1/2 w-full px-4 md:text-center">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-gray-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-gray-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
              <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Placeholder</label>
                  <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-900 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded">Button</button>
                <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
                  <br className="lg:block hidden" />waistcoat green juice
                </p>
              </div>
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <a className="text-gray-400">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-400">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} stroke="none" />
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="bg-gray-800 bg-opacity-75">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-400 text-sm text-center sm:text-left">© 2021 TDS      </p>
              <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
            </div>
          </div>
        </footer>




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
