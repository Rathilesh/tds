
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import { getStrapiMediaSingle } from '../../lib/media'



const CardBody = ({ cardDetails }) => {
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

  cardDetails.desc = cardDetails.desc.length > 100 ? cardDetails.desc.substring(0, 100) + '...' : cardDetails.desc
  cardDetails.title = cardDetails.title.length > 50 ? cardDetails.desc.substring(0, 50) + '...' : cardDetails.title
  let imageSize = (isTablet == true) ? cardDetails.image.medium.url : (isExtraBigDisplay == true) ? cardDetails.image.large.url : cardDetails.image.small.url
  return (

    <div className="2xl:w-full lg:w-full md:w-full xl:w-full sm:mb-0 mb-6 hover:border-gray-500 hover:border">
      <Image alt="content" className="object-cover object-center h-full"
        src={ getStrapiMediaSingle(imageSize) } layout="fill"
        className=" w-full h-40 md:h-60 2xl:h-60 object-cover rounded-xl" />
      <h2 className="text-xl font-medium title-font text-white mt-5">{cardDetails.title}</h2>
      <p className="text-gray-200 leading-relaxed mt-2">{cardDetails.desc}</p>
      <a className="text-yellow-400 inline-flex items-center mt-3">Read More
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>

  );
};

export default CardBody;