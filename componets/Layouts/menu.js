import Image from 'next/image'
const Menu = () => {
  return (
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
  )

}
export default Menu;

