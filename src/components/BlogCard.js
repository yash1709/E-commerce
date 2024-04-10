import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../images/blog-1.jpg';

const BlogCard = () => {
    return (
        <>
            <div className='blog-card'>
                <div className='card-image'>
                    <img src={blog1} className='img-fluid w-100' alt='blog' />
                </div>

                <div className='blog-content'>
                    <p className='date'> 1 Dec, 2023</p>
                    <h5 className='title'>A Beautiful Sunday Morning Resonance</h5>
                    <p className='description'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <Link className='button' to='/blogs/:id'> Read More</Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard