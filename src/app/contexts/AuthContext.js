"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Crée un contexte pour l'authentification
const AuthContext = createContext();

// Fournisseur de contexte
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  // Vérifie les cookies pour initialiser les données utilisateur au chargement
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_HOST}/api/auth/refresh`,
          {
            method: "POST",
            credentials: "include",
          }
        );
        if (response.ok) {
          const { user } = await response.json();
          console.log("Fetched user:", user);
          setAuth(user);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données utilisateur :",
          error
        );
      }
    }
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  return useContext(AuthContext);
}
