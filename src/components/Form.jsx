import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true,
        employment: '',
        favColor: ''
    });

    const handleChange = e => {
        const {name, value, type, checked} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return ( 
        <>
            <h1 className="my-4 text-xl uppercase">React Forms</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
                <label>
                    <span>First Name:</span>
                    <input 
                        type="text" 
                        placeholder="First Name" className="border border-black px-2 py-1 mb-3" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    <span>Last Name:</span>
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="border border-black px-2 py-1 mb-3"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                 />
                </label>
                <br />
                <label>
                    <span>Email:</span>
                    <input 
                        type="email" 
                        placeholder="Last Name" 
                        className="border border-black px-2 py-1 mb-3"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                 />
                </label>
                <br />
                <label>
                    <span>Comments:</span>
                    <br />
                    <textarea 
                        className="border border-black h-20"
                        placeholder="Comments"
                        name="comments"  
                        value={formData.comments} 
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    <span>Are you friendly?</span>
                    <input 
                        type="checkbox"
                        checked={formData.isFriendly ? true : false}
                        name="isFriendly"
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <fieldset>
                    <legend>Current employment status</legend>
                    <label>
                        <input 
                            type="radio"
                            name="employment"
                            value="unemployed"
                            checked={formData.employment === 'unemployed'}
                            onChange={handleChange} 
                        />
                        <span>Unemployed</span>
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="employment" 
                            value="part-time"
                            checked={formData.employment === 'part-time'}
                            onChange={handleChange}
                        />
                        <span>Part-time</span>
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="employment"
                            value="full-time"
                            checked={formData.employment === 'full-time'}
                            onChange={handleChange} 
                        />
                        <span>Full-time</span>
                    </label>
                </fieldset>
                <br />
                <label>
                    <span>What is your favorite color?</span>
                    <br />
                    <select 
                        name="favColor" 
                        value={formData.favColor}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose --</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="indigo">Indigo</option>
                    </select>
                </label>
                <br />
                <br />
                <button className="px-2 py-2 border border-black">Submit</button>
                <div>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Comments: {formData.comments}</p>
                    <p>Employment: {formData.employment}</p>
                    <p>Favorite Color: {formData.favColor}</p>
                </div>
            </form>
        </>
    );
}
 
export default Form;