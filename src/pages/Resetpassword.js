import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from "../components/CustomInput";


const Resetpassword = () => {
    return (
        <>
            <Meta title={'Reset Password'} />
            <BreadCrumb title='Reset Password' />


            <Container class1='signup-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>

                            <form action='' className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <CustomInput
                                    type="password"
                                    name="confpassword"
                                    placeholder="Confirm Password"
                                    className="form-control"
                                />

                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Reset</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Resetpassword