import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = (e) => {
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const phoneNo = e.target.phoneNo.value.trim();
    const dob = e.target.dob.value;

    if (!username) {
      alert("Please fill out the Username field.");
      return;
    }
    if (!email) {
      alert("Please fill out the Email field.");
      return;
    }
    if (!dob) {
      alert("Please fill out the Date of Birth field.");
      return;
    }
    if (!phoneNo) {
      alert("Please fill out the Phone Number field.");
      return;
    }
    if (!email.includes('@')) {
      alert("Invalid email. Please check your email address.");
      return;
    }
    if (phoneNo.length !== 10 || isNaN(phoneNo)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    if (new Date(dob).getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // If all validations pass, reset the form
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.phoneNo.value = "";
    e.target.dob.value = "";

    // Close the modal
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={clickHandler}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeHandler}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>
              <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="text" name="phoneNo" id="phone" required />
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
        </div>
      )}
    </div>
  );
}

export default App;
