import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import blog1 from '../images/blog-1.jpg';
import Container from '../components/Container';

const SingleBlog = () => {
    return (
        <>
            <Meta title={'Dynamic Blog Name'} />
            <BreadCrumb title='Dynamic Blog Name' />


            <Container class1='single-blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>

                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-4' /> Go Back to Blogs
                            </Link>

                            <h3 className='title'>
                                A Beautiful Sunday Morning Resonance
                            </h3>
                            <img src={blog1} className='img-fluid w-100 my-4' alt='blog' />
                            <p>Lorem69</p>
                        </div>
                    </div>
                </div>
            </Container>


        </>
    )
}

export default SingleBlog;