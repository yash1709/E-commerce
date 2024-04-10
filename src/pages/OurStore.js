import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import watch from '../images/watch.jpg';
import gr4 from '../images/gr4.svg';
import gr3 from '../images/gr3.svg';
import gr2 from '../images/gr2.svg';
import gr1 from '../images/gr.svg';
import Container from '../components/Container';




const OurStore = () => {
    const [grid, setGrid] = useState(4);
    // alert(grid);

    return (
        <>
            <Meta title={'Our Store'} />
            <BreadCrumb title='Our Store' />


            <Container class1='store-wrapper py-5 home-wrapper-2'>
                <div className='row'>

                    <div className='col-3'>

                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'> Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>

                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'> Filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availability</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                        />
                                        <label className='form-check-label' htmlFor='' >
                                            In Stock(1)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                        />
                                        <label className='form-check-label' htmlFor='' >
                                            Out Of Stock(0)
                                        </label>
                                    </div>
                                </div>

                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInput">From </label>
                                    </div>
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="floatingInput1"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInput1">To </label>
                                    </div>
                                </div>

                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <Color />
                                </div>

                                <h5 className='sub-title'>Size</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            id='color-1'
                                        />
                                        <label className='form-check-label' htmlFor='color-1'>
                                            S (2)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            id='color-2'
                                        />
                                        <label className='form-check-label' htmlFor='color-2'>
                                            M (2)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            id='color-3'
                                        />
                                        <label className='form-check-label' htmlFor='color-3'>
                                            X (2)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            id='color-4'
                                        />
                                        <label className='form-check-label' htmlFor='color-4'>
                                            XL (2)
                                        </label>
                                    </div>

                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            id='color-5'
                                        />
                                        <label className='form-check-label' htmlFor='color-5'>
                                            XXL (2)
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'> Product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Headphones
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Laptop
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Mobile
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        TV
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Home Speaker
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Accessories
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'> Random Product</h3>
                            <div>
                                <div className='random-product mb-3 d-flex'>
                                    <div className='w-50'>
                                        <img src={watch} className='img-fluid' alt='watch' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Kids Headphones bulk 10 pack multi colored for students.</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 100</b>
                                    </div>
                                </div>

                                <div className='random-product d-flex'>
                                    <div className='w-50'>
                                        <img src={watch} className='img-fluid' alt='watch' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Kids Headphones bulk 10 pack multi colored for students.</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 150</b>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block style={{width:"100px"}} '> Sort By:</p>
                                    <select className='form-control form-select'>
                                        <option value='manual'> Featured </option>
                                        <option value='best-selling' > Best Selling </option>
                                        <option value='title-ascending' > Alphabetically, A-Z </option>
                                        <option value='title-descending' > Alphabetically, Z-A </option>
                                        <option value='price-ascending' > Price, low to high </option>
                                        <option value='price-descending' > Price, high to low </option>
                                    </select>
                                </div>

                                <div className='d-flex align-items-center gap-10'>
                                    <p className='totalproducts mb-0'>21 Products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={() => { setGrid(3); }} src={gr4} className='d-block img-fluid' alt='grid' />
                                        <img onClick={() => { setGrid(4); }} src={gr3} className='d-block img-fluid' alt='grid' />
                                        <img onClick={() => { setGrid(6); }} src={gr2} className='d-block img-fluid' alt='grid' />
                                        <img onClick={() => { setGrid(12); }} src={gr1} className='d-block img-fluid' alt='grid' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='products-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <ProductCard grid={grid} />
                            </div>
                        </div>

                    </div>

                </div>
            </Container>

        </>
    )
}

export default OurStore;