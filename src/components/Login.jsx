import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () =>{
    const navigate = useNavigate();
    const [ formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
       
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", formData);

            const token = response.data.authorisation.token;

            localStorage.setItem("token", token);

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Welcome back!",
            }).then(() => {
                navigate("/dashboard");
            });
        } catch (error) {
            if (error.response && error.response.status === 401) {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid email or password. Please try again.",
                });
            } else {
                const responseData = error.response.data;
                setValidationErrors(responseData);
                if (responseData) {
                    setValidationErrors(responseData);
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: responseData || "Registration failed.",
                    });
                }
            }
        }
    }
    return(
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <form method="POST" onSubmit={handleSubmit}>
                        <h3>Login Form</h3>
                        <div>
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" name="email" placeholder="Enter Email" className="form-control" onChange={handleChange} />
                            {validationErrors.email && <span className="text-danger">{validationErrors.email[0]}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="text" name="password" placeholder="Enter Password" className="form-control" onChange={handleChange} />
                            {validationErrors.password && <span className="text-danger">{validationErrors.password[0]}</span>}
                        </div>
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </form>
                    <div className="mt-4"><span>Not a Member? </span><a href="/register">Create a New User</a></div>
                </div>
            </div>
        </div>
        
    )
}

export default Login;