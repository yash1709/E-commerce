import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import mainbanner1 from '../images/main-banner-1.jpg';
import catbanner1 from '../images/catbanner-01.jpg';
import catbanner2 from '../images/catbanner-02.jpg';
import catbanner3 from '../images/catbanner-03.jpg';
import catbanner4 from '../images/catbanner-04.jpg';
import service1 from '../images/service-01.png';
import service2 from '../images/service-02.png';
import service3 from '../images/service-03.png';
import service4 from '../images/service-04.png';
import service5 from '../images/service-05.png';
import camera from '../images/camera.jpg';
import tv from '../images/tv.jpg';
import headphone from '../images/headphone.jpg';
import famous1 from '../images/famous-01.webp';
import famous2 from '../images/famous-02.jpeg';
import famous3 from '../images/famous-03.webp';
import famous4 from '../images/famous-04.jpeg';
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';
import brand6 from '../images/brand-06.png';
import brand7 from '../images/brand-07.png';
import brand8 from '../images/brand-08.png';
import Container from '../components/Container';
// import { services } from '../utils/Data';




const Home = () => {
    return (
        <>
            {/* large images and small images */}
            <Container class1='home-wrapper-1 py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-banner position-relative'>
                            <img
                                src={mainbanner1}
                                className='img-fluid rounded-3'
                                alt='main banner'
                            />
                            <div className='main-banner-content position-absolute'>
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p> From $999.00 or $69/mo.</p>
                                <Link className='button'>BUY NOW</Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                            <div className='small-banner position-relative'>
                                <img
                                    src={catbanner1}
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>BEST SALE</h4>
                                    <h5>Laptops Max</h5>
                                    <p> From $1699.00 <br />or $169/mo.</p>
                                </div>
                            </div>

                            <div className='small-banner position-relative'>
                                <img
                                    src={catbanner2}
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>Buy iPad Air</h5>
                                    <p> From $599.00 <br />or $49/mo. for 12 mo.*</p>
                                </div>
                            </div>

                            <div className='small-banner position-relative'>
                                <img
                                    src={catbanner3}
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>15% OFF </h4>
                                    <h5>Smartwatch 7</h5>
                                    <p>Shop the latest band <br />styles and colors.</p>
                                </div>
                            </div>

                            <div className='small-banner position-relative'>
                                <img
                                    src={catbanner4}
                                    className='img-fluid rounded-3'
                                    alt='main banner'
                                />
                                <div className='small-banner-content position-absolute'>
                                    <h4>FREE ENGRAVING</h4>
                                    <h5>AirPods Max</h5>
                                    <p>High-fidelity Playback & <br />ultra-low distortion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


            {/* Services like free shipping etc */}
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='services d-flex align-items-center justify-content-between'>
                            {/* {services?.map((i, j) => {
                                return (
                                    <div
                                        key={j}
                                        className="d-flex align-items-center mb-4 mb-xxl-0  gap-15 "
                                    >
                                        <img src={i.image} alt="services" />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className="mb-0">{i.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })} */}
                            <div className='d-flex align-items-center gap-15'>
                                <img src={service1} alt='services' />
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className='mb-0'>From all orders over $100</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center gap-15'>
                                <img src={service2} alt='services' />
                                <div>
                                    <h6>Daily Surprise Offer</h6>
                                    <p className='mb-0'>Save upto 25% off</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center gap-15'>
                                <img src={service3} alt='services' />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className='mb-0'>Shop with an expert</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center gap-15'>
                                <img src={service4} alt='services' />
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className='mb-0'>Get Factory direct price</p>
                                </div>
                            </div>

                            <div className='d-flex align-items-center gap-15'>
                                <img src={service5} alt='services' />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className='mb-0'>100% Protected Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


            {/* Categories : Camera,watch,headphones */}
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={camera} alt='camera' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={tv} alt='tv' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Headphones</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={headphone} alt='headphones' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={camera} alt='camera' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Cameras</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={camera} alt='camera' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={tv} alt='tv' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Headphones</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={headphone} alt='headphones' />
                            </div>

                            <div className='d-flex align-items-center gap'>
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={camera} alt='camera' />
                            </div>

                        </div>
                    </div>
                </div>
            </Container>


            {/* Featured Collection  */}
            <Container class1='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Latest Collection</h3>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>


            <Container class1='famous-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src={famous1} className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series</h6>
                                <p>From $399 or $17/mo. for 24mo.*</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src={famous2} className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>600 nits of brightness.</h6>
                                <p className='text-dark'>27-inch 5k Retina Display</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src={famous3} className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>SmartPhones</h5>
                                <h6 className='text-dark'>IPhone 13 Pro.</h6>
                                <p className='text-dark'>Now in Red. From $999 or $79/mo.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src={famous4} className='img-fluid' alt='famous' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>home speakers</h5>
                                <h6 className='text-dark'>Room-filling Sound.</h6>
                                <p className='text-dark'>From $699 or $49/mo. for 15 mo.*</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>


            {/* Special Products */}
            <Container class1='special-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Special Products</h3>
                    </div>

                    <div className='row'>
                        <SpecialProducts />
                        <SpecialProducts />
                        <SpecialProducts />
                        <SpecialProducts />
                    </div>
                </div>
            </Container>


            {/* Popular Products */}
            <Container class1='popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'>Our Popular Products</h3>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </Container>


            {/* marquee of different companies */}
            <Container class1='marque-wrapper py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marque-inner-wrapper card-wrapper'>
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'>
                                    <img src={brand1} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand2} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand3} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand4} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand5} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand6} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand7} alt='brands' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src={brand8} alt='brands' />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>


            {/* 4 Blog Cards  */}
            <Container class1='blog-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Our Latest Blogs</h3>
                    </div>

                    <div className='row'>
                        <div className='col-3'> <BlogCard /> </div>
                        <div className='col-3'> <BlogCard /> </div>
                        <div className='col-3'> <BlogCard /> </div>
                        <div className='col-3'> <BlogCard /> </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Home;