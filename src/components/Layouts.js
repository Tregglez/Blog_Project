
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import { Link } from "react-router-dom";
import BlogList from "./BlogList";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

function Layouts() {
  const blogPostProps = {
    title: 'My Blog Post',
    text: 'Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...Here is some text about my blog post...',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    imageUrls: ['path_to_image1.jpg', 'path_to_image2.jpg', 'path_to_image3.jpg'],
  };

  const selectedLayout = 'layout1'; // This would be dynamic in a real app

  return (
     <div className="home">
      <div className="small-nav">
        <div className="nav-links">
          <Link to='/' className="title-link">blog</Link>
          <Link to='/' className="title-link">about</Link>
          <Link to='/' className="title-link">contact</Link>
        </div>
      </div>
   
      {selectedLayout === 'layout1' && <Layout1 {...blogPostProps} />}
      {selectedLayout === 'layout2' && <Layout2 {...blogPostProps} />}
      {selectedLayout === 'layout3' && <Layout3 {...blogPostProps} />}
    </div>
  );
}

export default Layouts;
