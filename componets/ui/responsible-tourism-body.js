import { useMediaQuery } from 'react-responsive'
import { getStrapiMediaSingle } from '../../lib/media'

const ResponsibleTourismBody = ({cardDetails}) => {
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
  
    cardDetails.desc = cardDetails.desc.length > 100?cardDetails.desc.substring(0,100)+'...':cardDetails.desc
    cardDetails.title = cardDetails.title.length > 50?cardDetails.desc.substring(0,50)+'...':cardDetails.title
    let imageSize = (isTablet == true) ? cardDetails.image.medium.url:(isExtraBigDisplay == true )?cardDetails.image.large.url:cardDetails.image.small.url
    return (

        <div className="2xl:w-full lg:w-full md:w-full xl:w-full px-2 py-1">
            <img className="rounded-lg w-full h-60 2xl:h-72  object-cover shadow-2xl mb-5 hover:border-b-2 hover:border-gray-800" src={getStrapiMediaSingle(imageSize)}></img>
            <h2 className="text-lg sm:text-xl text-gray-600 font-medium title-font mb-2">{cardDetails.title}</h2>
            <p className="leading-relaxed text-base mb-4">{cardDetails.desc}</p>
            <a className="text-yellow-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </div> 
                  
    );
};

export default ResponsibleTourismBody;