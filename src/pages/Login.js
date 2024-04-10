import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";

const Login = () => {
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title='Login' />


            <Container class1='login-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>

                            <form action='' className='d-flex flex-column gap-15'>
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        placeholder='Email'
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
                                    <Link to='/forgot-password'>
                                        Forgot Password?
                                    </Link>

                                    <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0' type='submit'>LogIn</button>
                                        <Link to='/signup' className='button signup'>SignUp</Link>
                                    </div>
                                </div>

                            </form>

                            {/* <form
                                action=""
                                onSubmit={formik.handleSubmit}
                                className="d-flex flex-column gap-2"
                            >
                                <CustomInput
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                                <div className="error ms-3">
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <CustomInput
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password}
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                                <div className="error ms-3">
                                    {formik.touched.password && formik.errors.password}
                                </div>

                                <div>
                                    <Link to="/forgot-password">Forgot Password</Link>
                                    <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type="submit">
                                            Login
                                        </button>

                                        <Link to="/signup" className="button signup">
                                            Sign Up
                                        </Link>
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

export default Login;