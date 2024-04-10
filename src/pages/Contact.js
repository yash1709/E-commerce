import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi';
import Container from '../components/Container';

const Contact = () => {
    return (
        <>
            <Meta title={'Contact Us'} />
            <BreadCrumb title='Contact Us' />


            <Container class1='contact-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15009.697263120202!2d75.32700329814759!3d19.864297055036694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9861a6d01f43%3A0x3a1b932d329091e9!2sGovernment%20College%20Of%20Engineering%2C%20Aurangabad!5e0!3m2!1sen!2sin!4v1689617191113!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            className='border-0 w-100'
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className='col-12 mt-5'>
                        <div className='contact-inner-wrapper d-flex justify-content-between'>

                            <div>
                                <h3 className='contact-title mb-4'>Contact</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text' className='form-control' placeholder='Name' />
                                    </div>
                                    <div>
                                        <input type='email' className='form-control' placeholder='Email' />
                                    </div>
                                    <div>
                                        <input type='tel' className='form-control' placeholder='Mobile Number' />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            id=''
                                            className='w-100 form-control'
                                            cols={30}
                                            rows={5}
                                            placeholder='Comments'
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button className='button border-0'>Submit</button>
                                    </div>
                                </form>
                            </div>

                            <div>
                                <h3 className='contact-title mb-4'>Get in touch With us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <AiOutlineHome className='fs-5' />
                                            <address className='mb-0'>
                                                Hno: 01 Near Kranti Chowk, Sambhaji Nagar, Maharashtra
                                            </address>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <BiPhoneCall className='fs-5' />
                                            <a href='tel:+91 9011080585'>
                                                +91 9011080585
                                            </a>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <AiOutlineMail className='fs-5' />
                                            <a href="mailto:khushalbaheti1709@gmail.com">
                                                khushalbaheti1709@gmail.com
                                            </a>
                                        </li>
                                        <li className='mb-3 d-flex align-items-center gap-15'>
                                            <BiInfoCircle className='fs-5' />
                                            <p className='mb-0'>Monday-Friday 10AM - 8PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Contact