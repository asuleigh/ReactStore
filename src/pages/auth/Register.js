import React from 'react';

const Register = () => {
    const registerForm = () => <p>Sign Up</p>
    return (
        <div className="container p-5">
            <div className="row"> 
                <div className="col-md-6 offset md-3">  
                <h4>Register</h4>
                <p>Enter a valid email, and we will send you a link to complete registration</p>
                {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;