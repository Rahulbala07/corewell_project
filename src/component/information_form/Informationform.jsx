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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation function
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // true if no errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error for the field as user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:8888/submit-form", {
        ...formData,
        course: Register,
      });
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "" });
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-icon" onClick={onClose}>
          <IoClose size={24} />
        </button>

        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}

          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}

          <div className="btn-group">
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}
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
