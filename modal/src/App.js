import "./App.css";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = (e) => {
    // Close modal if the click target is the modal background
    if (e.target.classList.contains("modal")) {
      setIsOpen(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const phoneNo = e.target.phoneNo.value;
    const dob = new Date(e.target.dob.value);

    if (phoneNo.toString().length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (dob.getTime() > Date.now()) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
    } else {
      // Reset form fields
      e.target.username.value = "";
      e.target.email.value = "";
      e.target.phoneNo.value = "";
      e.target.dob.value = "";
      // Close the modal after submission
      setIsOpen(false);
    }
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeHandler}>
          <div className="modal-content">
            <form onSubmit={submitHandler}>
              <h2>Fill Details</h2>
              <div className="input-group">
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNo">Phone Number:</label>
                <input type="number" name="phoneNo" id="phone" required />
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" name="dob" id="dob" />
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
