import React from 'react'
import Footer from '../componets/Layouts/footer'
import Menu from '../componets/Layouts/menu'
import Blogdisplaypage from '../componets/Blogdisplaypage'
import { fetchAPI } from "../lib/api"

export default function Blogs({ blogs }) {
    console.log(blogs);
    return (
        <div>
            <Menu />
            <Blogdisplaypage blogs = { blogs } />
            <Footer />    
        </div>
    )
}
export async function getStaticProps() {
  // Run API calls in parallel
  const [blogs] = await Promise.all([
    fetchAPI("/blog-posts")
    
  ]);

  return {
    props: { blogs},
    revalidate: 1,
  };
}
