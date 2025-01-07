import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Welcome</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/products">Produits</Link>
          </li>
          <li>
            <Link href="/sign-up">se connecter</Link>
          </li>
          <li>
            <Link href="/sign-in">s'inscrire</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
