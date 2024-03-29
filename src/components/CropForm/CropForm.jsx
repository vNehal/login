import React, { useState } from 'react';
import './CropForm.css'
const Form = () => {
    const [formData, setFormData] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div class = 'container' >
            <h2>Crop Forecasting</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nitrogen">Nitrogen:</label>
                <input type="text" id="nitrogen" name="nitrogen" value={formData.nitrogen} onChange={handleChange} required />
                
                <label htmlFor="phosphorus">Phosphorus:</label>
                <input type="text" id="phosphorus" name="phosphorus" value={formData.phosphorus} onChange={handleChange} required />
                
                <label htmlFor="potassium">Potassium:</label>
                <input type="text" id="potassium" name="potassium" value={formData.potassium} onChange={handleChange} required />
                
                <label htmlFor="temperature">Temperature:</label>
                <input type="text" id="temperature" name="temperature" value={formData.temperature} onChange={handleChange} required />
                
                <label htmlFor="humidity">Humidity:</label>
                <input type="text" id="humidity" name="humidity" value={formData.humidity} onChange={handleChange} required />
                
                <label htmlFor="ph">pH:</label>
                <input type="text" id="ph" name="ph" value={formData.ph} onChange={handleChange} required />
                
                <label htmlFor="rainfall">Rainfall:</label>
                <input type="text" id="rainfall" name="rainfall" value={formData.rainfall} onChange={handleChange} required />
                
                {/* <button type="submit" value="Submit" />hello</button> */}
                <button class="btn" value ="submit" type="submit">Submit</button>
            </form>
            {/* <button class="btn" value ="submit" type="submit">hello</button> */}

        </div>
    );
};

export default Form;