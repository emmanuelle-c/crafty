
'use client';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    postalCode: '',
    city: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const response = await fetch('/api/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Inscription réussie !');
        setFormData({
          username: '',
          email: '',
          address: '',
          postalCode: '',
          city: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        alert('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur serveur');
    }
  };

  return (
    <div>
      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border: 1px solid #d2d5c9;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .form-container h1 {
          text-align: center;
          color: #4e5b41;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .form-container input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #d2d5c9;
          border-radius: 5px;
          font-size: 14px;
        }

        .form-container input:focus {
          outline: none;
          border-color: #98B687;
        }

        .form-container .form-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }

        .form-container button {
          width: 100%;
          padding: 10px;
          background-color: #98B687;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .form-container button:hover {
          background-color: #badbcc;
        }

        @media (max-width: 600px) {
          .form-container {
            padding: 15px;
          }

          .form-container h1 {
            font-size: 18px;
          }

          .form-container input {
            padding: 12px;
            font-size: 14px;
          }

          .form-container button {
            padding: 12px;
            font-size: 14px;
          }

          .form-container .form-row {
            flex-direction: column;
            gap: 0;
          }
        }

        @media (max-width: 400px) {
          .form-container {
            padding: 10px;
          }

          .form-container h1 {
            font-size: 16px;
          }

          .form-container input {
            font-size: 12px;
            padding: 10px;
          }

          .form-container button {
            font-size: 12px;
            padding: 10px;
          }
        }
      `}</style>
      <div className="form-container">
        <h1>S’inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Pseudo"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <div className="form-row">
            <input
              type="text"
              name="postalCode"
              placeholder="Code postal"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Ville"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmation mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">S’inscrire</button>
        </form>
      </div>
    </div>
  );
}