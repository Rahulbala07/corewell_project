import React, { useState } from "react";
import axios from "axios";
import "./PopupForm.css";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

const PopupForm = ({ onClose, Register = "Register" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false); // 🔹 New loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 Start loading

    try {
      const response = await axios.post("http://localhost:8888/submit-form", {
        ...formData,
        course: Register,
      });
      toast.success("Form submitted successfully!");
      onClose(); // Close popup after submit
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // 🔹 Stop loading
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Close icon */}
        <button className="close-icon" onClick={onClose}>
          <IoClose size={24} />
        </button>

        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="btn-group">
            <button
              type="submit"
              className="submit-btn"
              disabled={loading} // 🔹 Disable while loading
            >
              {loading ? "Submitting..." : "Submit"} {/* 🔹 Change text */}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading} // prevent cancel during submit
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
