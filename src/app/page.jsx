"use client";
import { useAuth } from "./contexts/AuthContext";

export default function Home() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <main>
      {auth ? (
        <h1> Bienvenue {auth.email}</h1>
      ) : (
        <h1>Bienvenue sur la page d'accueil</h1>
      )}
    </main>
  );
}
