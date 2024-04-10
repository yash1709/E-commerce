import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
// import { useFormik } from "formik";
import CustomInput from "../components/CustomInput";


const Signup = () => {
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title='Sign Up' />


            <Container class1='signup-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Create Account</h3>

                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        type='text'
                                        name='name'
                                        placeholder='Name'
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                    />
                                </div>
                                <div>
                                    <input
                                        type='tel'
                                        name='mobile'
                                        placeholder='Mobile Number'
                                        className='form-control'
                                    />
                                </div>
                                <div className='mt-1'>
                                    <input
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        className='form-control'
                                    />
                                </div>

                                <div>
                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>Sign Up</button>
                                    </div>
                                </div>

                            </form>

                            {/* <form
                                action=""
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-column gap-1"
                            >
                                <CustomInput
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    values={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className="error ms-3">
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>
                                <CustomInput
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    values={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                />
                                <div className="error ms-3">
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>
                                <CustomInput
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    values={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className="error ms-3">
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput
                                    type="tel"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    className="form-control"
                                    values={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className="error ms-3">
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                                <CustomInput
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                    values={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className="error ms-3">
                                    {formik.touched.password && formik.errors.password}
                                </div>

                                <div>
                                    <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </Container>

        </>
    )
}
export default Signup;
