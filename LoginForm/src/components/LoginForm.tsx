import React, {useState} from 'react'
import type { FormErrors, FormValues } from '../Types';
import Inputbox from './Inputbox';

const LoginForm: React.FC = () => {
    //Data of form
    const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [success, setSuccess] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {

    const { name, value } = e.target
    // this name is for the field eg. name=email & value=abc
    setFormValues({
      ...formValues,
      [name]: value
    })

    // if error exists for the field, error sets to undefined
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!formValues.email.includes('.')) {
      newErrors.email = 'Email must contain a domain (e.g., .com)';
    }

    if (!formValues.password) {
      newErrors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // two strings will go, for email and password in an object form
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();  // Prevent page reload

    if (validate()) {
      setSuccess(true);
      console.log('Form submitted:', formValues);
      
      setTimeout(() => {
        setFormValues({ email: '', password: '' });
        setSuccess(false);
      }, 2000);
    } else {
      setSuccess(false);
    }
  }
  return (
    <div style={{
      maxWidth: '400px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      
      {/* Form Title */}
      <h2 style={{
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333',
        fontSize: '28px',
      }}>
        Login
      </h2>

      {/* Success Message */}
      {success && (
        <div style={{
          padding: '12px',
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '6px',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: '600',
        }}>
          ✅ Login successful!
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        
        {/* Email Input */}
        <Inputbox
          label='Email'
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Password Input */}
        <Inputbox
          label='Password'
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          error={errors.password}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '10px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Login
        </button>

      </form>

      {/* Helper Text */}
      <p style={{
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
        color: '#666',
      }}>
        Don't have an account? <span style={{ color: '#007bff', cursor: 'pointer' }}>Sign up</span>
      </p>

    </div>
  )
}

export default LoginForm
