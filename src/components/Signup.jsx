import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            subscribed: false
        }
    )

    const handleChange = e => {
        const {name, value, type, checked} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        let message;
        message = formData.password === formData.confirmPassword ? "Successfully signed up" : "Passwords do not match";
        if(formData.subscribed){
            console.log("thanks for signup to the newsletter");
        }
        console.log(message);
        console.log(formData);

    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email:</span>
                <br />
                <input 
                    type="email"
                    placeholder="Email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <span>Password:</span>
                <br />
                <input 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <span>Confirm Password:</span>
                <br />
                <input 
                    type="password" 
                    placeholder="Password Confirmation"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input 
                    type="checkbox"
                    name="subscribed"
                    checked={formData.subscribed ? true : false} 
                    onChange={handleChange}
                />
                <span>I want to join the newsletter</span>
            </label>
            <br />
            <br />
            <button>Sign Up</button>
        </form>
    );
}
 
export default Signup;