import React, { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
    const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [validationErrors, setValidationErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formdata, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // const response = await axios.post("http://127.0.0.1:8000/api/register", formdata);
            const response = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            });

            const responseData = await response.json();
            if (response.ok) {
                setValidationErrors({});
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: responseData.message,
                }).then(() => {
                    window.location.href = "/";
                });
            } else {
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
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred during registration.",
            });
        }
    }
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form  method="POST" onSubmit={handleSubmit}>
                        <h2 className="mt-4">Register New User</h2>
                        <div>
                            <label htmlFor="name"  className="form-label">Name:</label>
                            <input type="text" name="name" placeholder="Enter Full Name" className="form-control" onChange={handleChange} />
                            {validationErrors.name && <span className="text-danger">{validationErrors.name[0]}</span>}
                        </div>
                        <div>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" name="email" placeholder="Enter Email" className="form-control" onChange={handleChange} />
                            {validationErrors.email && <span className="text-danger">{validationErrors.email[0]}</span>}
                        </div>
                        <div>
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="Password" name="password" placeholder="Enter Password" className="form-control" onChange={handleChange}/>
                            {validationErrors.password && <span className="text-danger">{validationErrors.password[0]}</span>}
                        </div>
                        <button  type="submit" className="btn btn-primary mt-4">Create New User</button>
                    </form>
                </div>      
            </div>
        </div>
    );

}


export default Register;