import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
export default function Home() {

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

  return (
    <div>
      {/* Add menu in postion absolute */}
      <div id='top-menu' className="z-10 w-full flex justify-between p-2 absolute bg-transparent">
        <div id='top-menu-left-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div id='top-menu-center-logo'>
          <h1 className="text-white font-bold text-shadow-lg text-xl">TRAVELISTA</h1>
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
      {/* 
      <AwesomeSlider>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider> */}
      {/* Add home screen imagewith screen height */}
      <div id="loadingScreen1" className="relative">
        <img src="https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80" className="w-full h-screen object-cover"></img>

        {/* Add center text and of this image */}
        <div className="z-20 absolute  top-1/3 left-5 -translate-x-1/2 -translate-y-1/2">
          <h1 id="main-heading" className='text-shadow-xl font-bold text-white text-4xl'>Welcome to Travelista</h1>
          <h1 className="text-shadow-sm font-semibold text-white text-1xl">lorem ipsume dolar emit </h1>
          <button className="bg-yellow-600 text-center font-normal text-white px-4 py-1 rounded-full shadow-2xl mt-2 font-thin text-sm flex">Call to Book
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
        {/* Add scrollable interest buttons */}
        <div id="scrollable-bottom-div" className="flex z-20 absolute bottom-20 w-screen pl-5">
          <div className="w-10/12">
            <h6 className="text-shadow-lg  text-white text-xl">Choose your interest</h6>
          </div>
          <div className="w-1/12 flex align-middle justify-around items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>

          </div>

        </div>

        <div id="scrollable-bottom-div" className="z-20 absolute bottom-4 w-screen p-3  justify-items">
          {/* <div className="w-5"></div> */}

          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="">
                <button className="w-full bg-yellow-600 text-center text-white px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex  justify-around items-center">
                  <Image src="/assets/icons/mountain.svg" alt="Hill" width={40} height={25} />
                  <div className="font-semibold text-white align-middle items-center">Hill</div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <button className="w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                  <Image src="/assets/icons/ocean-waves.svg" alt="Hill" width={40} height={25} />
                  <div className="font-semibold text-black align-middle items-center">Beach</div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <button className="w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                  <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={25} />
                  <div className="font-semibold text-black align-middle items-center">Forest</div>
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <button className="w-full bg-white text-center text-black px-4 py-2 rounded-full shadow-2xl mt-2 font-thin text-sm flex justify-around items-center">
                  <Image src="/assets/icons/forest-tree.svg" alt="Hill" width={40} height={25} />
                  <div className="font-semibold text-black align-middle items-center">Honeymoon</div>
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="w-5"></div> */}

        </div>

      </div>

      <div id="loadingScreen2" className="w-full">

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div id="propertyCard">
              {/* card heading and navigation */}
              <div id="cardHeading" className="flex justify-between p-3">
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
              </div>
              {/* property image */}
              <div id="cardImage" className="pl-3 pr-3 pb-2">
                <img src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" className="w-full h-40 object-cover rounded-xl"></img>
              </div>
              {/* properties description */}

              <div id="cardDescription" className="pl-3 pr-3 pb-1 flex justify-between">
                <div id="leftSideDecription">

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
              <div id="cardHeading" className="flex justify-between p-3">
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
              </div>
              {/* property image */}
              <div id="cardImage" className="pl-3 pr-3 pb-2">
                <img src="https://images.unsplash.com/photo-1576604303800-f2435c2db6bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-40 object-cover rounded-xl"></img>
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

        {/* Blog Card */}

        <div id="blogCard" className="bg-gray-600">
          {/* card heading and navigation */}
          <div id="blogHeading" className="flex justify-between p-3">
            <div id="blogHeading">
              <h4 className="text-lg font-semibold text-shadow text-white">From our Blog</h4>
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
          {/* property image */}


          <div id="blogImage" className="pl-3 pr-3 pb-5  w-full flex justify-items">

            <Swiper
              spaceBetween={10}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>

                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80" className=" w-full h-40 object-cover rounded-xl"></img>
                  <span className="text-xs font-semibold text-shadow text-white">Lorem ipsum dummy text ...</span>
                  <div className="flex justify-between align-middle items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <span className="text-xs font-semibold text-shadow text-white">July 14th 2021</span>
                    <button className="bg-white text-center border border-gray-300  text-black rounded-full shadow-2xl px-1 font-normal text-sm">
                      Read
                </button>

                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1568454537842-d933259bb258?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-40 object-cover rounded-xl"></img>
                  <span className="text-xs font-semibold text-shadow text-white">Lorem ipsum dummy text ...</span>
                  <div className="flex justify-between align-middle items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <span className="text-xs font-semibold text-shadow text-white">July 14th 2021</span>
                    <button className="bg-white text-center border border-gray-300  text-black rounded-full shadow-2xl px-1 font-normal text-sm">
                      Read
                </button>

                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="w-full">
                  <img src="https://images.unsplash.com/photo-1597910037383-d79beb2b39c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-full h-40 object-cover rounded-xl"></img>
                  <span className="text-xs font-semibold text-shadow text-white">Lorem ipsum dummy text ...</span>
                  <div className="flex justify-between align-middle items-center">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <span className="text-xs font-semibold text-shadow text-white">July 14th 2021</span>
                    <button className="bg-white text-center border border-gray-300  text-black rounded-full shadow-2xl px-1 font-normal text-sm">
                      Read
                </button>

                  </div>
                </div>
              </SwiperSlide>
            </Swiper>



          </div>


        </div>

        {/* Blog card end */}


        {/* Responcible Tourism */}

        <div id="responsibleCard" className="bg-white">
          {/* card heading and navigation */}
          <div id="responsibleHeading" className="flex justify-between p-3">
            <div id="responsibleHeading">
              <h4 className="text-lg font-semibold text-shadow text-gray-600">Responsible Tourism</h4>
            </div>
            <div id="responsibleControlls">
              <div className="flex align-middle justify-around items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-black" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>

              </div>

            </div>
          </div>
          {/* property image */}

          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>

              <div id="responsibleImage" className="pl-3 pr-3 pb-5  grid grid-cols-1 gap-2 justify-items">
                <div className=" leading-3">
                  <img src="https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className=" w-full h-40 object-cover rounded-xl mb-3"></img>

                  <div className="flex  justify-start align-middle items-center mb-2">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-600" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <span className="text-xs font-semibold text-shadow text-gray-600 pl-3 ">July 14th 2021</span>


                  </div>

                  <span className="text-xs font-semibold text-gray-600	">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</span>

                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div id="responsibleImage" className="pl-3 pr-3 pb-5  grid grid-cols-1 gap-2 justify-items">
                <div className=" leading-3">
                  <img src="https://images.unsplash.com/photo-1500621242946-fc62f4875073?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className=" w-full h-40 object-cover rounded-xl mb-3"></img>

                  <div className="flex  justify-start align-middle items-center mb-2">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-600" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                    <span className="text-xs font-semibold text-shadow text-gray-600 pl-3 ">Jan 15th 2021</span>


                  </div>

                  <span className="text-xs font-semibold text-gray-600	">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</span>

                </div>

              </div>
            </SwiperSlide>
          </Swiper>



        </div>

        {/* responsible card end */}




        {/* Footer Start */}

        <div id="footer" className="bg-gray-100">
          {/* card heading and navigation */}
          <div id="responsibleHeading" className="flex justify-center pt-4">
            <div id="responsibleHeading">
              <h4 className="text-lg font-semibold text-shadow text-gray-600">TRAVELISTA</h4>
            </div>
          </div>
          <div id="footerSlogan" className="leading-3 p-2 flex">

            <div className="w-1/12"></div>
            <div className="w-10/12"><span className="text-xs font-semibold text-gray-600 text-justify">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
            </div>
            <div className="w-1/12"></div>

          </div>

          <div id="footerIcons" className="leading-3 p-2 flex">

            <div className="w-2/12"></div>
            <div className="w-8/12 flex justify-around">
              <Image src="/assets/icons/fb.png" alt="Hill" width={30} height={30} />
              <Image src="/assets/icons/insta.png" alt="Hill" width={30} height={30} />
              <Image src="/assets/icons/twitter.png" alt="Hill" width={30} height={30} />
              <Image src="/assets/icons/link.png" alt="Hill" width={30} height={30} />
            </div>
            <div className="w-2/12"></div>

          </div>

          <div id="bottomFooter" className="p-3 flex bg-gray-900 justify-around">
            <a href="#" className="font-bold text-xs text-white">HOME</a>
            <a href="#" className="font-bold text-xs text-white">ABOUT US</a>
            <a href="#" className="font-bold text-xs text-white">OFFERS</a>
            <a href="#" className="font-bold text-xs text-white">NEWS</a>
            <a href="#" className="font-bold text-xs text-white">CONTACT</a>

          </div>
          <div id="bottomFooterCoyRight" className="pb-4 flex bg-gray-900 justify-around">
            <span className="font-thin text-xs text-white">Copyright @2021 All rights reserved</span>
          </div>



        </div>

        {/* footer end */}




      </div>


    </div>
  )
}
