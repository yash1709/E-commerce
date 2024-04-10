import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch1 from '../images/watch-01.jpg';
import prodcompare from '../images/prodcompare.svg';
import view from '../images/view.svg';
import addcart from '../images/add-cart.svg';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>

            <div
                /*className='col-3'*/
                className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}
            >
                <Link
                    to={` ${location.pathname == "/" ? "product/:id" : ":id"} `}
                    className='product-card position-relative'>

                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>

                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product image' />
                        <img src={watch1} className='img-fluid' alt='product image' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>Havells</h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 pack multicoloured for students.
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}> lorem25 </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>


            <div
                /*className='col-3'*/
                className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"} `}
            >
                <Link
                    to={` ${location.pathname == "/" ? "product/:id" : ":id"} `}
                    className='product-card position-relative'>

                    <div className='wishlist-icon position-absolute'>
                        <button className='border-0 bg-transparent'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>

                    <div className='product-image'>
                        <img src={watch} className='img-fluid' alt='product iamge' />
                        <img src={watch1} className='img-fluid' alt='product iamge' />
                    </div>

                    <div className='product-details'>
                        <h6 className='brand'>Havells</h6>
                        <h5 className='product-title'>
                            Kids headphones bulk 10 pack multicoloured for students.
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`desc ${grid === 12 ? "d-block" : "d-none"}`}> lorem25 </p>
                        <p className='price'>$100.00</p>
                    </div>

                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='border-0 bg-transparent'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='border-0 bg-transparent'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default ProductCard;