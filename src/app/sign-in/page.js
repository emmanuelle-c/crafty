'use client';
import { useState } from 'react';
import Link from "next/link";


export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Connexion réussie !');
      } else {
        alert('Erreur lors de la connexion');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur serveur');
    }
  };

  return (
    <div>
      <style jsx>{`
        .login-form {
          text-align: center;
          padding: 20px;
        }

        .login-form h2 {
          color: #6c757d;
        }

        .login-form input {
          width: 80%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #d1e7dd;
          border-radius: 8px;
          outline: none;
        }

        .login-form button {
          width: 80%;
          padding: 10px;
          background-color: #d1e7dd;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          color: #333;
        }

        .login-form button:hover {
          background-color: #badbcc;
        }

        @media (max-width: 600px) {
          .login-form {
            padding: 10px;
          }

          .login-form input {
            width: 100%;
            padding: 12px;
            font-size: 14px;
          }

          .login-form button {
            width: 100%;
            padding: 12px;
            font-size: 14px;
          }

          .login-form h2 {
            font-size: 18px;
            margin-bottom: 10px;
          }

          .login-form p {
            font-size: 14px;
          }
        }

        @media (max-width: 400px) {
          .login-form {
            padding: 8px;
          }

          .login-form input {
            font-size: 12px;
            padding: 10px;
          }

          .login-form button {
            font-size: 12px;
            padding: 10px;
          }

          .login-form h2 {
            font-size: 16px;
          }
        }
      `}</style>
      <div className="container">
        <div className="login-form">
          <h2>Se connecter</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Se connecter</button>
          </form>
          <p>Tu n'as pas encore de compte ? <Link href="/sign-in">s'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
}
