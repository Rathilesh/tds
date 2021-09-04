import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";

const Seo = ({ seo }) => {
    const { globalseo, SiteName } = useContext(GlobalContext);


    const seoWithDefaults = {
        ...globalseo[0],
        ...seo,
    };

    console.log('SEO componets executed')
    console.log(seoWithDefaults)

    const fullSeo = {
        ...seoWithDefaults,
        // Add title suffix
        metaTitle: `${seoWithDefaults.MetaTitle} | ${SiteName}`,
        // Get full image URL
        shareImage: getStrapiMedia(seoWithDefaults.ShareImage[0]) //getStrapiMedia(
    };

    return (
        <Head>
            {fullSeo.metaTitle && (
                <>
                    <title>{fullSeo.metaTitle}</title>
                    <meta property="og:title" content={fullSeo.metaTitle} />
                    <meta name="twitter:title" content={fullSeo.metaTitle} />
                </>
            )}
            {fullSeo.MetaDescription && (
                <>
                    <meta name="description" content={fullSeo.MetaDescription} />
                    <meta property="og:description" content={fullSeo.MetaDescription} />
                    <meta name="twitter:description" content={fullSeo.MetaDescription} />
                </>
            )}
            {fullSeo.shareImage && (
                <>
                    <meta property="og:image" content={fullSeo.shareImage} />
                    <meta name="twitter:image" content={fullSeo.shareImage} />
                    <meta name="image" content={fullSeo.shareImage} />
                </>
            )}
            {fullSeo.article && <meta property="og:type" content="article" />}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default Seo;