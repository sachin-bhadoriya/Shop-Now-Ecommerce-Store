import React from 'react'
import { blogs } from '../../../assets/data'
import "./blogItems.css"

const BlogItems = () => {
  return (
    <>
      <div className="container-fluid blogContainer">
        <p className='blogMainTitle'>From the Blog</p>
        <div className="row">
          {blogs.slice(-4).reverse().map((blog, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 my-3" key={index}>
              <div className="blogCards">
                <img className="blogImage" src={blog.image} width={100} alt="img" />
                <p className="blogTitle">
                  {blog.title.toLowerCase().split(" ").slice(0, 9).join(" ")}...
                </p>
                <p className="blogDescription">
                  {blog.description.split(" ").slice(0, 25).join(" ")}...
                </p>
                <p className="blogReadMore links">Read More</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default BlogItems
