'use client';

import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo Crafty" width={60} height={60} />
      </div>
      <nav className="nav-bar">
        <Link href="/" className="nav-link">Accueil</Link>
        <Link href="/about" className="nav-link">À propos</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
        <Link href="/products" className="nav-link">Produits</Link>
      </nav>
      <div className="actions">
        <input
          type="text"
          placeholder="Votre recherche..."
          className="search-input"
        />
        <button className="login-btn">
          <Link href="/sign-in" className="nav-link">Se connecter</Link>
        </button>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          background-color: #f8f8e8;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .logo {
          flex: 1 1 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav-bar {
          flex: 2 1 auto;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .nav-link {
          color: white;
          background-color: #4caf50;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          text-align: center;
        }

        .nav-link:hover {
          background-color: #45a049;
        }

        .actions {
          flex: 1 1 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .search-input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          width: 100%;
          max-width: 300px;
        }

        .login-btn {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }

        .login-btn:hover {
          background-color: #45a049;
        }

        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            align-items: stretch;
          }

          .nav-bar {
            justify-content: center;
          }

          .search-input {
            width: 100%;
          }

          .login-btn {
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}
