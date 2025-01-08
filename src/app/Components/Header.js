'use client';

import Link from "next/link";
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/images/logo.png" alt="Logo Crafty" width={60} height={60} />
      </div>
      <div className="search-bar">
        <nav>
          <Link href="/" className="nav-link">Accueil</Link>
          <Link href="/about" className="nav-link">À propos</Link>
          <Link href="/products" className="nav-link">Produits</Link>

        </nav>
        <input
          type="text"
          placeholder="Votre recherche..."
          className="search-input"
        />
        <button className="login-btn"> <Link href="/sign-in" className="nav-link">Se connecter</Link></button>
      </div>

      <style jsx>{`
        .header {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f8e8;
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .logo img {
          height: 60px;
        }
        .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        nav {
          display: flex;
          gap: 10px;
        }
        .nav-link {
          background-color: #4caf50;
          color: white;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          text-align: center;
        }
        .nav-link:hover {
          background-color: #45a049;
        }
        .search-input {
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          width: 300px;
        }
        .login-btn {
          background-color: #98B687;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .login-btn:hover {
          background-color: #badbcc;
        }
      `}</style>
    </header>
  );
}
