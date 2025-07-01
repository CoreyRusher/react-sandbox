import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const MyForm = () => {
  // State for form fields and their errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length > 0; // Non-empty
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Basic email regex
      case 'phone':
        return /^\d{10}$/.test(value); // 10-digit phone number
      default:
        return true;
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, value),
    }));
  };

  // Check if all fields are valid and filled
  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim().length > 0) &&
      Object.values(errors).every((error) => !error)
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, m: 'auto', mt: 4 }}>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        helperText={errors.firstName ? 'First name is required' : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        helperText={errors.lastName ? 'Last name is required' : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        helperText={errors.email ? 'Enter a valid email' : ''}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        helperText={errors.phone ? 'Enter a valid 10-digit phone number' : ''}
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!isFormValid()}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default MyForm;