"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const error = {};
    if (!formData.email) {
      error.email = "Email requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Saisissez une adresse mail valide";
    }

    if (!formData.password) {
      error.password = "Mot de passe requis";
    }

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorData = validate();
    if (Object.keys(errorData).length > 0) setErrors(errorData);
    else {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/login`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          alert("connexion ok !");
          router.push("/");
        } else {
          setErrors({ login: "Identifiant inconnu" });
        }
      } catch (error) {
        console.error("Erreur:", error);
        alert("Erreur serveur");
      }
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
          border: 1px solid #98B687;
          border-radius: 8px;
          outline: none;
        }

        .login-form button {
          width: 80%;
          padding: 10px;
          background-color: #98B687;
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
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Se connecter</button>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </form>
          <p>
            Tu n'as pas encore de compte ?{" "}
            <Link href="/sign-up">s'inscrire</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
