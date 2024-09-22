import "./App.css";
import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = (e) => {
    // Check if the clicked target is the modal background
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, email, phoneNo, dob } = e.target;

    if (phoneNo.value.toString().length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (new Date(dob.value).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      // Clear the form fields
      username.value = "";
      email.value = "";
      phoneNo.value = "";
      dob.value = "";
      setIsOpen(false); // Close the modal after successful submission
    }
  };

  return (
    <div style={{ textAlign: "center" }} className="modal" onClick={closeHandler}>
      <h1>User Details Modal</h1>
      <button onClick={clickHandler}>Open Form</button>
      {isOpen && (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={submitHandler}>
            <h2>Fill Details</h2>
            <div className="input-group">
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" placeholder="Username" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" name="email" id="email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <label htmlFor="phoneNo">Phone Number:</label>
              <input type="number" name="phoneNo" id="phoneNo" placeholder="Phone" required />
            </div>
            <div className="input-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" name="dob" id="dob" required />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Modal;
