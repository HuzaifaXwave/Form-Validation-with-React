import React, { useEffect, useState } from 'react'

export const FormComponent = () => {
    // Input form Data
    const [userData, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    // Input Form Data error


    const [userDetailErr, setUserDetailErr] = useState({
        firstNameErr: false,
        lastNameErr: false,
        emailErr: false,
        passwordErr: false,
        confirmPasswordErr: false,
    })

    // form behaviour functionality

    let formBehaviour = (e) => {
        e.preventDefault()
        if (userData.firstName === "" && userData.lastName === "" && userData.email === "" && userData.password === "" && userData.confirmPassword === "") {
            setUserDetailErr({firstNameErr:true , lastNameErr:true , emailErr:true , passwordErr:true , confirmPasswordErr:true})
        }


        console.log(userData);


    }
    useEffect(() => {
        if (userData.firstName !== "") {
            setUserDetailErr({...userDetailErr , firstNameErr: false,})
        }
        if (userData.lastName !== "") {
            setUserDetailErr({...userDetailErr , lastNameErr: false,})
        }
        if (userData.email !== "") {
            setUserDetailErr({...userDetailErr ,  emailErr: false,})
        }
        if (userData.password !== "") {
            setUserDetailErr({...userDetailErr ,  passwordErr: false,})
        }
        if (userData.confirmPassword !== "") {
            setUserDetailErr({...userDetailErr ,  confirmPasswordErr: false,})
        }
    }, [userData])

    return (
        <>
            <div className='d-flex justify-content-center'>
                <form onSubmit={formBehaviour} className='w-25 mt-3'>
                    <h1 className="h3 mb-3 fw-normal text-center">Sign In Control Form</h1>
                    {/* First Name */}
                    <div className='form-floating my-2'>
                        <h6 htmlFor="floatingInput">First Name</h6>
                        <input value={userData.firstName}
                            onChange={(e) => { setUserDetails({ ...userData, firstName: e.target.value }) }}
                            type="text"
                            style={{ border: userDetailErr.firstNameErr && "2px solid red" }}
                            className="w-100 rounded-3 p-2 " />
                        {userDetailErr.firstNameErr && (<span className='text-danger'>Enter your first name</span>)}
                    </div>
                    {/* last Name */}
                    <div className='form-floating my-2'>
                        <h6 htmlFor="floatingInput">Last Name</h6>
                        <input value={userData.lastName}
                            onChange={(e) => { setUserDetails({ ...userData, lastName: e.target.value }) }}
                            type="text"
                            style={{ border: userDetailErr.lastNameErr && "2px solid red" }}
                            className="w-100 rounded-3 p-2" />
                        {userDetailErr.lastNameErr && (<span className='text-danger'>Enter your last name</span>)}
                    </div>
                    {/* Email */}
                    <div className="form-floating my-2">
                        <h6 htmlFor="floatingInput">Email address</h6>
                        <input value={userData.email} onChange={(e) => {
                            setUserDetails({ ...userData, email: e.target.value })
                        }} type="email"
                            style={{ border: userDetailErr.emailErr && "2px solid red" }}
                            className="w-100 rounded-3 p-2" id="floatingInput" placeholder="name@example.com" />
                        {userDetailErr.emailErr && (<span className='text-danger'>Enter your email</span>)}
                    </div>
                    {/* Password */}
                    <div className="form-floating my-2">
                        <h6 htmlFor="floatingPassword">Password</h6>
                        <input value={userData.password}
                            onChange={(e) => { setUserDetails({ ...userData, password: e.target.value }) }}
                            type="password"
                            style={{ border: userDetailErr.passwordErr && "2px solid red" }}
                            className="w-100 rounded-3 p-2" id="floatingPassword" placeholder="Password" />
                        {userDetailErr.passwordErr && (<span className='text-danger'>Enter your password</span>)}
                    </div>
                    {/* Confirm Password */}
                    <div className='form-floating my-2'>
                        <h6 htmlFor="floatingPassword">Confirm Password</h6>
                        <input value={userData.confirmPassword}
                            onChange={(e) => { setUserDetails({ ...userData, confirmPassword: e.target.value }) }}
                            type="password"
                            style={{ border: userDetailErr.passwordErr && "2px solid red" }}
                            className="w-100 rounded-3 p-2" />
                        {userDetailErr.emailErr && (<span className='text-danger'>Enter your confirmPassword</span>)}
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </div>

        </>
    )
}
