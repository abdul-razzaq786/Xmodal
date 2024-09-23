import React, { useState } from 'react';
import './Xmodal.css';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { username, email, dob, phone } = formData;
    if (!username) return alert('Please fill out the Username field.');
    if (!email) return alert('Please fill out the Email field.');
    if (!dob) return alert('Please fill out the Date of Birth field.');
    if (!phone) return alert('Please fill out the Phone Number field.');

    if (!email.includes('@')) return alert('Invalid email. Please check your email address.');
    if (phone.length !== 10 || isNaN(phone)) return alert('Invalid phone number. Please enter a 10-digit phone number.');
    
    const today = new Date();
    const birthDate = new Date(dob);
    if (birthDate > today) return alert('Invalid Date of Birth. Please enter a valid date.');

    return true; // All validations passed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ username: '', email: '', dob: '', phone: '' }); // Reset form
      setIsOpen(false); // Close modal
    }
  };

  return (
    <div className="app">
      <button onClick={() => setIsOpen(true)}>Open Form</button>

      {isOpen && (
        <div className="modal" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <input id="username" name="username" value={formData.username} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
